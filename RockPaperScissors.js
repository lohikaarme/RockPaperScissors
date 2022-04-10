let choices = [`Rock`, `Paper`, `Scissors`],
    computerSelection = '',
    playerSelection = '';


function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    computerSelection = choices[num];
    console.log(computerSelection);
    return computerSelection;
}

function cleanAns(ans) {
    ans = ans.slice(0, 1).toLocaleUpperCase() + ans.slice(1).toLocaleLowerCase();
    return ans
}

function playerPlay() {
    playerSelection = '';
    while (!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')) {
        playerSelection = cleanAns(prompt(`Chose: ${choices}`, ''));
        //    console.log(playerSelection);
    }

    console.log(playerSelection);
    return playerSelection;
}

function gameResult() {
    if (playerSelection === computerSelection) {
        console.log('Tie Game');
        return 0
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You Win!')
        return 1
    } else {
        console.log('You Lose!')
        return -1
    }
}

function playRound() {
    computerPlay();
    playerPlay();
    return gameResult();
}

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        score += playRound();
        console.log(`Current Score: ${score}`)
    }
    if (score > 0) {
        console.log(`You Won by ${score} Points!`)
    } else if (score < 0) {
        console.log(`You Lost by ${score * -1} Points`)
    } else {
        console.log(`Tie Game!`)
    }
}

//console.log(playRound());
game();