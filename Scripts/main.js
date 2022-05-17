function game(){
    const games = 5; // total games 
    let playerPoints = 0; // player points to start
    let computerPoints = 0; // computer points to start
  
    for(let i = 0; i < games; i++) {
const choices = ["rock", "paper", "scissors"];//Creates array of possible choices

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];//Randomizes computer choice
}

let computerSelection = computerPlay();
console.log(computerSelection)

let playerSelection = prompt("Type Rock, Paper or Scissors").toLowerCase();//Prompts user for input
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win!"
    } else return "Loser!";
}    
console.log(playRound(playerSelection, computerSelection)); 

}
}