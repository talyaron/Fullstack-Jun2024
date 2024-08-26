//// 1. Book Information ////
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getProductInfo() {
    try {
        var name = prompt("Enter product name");
        if (!name) {
            throw new Error("Invalid input: name is null.");
        }
        var price = Number(prompt("Enter product price"));
        if (isNaN(price) || price <= 0) {
            throw new Error("Invalid input: product price cant be null.");
        }
        var category = prompt("Enter product category");
        if (!category) {
            throw new Error("Invalid input: category is null.");
        }
        var Product = {
            name: name,
            price: price,
            category: category
        };
        console.log(Product);
        return Product;
    }
    catch (error) {
        console.error(error);
        return {
            name: "unknown",
            price: 0,
            category: "unknown"
        };
    }
}
function getDiscountInfo() {
    try {
        var category = prompt("Enter product category");
        if (!category) {
            throw new Error("Invalid input: category is null.");
        }
        var percentage = Number(prompt("Enter percentage in %"));
        if (isNaN(percentage) || percentage <= 0) {
            throw new Error("Invalid input: percentage cant be null.");
        }
        var Discount = {
            category: category,
            percentage: percentage
        };
        console.log(Discount);
        return Discount;
    }
    catch (error) {
        console.error(error);
        return {
            category: "unknown",
            percentage: 0
        };
    }
}
function applyDiscount(product, discount) {
    try {
        if (product.category === discount.category) {
            var discountedPrice = product.price - (product.price * (discount.percentage / 100));
            return __assign(__assign({}, product), { price: discountedPrice });
        }
        else {
            console.log("No discount applied. Categories do not match.");
            return product;
        }
    }
    catch (error) {
        console.error(error);
        return product;
    }
}
var product = getProductInfo();
var discount = getDiscountInfo();
var discountedProduct = applyDiscount(product, discount);
document.write("The cost of " + discountedProduct.name + " after the discount is: $" + discountedProduct.price.toFixed(2));
console.log("The cost of " + discountedProduct.name + " after the discount is: $" + discountedProduct.price.toFixed(2));
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
