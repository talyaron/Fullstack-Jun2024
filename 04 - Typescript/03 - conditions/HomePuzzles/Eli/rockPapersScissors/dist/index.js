var userChoise = String(prompt("choose rock paper or scissors (no capital letters)"));
var paper = "paper";
var rock = "rock";
var scissors = "scissors";
function checkIfApplicable(userPromt) {
    //const rngRes = rngTable();
    if (userChoise == paper) {
        return 1;
    }
    else if (userChoise == scissors) {
        return 2;
    }
    else if (userChoise == rock) {
        return 3;
    }
    else
        return 0;
}
function rngTable() {
    var randomValue = Math.random();
    var scaledRandomValue = randomValue * (3 - 0);
    var shiftedRandomValue = scaledRandomValue + 1;
    return Math.floor(shiftedRandomValue);
}
function calculateResualt(num, choise) {
    if (choise == 1) {
        if (num == 1) {
            return " paper vs paper its a DRAW!";
        }
        else if (num == 2) {
            return " paper vs scissors you LOST!";
        }
        else if (num == 3) {
            return " paper vs rock you WIN!";
        }
    }
    else if (choise == 2) {
        if (num == 1) {
            return " scissors vs paper you WIN!";
        }
        else if (num == 2) {
            return " scissors vs scisors its a DRAW!";
        }
        else if (num == 3) {
            return " scissors vs rock you LOST!";
        }
    }
    else if (choise == 3) {
        if (num == 1) {
            return " rock vs paper you LOST!";
        }
        else if (num == 2) {
            return " rock vs scissors you WIN!";
        }
        else if (num == 3) {
            return " rock vs rock its a DRAW!";
        }
    }
    return "something went wrong please try again :/";
}
var pcNum = rngTable();
var appic = checkIfApplicable(userChoise);
//const usenum= converter(userChoise);
var resualt = calculateResualt(pcNum, appic);
document.write(resualt + "  ");
//document.write(`${userChoise} ,${pcNum}`);
