const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while(input == null){
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    console.log(input);
}