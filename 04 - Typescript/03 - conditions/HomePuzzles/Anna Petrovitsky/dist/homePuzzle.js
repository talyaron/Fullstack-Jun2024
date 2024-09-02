//Exercises 5:
var year = Number(prompt("Please enter a year:"));
document.write("Exercises 5 : <br>");
leapYear(year);
function leapYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            document.write(year + " is a leap year.");
        }
    }
    else if (year % 4 == 0) {
        document.write(year + " is a leap year.");
    }
    else {
        document.write(year + " is not a leap year.");
    }
}
//Exercises 6:
var user1 = prompt("Please choose rock,paper,scissors:");
var user2 = randomChoice();
//const result : string = game(user1,user2);
document.write("<br> Exercises 6 : <br> ");
//game(user1,user2);
function randomChoice() {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "";
    }
}
function game(user1, user2) {
    if (user1 = 'rock') {
        switch (user2) {
            case 'rock':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " none of the user win !!!";
            case 'paper':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " User 2 WIN THE GAME !!!";
            case 'scissors':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " User 1 WIN THE GAME !!!";
            default:
                return "";
        }
    }
    else if (user1 = 'paper') {
        switch (user2) {
            case 'rock':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " User 1 WIN THE GAME !!!";
            case 'paper':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " none of the user win !!!";
            case 'scissors':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " User 2 WIN THE GAME !!!";
            default:
                return "";
        }
    }
    else {
        switch (user2) {
            case 'rock':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " User 2 WIN THE GAME !!!";
            case 'paper':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " User 1 WIN THE GAME !!!";
            case 'scissors':
                return "User 1 choice a " + user1 + " and User 2 choice a " + user2 + " none of the user win!!!";
            default:
                return "";
        }
    }
}
//Exercises 7:
var firstNum = Number(prompt('Please enter first number:'));
var secondNum = Number(prompt('Please enter second number:'));
var operator = prompt('Please enter the operator: + or - or * or /') || 'null';
var result = calculator(firstNum, secondNum, operator);
document.write("Exercises 7 <br> Calculator result is " + firstNum + " " + operator + " " + secondNum + " = " + result);
function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}
//Exercises 8:
var password = prompt("Please enter a password:") || 'null';
var testPassword = checkPassword(password);
document.write("<br> Exercises 8: <br> The password that you entered is " + testPassword);
function checkPassword(password) {
    if (password.length < 8) {
        return "Too Short";
    }
    else if (password.length <= 20) {
        return "OK";
    }
    else {
        return "Too long";
    }
}
//Exercises 9:
var temp = Number(prompt("Please enter the temperatures:"));
var unit = prompt("Please enter the unit F or C:") || "null";
var converted = convert(temp, unit);
var recommend = clothingReco(temp, unit);
document.write("<br> Exercises 9: <br> The temperatur converted from " + temp + unit + " to " + converted + " <br> \n    Base on the temperature " + temp + unit + " the clothing recommendations is " + recommend);
function convert(temp, unit) {
    if (unit = 'C') {
        return ((temp * 9 / 5) + 32);
    }
    else {
        return ((temp - 32) * 5 / 9);
    }
}
function clothingReco(temp, unit) {
    if (unit = 'C') {
        if (temp < 0)
            return "It's freezing! Wear a heavy coat.";
        else if (temp <= 10)
            return "It's cold. Bring a jacket.";
        else if (temp <= 20)
            return "It's cool. A light sweater should be fine.";
        else if (temp <= 30)
            return "It's warm. T-shirt weather!";
        else
            return "It's hot! Stay cool and hydrated.";
    }
    else {
        if (temp < 32)
            return "It's freezing! Wear a heavy coat.";
        else if (temp <= 50)
            return "It's cold. Bring a jacket.";
        else if (temp <= 68)
            return "It's cool. A light sweater should be fine.";
        else if (temp <= 86)
            return "It's warm. T-shirt weather!";
        else
            return "It's hot! Stay cool and hydrated.";
    }
}
