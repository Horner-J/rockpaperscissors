var myArray = [
    "Rock",
    "Paper",
    "Scissors"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function computerPlay (){
    return randomItem
}

var playerSelection = window.prompt("Rock, Paper or Scissors? ");

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));