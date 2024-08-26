
//// 1. Book Information ////


// const Book = {
//     title:"",
//     author:"",
//     publicationYear:"",
// }

// function GetBookInfo (){
//     try {
// const title = prompt("enter book tittle");
// const author = prompt("enter author");
// const publicationYear = Number (prompt("enter publication year"));

// const Book = {
//     title:title,
//     author: author,
//     publicationYear:publicationYear,
// }
// return (Book);

//     } catch (error)
// { console.error (error);
// }

// }

// const results = GetBookInfo();
// console.log (results)
// document.write (`the tittle of the book is ${results?.title}, the author ${results?.author}, the publication year is ${results?.publicationYear}`)


//// 2. Circle Area ////
// Define an interface for a Circle with a radius property. 
// Implement a function that calculates and returns the area of the circle based on the given Circle object.

// interface Circle {
//     radius: number;
// }


// function getRadius(): Circle {
//     try {
//         const radiusInput = Number(prompt("Enter radius"));
        
//         if (isNaN(radiusInput)) {
//             throw new Error("Invalid input: not a number.");
//         }

//         const circle: Circle = {
//             radius: radiusInput,
//         };

//         console.log(circle);

//         return circle;

//     } catch (error) {
//         console.error(error);

//         return {
//             radius: 0,
//         };
//     }
// }


// function calculateArea(circle: Circle): number {
//     try {
//         const area = Math.PI * Math.pow(circle.radius, 2);
//         return area;
//     } catch (error) {
//         console.error(error);
//         return 0; 
//     }
// }


// const circle = getRadius();
// const result: number = calculateArea(circle);
// document.write(`The area is ${result}`);



//// 3. Temperature Converter ////
// Create an interface for Temperature with properties: value and unit (either 'C' or 'F').
//  Write a function that takes a Temperature object and converts it to the opposite unit,
//   returning a new Temperature object. 

// interface Temperature {
//     value: number;
//     unit: string;
// }

// function getTemperature(): Temperature {
//     try {
//         const value = Number(prompt("Enter temperature"));
//         let unit: string | null = prompt("Enter unit (C or F)");

//         if (unit) {
//             unit = unit.toUpperCase();
//         } else {
//             throw new Error("Invalid input: unit cannot be null.");
//         }

//         if (isNaN(value)) {
//             throw new Error("Invalid input: not a number.");
//         }

//         const temperature: Temperature = {
//             value: value,
//             unit: unit,
//         };

//         console.log(temperature);

//         return temperature;

//     } catch (error) {
//         console.error(error);

//         return {
//             value: 0,
//             unit: 'C', 
//         };
//     }
// }


// function convertTemperature(temperature: Temperature): Temperature {
//     try {
//         let convertedValue: number;
//         let convertedUnit: string;

//         if (temperature.unit === 'C') {
//             convertedValue = (temperature.value * 9) / 5 + 32;
//             convertedUnit = 'F';
//         } else if (temperature.unit === 'F') {
//             convertedValue = (temperature.value - 32) * 5 / 9;
//             convertedUnit = 'C';
//         } else {
//             throw new Error("Invalid unit: must be 'C' or 'F'.");
//         }

//         return {
//             value: convertedValue,
//             unit: convertedUnit,
//         };
//     } catch (error) {
//         console.error(error);

//         return {
//             value: 0,
//             unit: temperature.unit, 
//         };
//     }
// }

// const temperature = getTemperature();

// const convertedTemperature: Temperature = convertTemperature(temperature);

// document.write(`The temperature in ${convertedTemperature.unit} is ${convertedTemperature.value.toFixed(2)}`);

//// 4. Person Age Calculator ////
// Define an interface for a Person with name and birthDate properties. 
// Implement a function that takes a Person object and a reference date,
//  then returns the person's age at that reference date.


// interface Person {
//     name: string;
//     BirthDate: Date;
// }

// function getPersonInfo(): Person {
//     try {
//         const name: string | null = prompt("Enter your name");

//         if (!name) {
//             throw new Error("Invalid input: name cannot be null.");
//         }

//         const birthDateInput = prompt("Enter your birth year (YYYY-MM-DD format)");
//         if (!birthDateInput) {
//             throw new Error("Invalid input: birth date cannot be null.");
//         }

//         const birthDate = new Date(birthDateInput);
//         if (isNaN(birthDate.getTime())) {
//             throw new Error("Invalid input: not a valid date.");
//         }

//         const person: Person = {
//             name: name,
//             BirthDate: birthDate,
//         };

//         console.log(person);

//         return person;

//     } catch (error) {
//         console.error(error);
        
//         return {
//             name: "Unknown",
//             BirthDate: new Date(0), 
//         };
//     }
// }

// function ageCalculator(person: Person, referenceDate: Date): number {
//     try {
//         const birthDate = person.BirthDate;
//         let age = referenceDate.getFullYear() - birthDate.getFullYear();
//         const m = referenceDate.getMonth() - birthDate.getMonth();

//         if (m < 0 || (m === 0 && referenceDate.getDate() < birthDate.getDate())) {
//             age--;
//         }

//         return age;
//     } catch (error) {
//         console.error(error);
//         return 0; 
//     }
// }

// const person = getPersonInfo();

// const referenceDate = new Date(); 

// const age = ageCalculator(person, referenceDate);

