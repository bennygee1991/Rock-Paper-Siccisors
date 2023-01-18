const selectionBtns = document.querySelectorAll('[data-selection');
const computerScoreSpan = document.querySelector('[data-computer-score');
const yourScoreSpan = document.querySelector('[data-your-score');
const tieScoreSpan = document.querySelector('[data-tie-score');
const computerChoice = document.querySelector('[data-computer-choice');
const playerChoice = document.querySelector('[data-player-choice');
const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors',
    },
    {
        name: 'paper',
        beats: 'rock',
    },
    {
        name: 'scissors',
        beats: 'paper',
    },
];



selectionBtns.forEach(selectionBtns => [
    selectionBtns.addEventListener('click', e => {
        const selectionName = selectionBtns.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection);
    })
]);


function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);
    if (draw) incrementScore(tieScoreSpan);
};


function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
};

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
};

function draw() {
    selection === computerSelection;
}

function addSelectionResult(selection, computerSelection) {
    computerChoice.innerText = selection.name;
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
};