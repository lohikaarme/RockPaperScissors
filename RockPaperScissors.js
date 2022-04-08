let choices = [`rock`, `paper`, `scissors`];


function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let compChoice = choices[num];
    console.log(compChoice)
}

computerPlay()