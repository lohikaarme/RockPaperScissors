let choices = [`Rock`, `Paper`, `Scissors`];


function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let computerSelection = choices[num];
    console.log(computerSelection);
    return computerSelection;
}

function cleanAns(ans) {
    ans = ans.slice(0, 1).toLocaleUpperCase() + ans.slice(1).toLocaleLowerCase();
    return ans
}

function playerPlay() {
    let playerSelection = ''

    while (!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')) {
        playerSelection = cleanAns(prompt(`Chose: ${choices}`, ''));
        //playerSelection = playerSelection.slice(0, 1).toLocaleUpperCase() + playerSelection.slice(1).toLocaleLowerCase();
        console.log(playerSelection);
    }

    console.log(playerSelection);
    return playerSelection;
}

function gameResult() {
    let result = computerPlay() + playerPlay();
    console.log(result);
    return result;
}

function playRound() {
    console.log(gameResult());
}

playRound()