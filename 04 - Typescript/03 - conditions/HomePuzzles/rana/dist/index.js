//### Exercise 5: Leap Year Checker
//Write a program that asks the user to enter a year, then tells them if it's a leap year or not.
//A leap year is divisible by 4, except for century years (years ending with 00). 
//The century years are leap years only if they are perfectly divisible by 400. 
var year = Number(prompt('enter a year'));
function isLeapYear(year) {
    if (year % 400 === 0) {
        return 'true';
    }
    else if (year % 100 === 0) {
        return 'false';
    }
    else if (year % 4 === 0) {
        return 'true';
    }
    else {
        return 'false';
    }
}
if (isLeapYear(year) === 'true') {
    console.log(year + " \u05D4\u05D9\u05D0 \u05E9\u05E0\u05D4 \u05DE\u05E2\u05D5\u05D1\u05E8\u05EA.");
}
else {
    console.log(year + " \u05D0\u05D9\u05E0\u05D4 \u05E9\u05E0\u05D4 \u05DE\u05E2\u05D5\u05D1\u05E8\u05EA.");
}
var answer = isLeapYear(year);
document.write(answer);
//### Exercise 6: Rock, Paper, Scissors Game
//Create a simple Rock, Paper, Scissors game. Ask the user to choose rock, paper, or scissors, then have the computer randomly choose. 
//Compare the choices and determine the winner using if statements.
