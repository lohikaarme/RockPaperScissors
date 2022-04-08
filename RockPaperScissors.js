let choices = [`Rock`, `Paper`, `Scissors`];


function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let computerSelection = choices[num];
    console.log(computerSelection);
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt(`Chose: ${choices}`, '');
    playerSelection = playerSelection.slice(0, 1).toLocaleUpperCase() + playerSelection.slice(1).toLocaleLowerCase();
    console.log(playerSelection)
    return playerSelection
}



playerPlay()
computerPlay()