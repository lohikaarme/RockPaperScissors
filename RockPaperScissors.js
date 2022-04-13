let choices = [`Rock`, `Paper`, `Scissors`];

let computerPlay = () => choices[Math.floor(Math.random() * 3)]

let cleanAns = (ans) => ans.slice(0, 1).toUpperCase() + ans.slice(1).toLowerCase();

let playerPlay = () => {
    playerSelection = '';
    while (!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')) {
        playerSelection = cleanAns(prompt(`Chose: ${choices.join(', ')}`, ''));
    }
    return playerSelection;
}

let gameResult = (playerSelection, computerSelection) => {
    console.log(`Player Choice: ${playerSelection} \nComputer Choice: ${computerSelection}`)

    if (playerSelection === computerSelection) {
        console.log('Tie Game!');
        return 0;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`${playerSelection} Beats ${computerSelection}: You Won!`);
        return 1;
    } else {
        console.log(`${computerSelection} Beats ${playerSelection}: You Lose!`);
        return -1;
    }
}

let playRound = () => gameResult(playerPlay(),computerPlay());

let game = () => {
    let score = 0
    for (let i = 0; i < 5; i++) {
        score += playRound();
        console.log(`Round ${i + 1} Score: ${score}`);
    }
    if (score > 0) {
        console.log(`You Won the Match by ${score} Points!`);
    } else if (score < 0) {
        console.log(`You Lost the Match by ${score * -1} Points!`);
    } else {
        console.log(`Match Tied!`);
    }
}

game();