//// 1. Book Information ////
function getPersonInfo() {
    try {
        var name = prompt("Enter your name");
        if (!name) {
            throw new Error("Invalid input: name cannot be null.");
        }
        var birthDateInput = prompt("Enter your birth year (YYYY-MM-DD format)");
        if (!birthDateInput) {
            throw new Error("Invalid input: birth date cannot be null.");
        }
        var birthDate = new Date(birthDateInput);
        if (isNaN(birthDate.getTime())) {
            throw new Error("Invalid input: not a valid date.");
        }
        var person_1 = {
            name: name,
            BirthDate: birthDate
        };
        console.log(person_1);
        return person_1;
    }
    catch (error) {
        console.error(error);
        return {
            name: "Unknown",
            BirthDate: new Date(0)
        };
    }
}
function ageCalculator(person, referenceDate) {
    try {
        var birthDate = person.BirthDate;
        var age_1 = referenceDate.getFullYear() - birthDate.getFullYear();
        var m = referenceDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && referenceDate.getDate() < birthDate.getDate())) {
            age_1--;
        }
        return age_1;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
var person = getPersonInfo();
var referenceDate = new Date();
var age = ageCalculator(person, referenceDate);
document.write("Your age is " + age);
console.log("Your age is " + age);
//// 5. Car Fuel Efficiency ////
// Create interfaces for Car (with make, model, and fuelEfficiency properties) and Trip
//  (with distance and fuelPrice properties). 
//  Write a function that calculates the fuel cost for a given Car and Trip.
//// 6. Product Discount ////
// Define interfaces for Product (with name, price, and category) and Discount
//  (with category and percentage).  Implement a function that applies the discount to the product 
//  if the categories match, returning a new Product object.
////  7. Bank Account Operations ////
// Create an interface for BankAccount with accountNumber and balance properties. Implement three functions:
// - deposit: Takes a BankAccount and an amount, returns an updated BankAccount.
// - withdraw: Takes a BankAccount and an amount, returns an updated BankAccount or an error if insufficient funds.
// - transfer: Takes two BankAccounts and an amount, performs the transfer, and returns both updated accounts.
////  8. Employee Salary Calculator ////
// Define interfaces for Employee (with name, baseSalary, and department properties) and Department 
// (with name and salaryMultiplier properties). Write a function that calculates an employee's final salary
//  based on their base salary and their department's multiplier.
//// 9. Shape Volume Calculator ////
// Create interfaces for Cube, Sphere, and Cylinder, each with appropriate properties. 
// Implement a single function that can calculate the volume of any of these shapes, 
// using a union type for the parameter.
// //// 10. Online Order System ////
// Define interfaces for Product (with id, name, and price), Customer 
// (with name and address), and Order (with customer, product, and quantity). Implement functions to:
// - createOrder: Takes a Customer, Product, and quantity, returns an Order.
// - calculateTotal: Takes an Order and returns the total price.
// - generateInvoice: Takes an Order and returns a formatted invoice string.
