// return Math.floor(Math.random() * (max - min + 1)) + min;
var userChoice = prompt("pls enter rock, paper, or scissors");
//rock=1
//paper=2
//scissors=3
function randomChoice() {
    var rendomNumber = Math.floor(Math.random() * 3);
    switch (rendomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "null";
    }
}
//true is user win, false comp.
function game(userChoice) {
    var compChoice = randomChoice();
    try {
        if (userChoice == null)
            throw new Error("u didnt choose any ");
        //exception
        userChoice = userChoice === null || userChoice === void 0 ? void 0 : userChoice.toLowerCase();
        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors")
            throw new Error("invalid tool");
        if (userChoice === compChoice)
            return { result: "its a tie!!", compChoice: compChoice };
        else if (userChoice === "rock" && compChoice === "scissors"
            || userChoice === "paper" && compChoice === "rock"
            || userChoice === "scissors" && compChoice === "paper")
            return { result: "u win!!", compChoice: compChoice };
        else
            return { result: "u lose!!", compChoice: compChoice };
    }
    catch (e) {
        console.error(e);
        return { error: e.message, result: "", compChoice: compChoice };
    }
}
// document.write(game(userChoice,rendomChoice()));
var result = game(userChoice);
console.log(result);
document.write("u pick " + userChoice + " vs " + result.compChoice + " and " + result.result);
