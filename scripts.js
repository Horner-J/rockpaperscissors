var myArray = [
    "rock",
    "paper",
    "scissors"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function computerPlay (){
    return randomItem
}

var playerSelection = window.prompt("rock, paper or scissors? ");
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));