// ## Tax Calculator
// Write a program that asks the user to enter a salary and  Implement a function named calculateTax that takes an income amount and returns the tax amount based on the following brackets:

// Up to 10000: 0%
// 10001 to 50000: 10%
// 50001 to 100000: 20%
// Above 100000: 30%

// ask the user to enter a salary
const salary = Number(prompt("Enter your salary: "));

// write a function that takes the salary and returns the tax amount
function calculateTax(salary: number): number {
  if (salary <= 10000) {
    return 0;
  } else if (salary <= 50000) {
    return salary * 0.1;
  } else if (salary <= 100000) {
    return salary * 0.2;
  } else {
    return salary * 0.3;
  }
}

// get the tax amount
const tax = calculateTax(salary);

// print the tax amount to the screen
document.write(`The tax amount is: ${tax}`);
