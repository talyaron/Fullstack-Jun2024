// Exercise 5: Leap Year Checker
// let year: number = Number(prompt("Enter a year"));
// console.log(year);

// function leapYear(year: number): string {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return "Your year is leap";
//       }
//       return "Your year is not leap";
//     }
//   }
//   return "Your year is not leap";
// }

// const result = leapYear(year);
// document.write(result);

// Exercise 6: Rock, Paper, Scissors Game

let year: number = Number(prompt("Enter a year"));
console.log(year);

function leapYear(year: number): string {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Your year is leap";
      }
      return "Your year is not leap";
    }
  }
  return "Your year is not leap";
}

const result = leapYear(year);
document.write(result);

// Exercise 7: Simple Calculator

// Make a calculator that asks the user for two numbers and an operation (+, -, *, /). Use if statements to perform the correct operation and display the result. Remember to handle division by zero!

// let one: number = Number(prompt("Enter a number"));
// let two: number = Number(prompt("Enter a second number"));
// let operation:operator = prompt("enter an operation of your choise (+, -, *, /)");
// console.log(one);
// console.log(two);
// console.log(operation);

// function calculator(one: number, two: number, operation: operator) :number {
//   if ((operation === '+')) {
//     return one + two;
//   } else if ((operation === '-')) {
//     return one - two;
//   } else if ((operation === '*')) {
//     return one * two;
//   } else if ((operation === '/')) {
//     if (two === 0){
//         return "Error: division by zero";
//     }
//     return one / two;}
//     else return "Error";

// }

// const result = calculator(one, two, operation);
// console.log(result);
// document.write(result);

// Exercise 8: Password Strength Checker
// let Password: string = (prompt("Enter a password at least 8 characters long and no more than 20 characters long."));
// console.log(Password);

// function checkingPassword(password: string): string {
//   if (password.length === 0) {
//     return "Please enter a password longer than 8 characters and no more than 20 characters long."}
//    else if (password.length > 20) {
//         return "Please enter a password not longer than 20 characters long."}
// else      if (password.length < 8) {
//     return "Please enter a password longer than 8 characters."}
//     return "Great password, buddy!";

//       }

// const result = checkingPassword(Password);
// document.write(result);

// Exercise 9: Temperature Converter with Recommendations
// Create a program that converts temperatures between Fahrenheit and Celsius.
// Ask the user to enter a temperature and the unit (F or C).
// Convert it to the other unit and display the result.
// Additionally, use if statements to give clothing recommendations based on the temperature:
// - Below 32°F (0°C): "It's freezing! Wear a heavy coat."
// - 32°F to 50°F (0°C to 10°C): "It's cold. Bring a jacket."
// - 51°F to 68°F (11°C to 20°C): "It's cool. A light sweater should be fine."
// - 69°F to 86°F (21°C to 30°C): "It's warm. T-shirt weather!"
// - Above 86°F (30°C): "It's hot! Stay cool and hydrated."

// let Temperature: number = Number(
//   prompt(
//     "Enter a temperature."
//   )
// );
// let Unit: string = prompt("Please enter a unit: F or C");
// console.log(Temperature);
// console.log(Unit);

// function converting(
//   Temperature: number,
//   Unit: string
// ): number | string {
//   if (Unit === "C" || Unit ==="c") {
//     return ((Temperature * 9/5) + 32) + "F";}
       
//     else  if(Unit === "F"|| Unit==="f") {
//         return ((Temperature - 32) * 5/9) + "C";}
//   else return "Please enter C or F";
// }


// function suggesting(Temperature:number,Unit:string): string{
//     if (Unit === "C" || Unit ==="c"){
//         if (Temperature<0){
//             return "It's freezing! Wear a heavy coat.";
//         }
//         else if (Temperature<=10){
//            return "It's cold. Bring a jacket.";
//         }
//         else if (Temperature<=20){
//             return "It's cool. A light sweater should be fine.";
//         }
//         else if (Temperature<=30){
//             return "It's warm. T-shirt weather!";
//         }
//         else if (Temperature>=30){
//             return "It's hot! Stay cool and hydrated.";
//         }
//     }
//     else  if (Unit === "F" || Unit ==="f"){
//         if (Temperature<32){
//             return "It's freezing! Wear a heavy coat.";
//         }
//         else if (Temperature<=50){
//            return "It's cold. Bring a jacket.";
//         }
//         else if (Temperature<=68){
//             return "It's cool. A light sweater should be fine.";
//         }
//         else if (Temperature<=86){
//             return "It's warm. T-shirt weather!";
//         }
//         else if (Temperature>=86){
//             return "It's hot! Stay cool and hydrated.";
//         }
//     }
// }

// const result = converting(Temperature, Unit);
// document.write(result + "<br>");

// const suggest = suggesting(Temperature, Unit);
// document.write(suggest);
