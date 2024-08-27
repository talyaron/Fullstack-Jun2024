// ### Exercise 4: Leap Year Checker
// const year: number = Number(prompt("Enter your year:"));
// function checkLeapYear(year: number): string {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Your year is a leap year.";
//             } else {
//                 return "Your year is not a leap year.";
//             }
//         } else {
//             return "Your year is a leap year.";
//         }
//     } else {
//         return "Your year is not a leap year.";
//     }
// }
// const answer = checkLeapYear(year);
// console.log(answer);
// ### Exercise 5: Rock, Paper, Scissors Game
var user = prompt("Choose Rock/paper/scissors");
var choice = ['rock', 'paper', 'scissors'];
var randomchoice = Math.floor(Math.random() * 3);
var computer = choice[randomchoice];
function Game(user) {
    if (user === computer) {
        return "Sorry, it tie.";
    }
    else if (user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === "scissors" && computer === "paper") {
        return "You Win, Congratulations";
    }
    else {
        return "Computer Wins";
    }
}
if (user !== null) {
    var result = Game(user);
    console.log("Your Choose is " + user);
    console.log("Computer Choose is " + computer);
    console.log(result);
}
else {
    console.log("you dont chosen, paper/rock/scissors");
}
// ### Exercise 6: Simple Calculator
// const firstnumber: number = Number(prompt("Please Enter your First Number"));
// const secondnumber: number = Number(prompt("Please Enter your Second Number"));
// const operation = prompt("Please Enter an operation");
// function calculate(firstnum: number, secondnum: number, op: string): string{
//   if(op === "+"){
//     return `Result: ${firstnum + secondnum}`
//   } else if(op === "-"){
//     return `Result: ${firstnum - secondnum}`
//   } else if(op === "*"){
//     return `Result: ${firstnum * secondnum}`
//   } else if(op === "/"){
//     if(secondnum === 0){
//       return `Error: Division by zero is not allowed.`
//     }
//     return `Result: ${firstnum / secondnum}`
//   }
//   return 'Error: Invalid operation. Please enter one of the following: +, -, *, /.'
// }
// if (operation !== null) {
//   const result = calculate(firstnumber, secondnumber, operation);
//   console.log(result);
// } else {
//   console.log("Error: No operation selected.");
// }
// ### Exercise 7: Password Strength Checker
// const password: string | null = prompt("Enter your password");
// function checkPassword(password: string): string {
//     if (password.length < 8) {
//         return "Too Short";
//     } else if (password.length > 20) {
//         return "Too Long";
//     }
//     return "Password is OK";
// }
//   if(password !== null){
//   const output = checkPassword(password)
//   console.log(output)
//   } else {
//     console.log("No Password Entered.")
//   }
// ### Exercise 8: Temperature Converter with Recommendations
// const temperature: number = Number(prompt("Please enter the temperature:"));
// const unit: string | null = prompt("Please enter the unit of temperature (F for Fahrenheit, C for Celsius):");
// function convertTemperature(temp: number, unit: string): number {
//     if (unit === "F") {
//         return (temp - 32) * 5 / 9;
//     } else if (unit === "C") {
//         return (temp * 9 / 5) + 32;
//     } else {
//         return NaN;
//     }
// }
// function clothing(tempInCelsius: number): string {
//     if (tempInCelsius < 0) {
//         return "It's freezing! Wear a heavy coat.";
//     } else if (tempInCelsius >= 0 && tempInCelsius <= 10) {
//         return "It's cold. Bring a jacket.";
//     } else if (tempInCelsius > 10 && tempInCelsius <= 20) {
//         return "It's cool. A light sweater should be fine.";
//     } else if (tempInCelsius > 20 && tempInCelsius <= 30) {
//         return "It's warm. T-shirt weather!";
//     } else {
//         return "It's hot! Stay cool and hydrated.";
//     }
// }
// if (unit !== null && (unit === "F" || unit === "C")) {
//     const tempInCelsius = convertTemperature(temperature, unit);
//     const recommendation = clothing(tempInCelsius);
//     console.log(`Celsius temperature: ${tempInCelsius.toFixed(2)}°C`);
//     console.log(recommendation);
// } else {
//     console.log("Error: Invalid unit of temperature. Please enter 'F' or 'C'.");
// }
