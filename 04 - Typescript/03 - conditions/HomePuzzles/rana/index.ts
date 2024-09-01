//### Exercise 5: Leap Year Checker
//Write a program that asks the user to enter a year, then tells them if it's a leap year or not.
//A leap year is divisible by 4, except for century years (years ending with 00). 
//The century years are leap years only if they are perfectly divisible by 400. 
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

//### Exercise 6: Rock, Paper, Scissors Game
//Create a simple Rock, Paper, Scissors game. Ask the user to choose rock, paper, or scissors, then have the computer randomly choose. 
//Compare the choices and determine the winner using if statements.






