// const Age = parseInt(prompt("Please enter your age"));


// let isAllowedToDrink = Age >= 18;
// let Drink;

// if (isAllowedToDrink === true) {
//     Drink = "allowed";
// } else(isAllowedToDrink != false); { 
//     Drink = "not allowed";
// }

// document.write(`Hello, you are ${Age} years old. You are ${Drink} to drink.`);
// console.log(Age);


////////// EXERCISE 1 /////////

// const number = prompt("please enter number");

// function NumberType (number : number)  {
//     if (number > 0) {
//         return `positive`
//     }
//    else if (number < 0) {
//         return `negative`
//     }
//     else  {
//         return `Zero`
//     }
// }
//  const answer = NumberType(number);
// document.write(`Hello, you are ${number} is. it is ${answer} number.`);
// console.log(number, answer);


////////// EXERCISE 2 /////////

// const TestScore = parseInt(prompt("Type a test score from 0 to 100"));

// function score(number: number): string {
//     if (number > 90 && number <= 100){
//         return 'A - the highest grade, given for excellent work.';
//     } else if (number >= 80 && number <= 89) {
//         return 'B - a good grade, showing above-average performance.';
//     } else if (number >= 70 && number <= 79) {
//         return 'C - an average grade.';
//     } else if (number >= 60 && number <= 69) {
//         return 'D - a below-average grade, but still passing.';
//     } else if (number >=1 && number <= 59) {
//         return 'F - means failing the test.';
//     }
//     else {
//         return `ERROR`
//     }
// }


// const grade = score(TestScore);
// document.write(`Your grade is ${grade}`);
// console.log(grade);

////////// EXERCISE 3 /////////

// const NumberEvenOdd = parseInt(prompt("Write a number and I will tell you if it's even or odd"));

// function checkOddOrEven(number: number): string {
//     if (number % 2 === 0) {
//         return `${number} is even.`;
//     } else {
//         return `${number} is odd.`;
//     }
// }

// const result = checkOddOrEven(NumberEvenOdd);

// document.write(result);
// console.log(result);

////////// EXERCISE 4 /////////

// const salary = parseInt(prompt("Type salary") || "0");
// const implement = parseInt(prompt("Type Implement") || "0");

// function calculateTax(income: number, implement: number): string {
//     let taxRate: number;

//     if (income > 100000) {
//         taxRate = 0.30; 
//     } else if (income >= 50001 && income <= 100000) {
//         taxRate = 0.20; 
//     } else if (income >= 10001 && income <= 50000) {
//         taxRate = 0.10;
//     } else if (income <= 10000) {
//         taxRate = 0;
//     } else {
//         return `ERROR`;
//     }

//     const taxableAmount = income - implement;
//     const taxAmount = taxableAmount * taxRate;

//     return `The tax on a salary of ${income} with an implement of ${implement} is ${taxAmount}.`;
// }

// const tax = calculateTax(salary, implement);
// document.write(tax);
// console.log(tax);

////////// EXERCISE 5 /////////


// const LeapYear = parseInt(prompt("Write a year and I will tell you if it's leap year or not"));

// function checkLeapYear (number: number): string {
//     if ((number % 400 === 0) || (number % 4 === 0 && number % 100 !== 0))  {
//         return `${number} is a leap year`;
//     } else {
//         return `${number} is not a leap year.`;
//     }
// }

// const result = checkLeapYear(LeapYear);

// document.write(result);
// console.log(result); 

////////// EXERCISE 6 /////////

// const UserChoice: string | null = prompt("Choose: Rock, Paper, or Scissors")?.toLowerCase();

// const ComputerChoices = ['Rock', 'Paper', 'Scissor'];
// const ComputerChoice = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];

// function winner(user:string | null, computer: string): string {
//     if (user == computer) {
//         return `It's a tie! Both chose ${user}.`;
//     }
//  else if (
//     (user === "rock" && computer === "scissors") ||
//     (user === "paper" && computer === "rock") ||
//     (user === "scissors" && computer === "paper")
// ) {
//     return `You win! your choice: ${user} beats the computer choice: ${computer}.`;
// } else if (user) {
//     return `You lose! the computer choice: ${computer} beats your choice: ${user}.`;
// } else {
//     return "Invalid choice. Please choose Rock, Paper, or Scissors.";
// }
// }


