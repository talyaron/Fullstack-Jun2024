# TypeScript Object Functions Exercises

## Easy Exercises

### 1. Book Information
Create an interface for a Book with properties: title, author, and publicationYear. Write a function that takes a Book object and returns a formatted string with the book's information.

### 2. Circle Area
Define an interface for a Circle with a radius property. Implement a function that calculates and returns the area of the circle based on the given Circle object.

### 3. Temperature Converter
Create an interface for Temperature with properties: value and unit (either 'C' or 'F'). Write a function that takes a Temperature object and converts it to the opposite unit, returning a new Temperature object.

## Intermediate Exercises

### 4. Person Age Calculator
Define an interface for a Person with name and birthDate properties. Implement a function that takes a Person object and a reference date, then returns the person's age at that reference date.

### 5. Car Fuel Efficiency
Create interfaces for Car (with make, model, and fuelEfficiency properties) and Trip (with distance and fuelPrice properties). Write a function that calculates the fuel cost for a given Car and Trip.

### 6. Product Discount
Define interfaces for Product (with name, price, and category) and Discount (with category and percentage). Implement a function that applies the discount to the product if the categories match, returning a new Product object.

## Challenging Exercises

### 7. Bank Account Operations
Create an interface for BankAccount with accountNumber and balance properties. Implement three functions:
- deposit: Takes a BankAccount and an amount, returns an updated BankAccount.
- withdraw: Takes a BankAccount and an amount, returns an updated BankAccount or an error if insufficient funds.
- transfer: Takes two BankAccounts and an amount, performs the transfer, and returns both updated accounts.

### 8. Employee Salary Calculator
Define interfaces for Employee (with name, baseSalary, and department properties) and Department (with name and salaryMultiplier properties). Write a function that calculates an employee's final salary based on their base salary and their department's multiplier.

### 9. Shape Volume Calculator
Create interfaces for Cube, Sphere, and Cylinder, each with appropriate properties. Implement a single function that can calculate the volume of any of these shapes, using a union type for the parameter.

### 10. Online Order System
Define interfaces for Product (with id, name, and price), Customer (with name and address), and Order (with customer, product, and quantity). Implement functions to:
- createOrder: Takes a Customer, Product, and quantity, returns an Order.
- calculateTotal: Takes an Order and returns the total price.
- generateInvoice: Takes an Order and returns a formatted invoice string.

These exercises focus on working with object-oriented concepts in TypeScript, using interfaces and functions that manipulate single objects rather than arrays. They range from simple property access and calculations to more complex business logic and multi-object interactions.