
const choices = ["rock", "paper", "scissors"];//Creates array of possible choices

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];//Randomizes computer choice
}

const computerSelection = computerPlay();
console.log(computerSelection)

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");//Prompts user for input
    while(input == null){
        input = prompt("Type Rock, Paper or Scissors");//Keeps prompt box persistent until choice is made 
    }
    input = input.toLowerCase(); //Makes player choice case-insensitive
    console.log(input);
}

const playerSelection = playerChoice();


function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return "tie!";
   } 
}    
console.log(playRound()); 

  