// const result = winner(UserChoice, ComputerChoice);

// console.log(`User choice: ${UserChoice}`);
// console.log(`Computer choice: ${ComputerChoice}`);
// console.log(result);
// document.write(result);


////////// EXERCISE 7 /////////

// const NumberOne: number | null = parseInt(prompt("Choose first number") || "0");
// const NumberTwo: number | null = parseInt(prompt("Choose second number") || "0");
// const operation: string | null = prompt("Choose operation (+, -, *, /)");

// function calculator(NumberOne: number, NumberTwo: number, operation: string): string {
//     let result: number | null = null;

//     if (operation === "+") {
//         result = NumberOne + NumberTwo;
//         return `The answer is ${NumberOne} + ${NumberTwo} = ${result}`;
//     } else if (operation === "-") {
//         result = NumberOne - NumberTwo;
//         return `The answer is ${NumberOne} - ${NumberTwo} = ${result}`;
//     } else if (operation === "*") {
//         result = NumberOne * NumberTwo;
//         return `The answer is ${NumberOne} * ${NumberTwo} = ${result}`;
//     } else if (operation === "/") {
//         if (NumberTwo === 0) {
//             return "Division by zero is not allowed.";
//         }
//         result = NumberOne / NumberTwo;
//         return `The answer is ${NumberOne} / ${NumberTwo} = ${result}`;
//     } else {
//         return "Invalid operation choice.";
//     }
// }

// const result = calculator(NumberOne as number, NumberTwo as number, operation as string);

// console.log(`User's numbers and operation: ${NumberOne}, ${NumberTwo}, ${operation}`);
// console.log(result);
// document.write(result);


////////// EXERCISE 8 /////////

// const Password: string | null = prompt("Enter a password and I will check the strength of the password");

// function PasswordStrength(Password: string | null): string {
//     if (!Password) {
//         return "No password entered";
//     }
    
//     if (Password.length < 8) {
//         return "Too short";
//     } else if (Password.length > 20) {
//         return "Too long";
//     } else {
//         return "OK";
//     }
// }

// const result = PasswordStrength(Password);

// console.log(`User's password is: ${result}`);
// document.write(`User's password is: ${result}`);

////////// EXERCISE 9 /////////


// ### Exercise 9: Temperature Converter with Recommendations

// const Temp: number | null = parseFloat(prompt('Enter a temperature') || '0');
// const unit: string | null = prompt('Enter a unit (F or C)');

// function WeatherConvertor(Temp: number | null, unit: string | null): string {
//     if (Temp === null || !unit) {
//         return "Invalid input. Please provide both temperature and unit.";
//     }

//     let convertedTemp: number;
//     let result: string;

//     if (unit.toUpperCase() === 'F') {
//         convertedTemp = (Temp - 32) * 5 / 9;
//         result = `${Temp}°F is ${convertedTemp.toFixed(2)}°C.`;
//     } else if (unit.toUpperCase() === 'C') {
//         convertedTemp = (Temp * 9 / 5) + 32;
//         result = `${Temp}°C is ${convertedTemp.toFixed(2)}°F.`;
//     } else {
//         return "Invalid unit. Please enter 'F' for Fahrenheit or 'C' for Celsius.";
//     }

//     if (convertedTemp <= 0) {
//         result += " It's freezing! Wear a heavy coat.";
//     } else if (convertedTemp <= 10) {
//         result += " It's cold. Bring a jacket.";
//     } else if (convertedTemp <= 20) {
//         result += " It's cool. A light sweater should be fine.";
//     } else if (convertedTemp <= 30) {
//         result += " It's warm. T-shirt weather!";
//     } else {
//         result += " It's hot! Stay cool and hydrated.";
//     }

//     return result;
// }

// const result = WeatherConvertor(Temp, unit);

// console.log(result);
// document.write(result);


