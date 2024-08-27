// Create a simple Rock, Paper, Scissors game. Ask the user to choose rock, paper, 
// or scissors, then have the computer randomly choose.
// Compare the choices and determine the winner using if statements.
var choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    return (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
        ? "You win!"
        : "Computer wins!";
}
function playGame() {
    var userInput = prompt("Choose rock, paper, or scissors:");
    var userChoice = userInput ? userInput.toLowerCase() : "";
    if (!choices.includes(userChoice)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return;
    }
    var computerChoice = getComputerChoice();
    console.log("You chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);
    var result = determineWinner(userChoice, computerChoice);
    console.log(result);
}
playGame();
