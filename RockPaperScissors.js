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
    while (!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')) {
        playerSelection = cleanAns(prompt(`Chose: ${choices}`, ''));
        console.log(playerSelection);
    }

    console.log(playerSelection);
    return playerSelection;
}

function gameResult() {
    if (playerSelection === computerSelection) {
        console.log('Tie Game');
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper' ) {
        console.log('You Win!')
    } else {
        console.log('You Lose!')
    }

}

function playRound() {
    computerPlay();
    playerPlay();
    console.log(gameResult());
}

playRound()