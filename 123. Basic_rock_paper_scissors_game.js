//*------ Basic rock paper scissors game

//? Here's a basic implementation of a  rock-paper-scissors game using JavaScript.

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (!["rock", "paper", "scissors"].includes(playerSelection))
    return "invalid selection";
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter a choice (rock, paper, scissors):");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(
      `You chose: ${playerSelection}, Computer chose: ${computerSelection}, Result: ${result}`
    );
    if (result === "Player wins!") {
      playerScore += 1;
    } else if (result === "Computer wins!") {
      computerScore += 1;
    }
    console.log(`Score - You: ${playerScore}, Computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("you win");
  } else if (computerScore > playerScore) {
    console.log("computer wins");
  } else {
    console.log("it's a tie");
  }
}
