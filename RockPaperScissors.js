let choices = [`Rock`, `Paper`, `Scissors`];
let playerScore = 0;
let compScore = 0;
let bestOf = 5;

const playerChoice = document.querySelector('#playerChoice');
const compChoice = document.querySelector('#compChoice');
const result = document.querySelector('#result');
const plyScore = document.querySelector('#playerScore');
const comScore = document.querySelector('#compScore');
const endResult = document.querySelector('#endResult');


let computerPlay = () => choices[Math.floor(Math.random() * 3)]

let playRound = (playerSelection, computerSelection) => {
    playerChoice.textContent = `Player Choice: ${playerSelection}`;
    compChoice.textContent = `Computer Choice: ${computerSelection}`;

    if (playerSelection === computerSelection) {
        result.textContent = 'Tie Game!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result.textContent = `${playerSelection} beats ${computerSelection}: You Win!`;
        playerScore += 1;
    } else {
        result.textContent = `${computerSelection} beats ${playerSelection}: You Lose!`;
        compScore += 1;
    }
    plyScore.textContent = `Player score: ${playerScore}`;
    comScore.textContent = `Computer score: ${compScore}`;
    checkMatch(playerScore, compScore);
}

let checkMatch = (playerScore, compScore) => {
    if (playerScore == bestOf) {
        endResult.textContent = `Player Wins!`;
    } else if (compScore == bestOf) {
        endResult.textContent = `Computer Wins!`;
    } else {
        endResult.textContent = `It's anyone's game!`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, computerPlay()))
})



/*let game = () => {

    for (let i = 0; i < 5; i++) {
        //score += playRound();
        //score.textContent = `Round ${i + 1} Score: ${score}`;
    }
    if (playerScore == bestOf) {
        endResult.textContent = `You Won the Match!`;
    } else if (compScore == bestOf) {
        endResult.textContent = `You Lost the Match!`;
    } else {
        endResult.textContent = `Match Tied!`;
    }
}

game();
*/


/*
let game = () => {
    let score = 0
    for (let i = 0; i < 5; i++) {
        score += playRound();
        score.textContent = `Round ${i + 1} Score: ${score}`;
    }
    if (score > 0) {
        score.textContent = `You Won the Match by ${score} Points!`;
    } else if (score < 0) {
        score.textContent = `You Lost the Match by ${score * -1} Points!`;
    } else {
        score.textContent = `Match Tied!`;
    }
}

game();
*/