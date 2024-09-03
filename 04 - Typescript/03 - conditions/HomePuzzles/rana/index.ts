//### Exercise 5: Leap Year Checker
//Write a program that asks the user to enter a year, then tells them if it's a leap year or not.
//A leap year is divisible by 4, except for century years (years ending with 00). 
//The century years are leap years only if they are perfectly divisible by 400. .
/*
const year:number= Number(prompt('enter a year'));

function isLeapYear(year: number): string {
    if (year % 400 === 0) {
        return 'true';
    } else if (year % 100 === 0) {
        return 'false';
    } else if (year % 4 === 0) {
        return 'true';
    } else {
        return 'false';
    }
}

if (isLeapYear(year) === 'true') {
    console.log(`${year} היא שנה מעוברת.`);
} else {
    console.log(`${year} אינה שנה מעוברת.`);
}

const answer = isLeapYear(year);
document.write(answer);
*/



//### Exercise 6: Rock, Paper, Scissors Game .Create a simple Rock, Paper, Scissors game. Ask the user to choose rock, paper, or scissors, then have the computer randomly choose. 
//Compare the choices and determine the winner using if statements.
/*
function playGame() {
    const userChoice = prompt("Choose rock, paper, or scissors:");
    const normalizedUserChoice = userChoice ? userChoice.toLowerCase() : null;

    if (!normalizedUserChoice) {
        console.log("No valid choice was made.");
        return; // מסיים את המשחק אם לא הייתה בחירה תקינה
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Computer chose: ${computerChoice}`);

    if (normalizedUserChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (normalizedUserChoice === "rock" && computerChoice === "scissors") ||
        (normalizedUserChoice === "paper" && computerChoice === "rock") ||
        (normalizedUserChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}

playGame();
*/

//### Exercise 7: Simple Calculator
//Make a calculator that asks the user for two numbers and an operation (+, -, *, /). Use if statements to perform the correct operation and display the result. Remember to handle division by zero!

function simpleCalculator() {
    const num1 = Number(prompt("הכנס את המספר הראשון:"));
    const num2 = Number(prompt("הכנס את המספר השני:"));
    const operation = prompt("הכנס את הפעולה (+, -, *, /):");

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            console.log("לא ניתן לחלק באפס!");
            return;
        }
        result = num1 / num2;
    } else {
        console.log("פעולה לא חוקית.");
        return;
    }

    console.log("התוצאה היא: " + result);
}

simpleCalculator();