// document.write(`Your age is ${age}`);
// console.log(`Your age is ${age}`);


//// 5. Car Fuel Efficiency ////
// Create interfaces for Car (with make, model, and fuelEfficiency properties) and Trip
//  (with distance and fuelPrice properties). 
//  Write a function that calculates the fuel cost for a given Car and Trip.


// interface car {
//     make: string;
//     model: string;
//     fuelEfficiency: number;
// }

// interface trip {
//     distance: number;
//     fuelPrice: number;
// }

// function getCarInfo(): car {
//     try {
//         const make: string | null = prompt("Enter your make");

//         if (!make) {
//             throw new Error("Invalid input: make be null.");
//         }
//         const model: string | null = prompt("Enter car model");

//         if (!model) {
//             throw new Error("Invalid input: car model cant be null.");
//         }

//         const fuelEfficiency = Number(prompt("Enter fuel efficiency (km per liter)"));
//         if (isNaN(fuelEfficiency) || fuelEfficiency <= 0) {
//             throw new Error("Invalid input: fuel efficiency must be a positive number.");
//         }


//         const car: car = {
//             make: make,
//             model: model,
//             fuelEfficiency: fuelEfficiency,
//         };

//         console.log(car);

//         return car;

//     } catch (error) {
//         console.error(error);
        
//         return {
//             make: "unknown",
//             model: "unknown",
//             fuelEfficiency: 0,
//         };
//     }
// }

// function getTripInfo(): trip {
//     try {
//         const distance = Number(prompt("Enter distance in kilometers"));
//         if (isNaN(distance) || distance <= 0) {
//             throw new Error("Invalid input: distance must be a positive number.");
//         }

//         const fuelPrice = Number(prompt("Enter fuel price per liter"));
//         if (isNaN(fuelPrice) || fuelPrice <= 0) {
//             throw new Error("Invalid input: fuel price must be a positive number.");
//         }

//         const trip: trip = {
//             distance: distance,
//             fuelPrice: fuelPrice,
//         };

//         console.log(trip);

//         return trip;

//     } catch (error) {
//         console.error(error);
//         return {
//             distance: 0,
//             fuelPrice: 0,
//         };
//     }
// }

// //  Write a function that calculates the fuel cost for a given Car and Trip.

// function fuelCost (car: car, trip: trip): number {
//     try {
//         if (car.fuelEfficiency === 0) {
//             throw new Error("Fuel efficiency cannot be zero.");
//         }
//         const cost = (trip.distance / car.fuelEfficiency) * trip.fuelPrice;

//         return cost;
//     } catch (error) {
//         console.error(error);
//         return 0; 
//     }
// }


// const car = getCarInfo();
// const trip = getTripInfo();
// const cost = fuelCost(car, trip);

// document.write(`The cost of your trip is: $${cost.toFixed(2)}`);
// console.log(`The cost of your trip is: $${cost.toFixed(2)}`);



//// 6. Product Discount ////
// Define interfaces for Product (with name, price, and category) and Discount
//  (with category and percentage).  Implement a function that applies the discount to the product 
//  if the categories match, returning a new Product object.


interface Product {
    name: string;
    price: number;
    category: string;
}

interface Discount {
    category:  string;
    percentage: number;
}

function getProductInfo(): Product {
    try {
        const name: string | null = prompt("Enter product name");

        if (!name) {
            throw new Error("Invalid input: name is null.");
        }
        const price: number = Number(prompt("Enter product price"));

        if (isNaN(price) || price <= 0)  {
            throw new Error("Invalid input: product price cant be null.");
        }
        const category: string | null = prompt("Enter product category");

        if (!category) {
            throw new Error("Invalid input: category is null.");
        }


        const Product: Product = {
    name: name,
    price: price,
    category: category,
        };

        console.log(Product);

        return Product;

    } catch (error) {
        console.error(error);
        
        return {
            name: "unknown",
            price: 0,
            category:"unknown",
        };
    }
}

function getDiscountInfo(): Discount {
    try {
        const category: string | null = prompt("Enter product category");

        if (!category) {
            throw new Error("Invalid input: category is null.");
        }
        const percentage: number = Number(prompt("Enter percentage in %"));

        if (isNaN(percentage) || percentage <= 0)  {
            throw new Error("Invalid input: percentage cant be null.");
        }

        const Discount: Discount = {
            category:  category,
            percentage: percentage,
        };

        console.log(Discount);

        return Discount;

    } catch (error) {
        console.error(error);
        
        return {
            category:  "unknown",
            percentage: 0
        };
    }
}

function applyDiscount(product: Product, discount: Discount): Product {
    try {
        if (product.category === discount.category) {
            const discountedPrice = product.price - (product.price * (discount.percentage / 100));
            return {
                ...product,
                price: discountedPrice
            };
        } else {
            console.log("No discount applied. Categories do not match.");
            return product;
        }
    } catch (error) {
        console.error(error);
        return product;
    }
}

const product = getProductInfo();
const discount = getDiscountInfo();
const discountedProduct = applyDiscount(product, discount);

document.write(`The cost of ${discountedProduct.name} after the discount is: $${discountedProduct.price.toFixed(2)}`);
console.log(`The cost of ${discountedProduct.name} after the discount is: $${discountedProduct.price.toFixed(2)}`);



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

