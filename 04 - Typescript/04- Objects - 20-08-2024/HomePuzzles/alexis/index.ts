// // ### 1. Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.

// interface Book{
// title:string;
// author:string;
// publicationYear:number;
// }

// function bookInfo(): Book{
//     try{
//     const title = prompt("enter a book title");
//     const author = prompt("enter the author");
//     const publicationYear: number = Number(prompt("enter a year the book was published"));

//     const book : Book ={
//         title:title,
//         author:author,
//         publicationYear:publicationYear,
//     }

// console.log(book);
// return book;
// }
// catch (error){
// console.error("An error occurred", error);
// return{
//     title:"",
//     author:"",
//     publicationYear:0,
// }
// }
// }

// const book:Book = bookInfo();
// function bookP(book){
//     document.write(`The book ${book.title}, was written by ${book.author} and published in ${book.publicationYear}`);
// }

// // ### 2. Circle Area
// // Define an interface for a Circle with a radius property.
// // Implement a function that calculates and returns the area of the circle based on the given Circle object.

// interface Circle {
//     radius: number;
//     area: number;
//   }

//   function getRadius(): Circle {
//     try {
//       const input = prompt("Enter a radius");
//       const radius: number = Number(input);

//       if (isNaN(radius) || radius < 0) {
//         console.error("Invalid input. Radius must be a non-negative number.");
//         return { radius: 0, area: 0 };
//       }

//       const area: number = radius ** 2 * Math.PI;
//       const circle: Circle = { radius:radius, area:area };

//       console.log(circle);
//       return circle;

//     } catch (error) {
//       console.error("An error occurred:", error);
//       return { radius: 0, area: 0 };
//     }
//   }

//   function displayCircleInfo(circle: Circle) {

//     document.write(`The area of the circle is ${circle.area.toFixed(2)} and the radius is ${circle.radius.toFixed(2)}.`);
// }
// const circle: Circle = getRadius();
// displayCircleInfo(circle);

// // ### 3. Temperature Converter
// // Create an interface for Temperature with properties: value and unit (either 'C' or 'F').
// // Write a function that takes a Temperature object and converts it to the opposite unit, returning a new Temperature object.

// interface Temperature {
//   value: number;
//   unit: string;
// }

// function getValue(): Temperature {
//   try {
//     const value: number = Number(prompt("enter a temperature value"));
//     const unit: string = prompt("enter a temperature value");

//     const temp: Temperature = {
//       value: value,
//       unit: unit,
//     };
//     if (
//       isNaN(value) ||
//       (unit !== "c" && unit !== "C" && unit !== "f" && unit !== "F")
//     ) {
//       throw new Error("Invalid input.");
//     } else console.log(temp);
//     return temp;
//   } catch (error) {
//     console.error(error);
//     return {
//       value: 0,
//       unit: "",
//     };
//   }
// }

// const result: Temperature = getValue();

// function convertTemp(result: Temperature) {
//   try {
//     if (result.unit === "c" || result.unit === "C") {
//       const value =  (result.value * 9) / 5 + 32;
//       const temperature: Temperature = {
//         value: value,
//         unit: "f",
//       };
//       console.log(temperature);
//       return temperature;
//     } else if (result.unit === "f" || result.unit === "F") {
//       const value =((result.value - 32) * 5) / 9;
//       const temperature: Temperature = {
//         value: value,
//         unit: "c",
//       };
//       console.log(temperature);
//       return temperature;
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       value: 0,
//       unit: "",
//     };
//   }
// }
// const final = convertTemp(result);

// function display(final:Temperature){
//     document.write(`The temperature is ${final.value} ${final.unit}`);

//     console.log(`The temperature is ${final.value} ${final.unit}`);}

// display(final);

// // ### 4. Person Age Calculator
// // Define an interface for a Person with name and birthDate properties.
// // Implement a function that takes a Person object and a reference date, then returns the person's age at that reference date.

// interface Person {
//   name: string;
//   birthDate: Date;
// }

// function getData(): Person {
//   try {
//     const name: string | null = prompt("What's your name?");
//     const birthDateInput: string | null = prompt(
//       "When is your birthday? (YYYY-MM-DD)"
//     );

//     if (!name || !birthDateInput) {
//       throw new Error("Name or birthdate is missing.");
//     }
//     const birthDate: Date = new Date(birthDateInput);
//     const person: Person = {
//       name: name,
//       birthDate: birthDate,
//     };

//     console.log(person);
//     return person;
//   } catch (error) {
//     console.error("An error has occurred:", error.message);
//     return {
//       name: "",
//       birthDate: new Date(0),
//     };
//   }
// }

// const person = getData();
// function calculateAge(person: Person): number {
//   try {
//     const dateInput: string | null = prompt("Enter a date (YYYY-MM-DD)");
//     if (!dateInput) {
//         throw new Error("Date is missing.");
//       }
//     const date: Date = new Date(dateInput);
//     const birthDate: Date = person.birthDate;

//     let age: number = date.getFullYear() - birthDate.getFullYear();
//     const monthDifference: number = date.getMonth() - birthDate.getMonth();

//     if (
//       monthDifference < 0 ||
//       (monthDifference === 0 && date.getDate() < birthDate.getDate())
//     ) {
//       age--;
//     }

//     console.log(`Hi, ${person.name}. Your age today is ${age}`);
//     document.write(`Hi, ${person.name}, your age today is ${age}`);
//     return age;
//   } catch (error) {
//     console.error(
//       "An error has occurred during age calculation:",
//       error.message
//     );
//     return 0;
//   }
// }

// calculateAge(person);

// // ### 5. Car Fuel Efficiency
// // Create interfaces for Car (with make, model, and fuelEfficiency properties)
// // and Trip (with distance and fuelPrice properties).
// // Write a function that calculates the fuel cost for a given Car and Trip.
// interface Car {
//   make: string;
//   model: string;
//   fuelEfficiency: number;
// }

// interface Trip {
//   distance: number;
//   fuelPrice: number;
// }

// function getDataCar(): Car {
//   try {
//     const make: string = prompt("enter a car make");
//     const model: string = prompt("enter a car model");
//     const fuelEfficiency: number = Number(prompt("enter a fuel efficiency"));
// if (!make&&!model&&isNaN(fuelEfficiency)){
//   throw new Error("enter data");

// }

//     const car: Car = {
//       make: make,
//       model: model,
//       fuelEfficiency: fuelEfficiency,
//     };
//     console.log(car);
//     return car;
//   } catch (error) {
//     console.error(error);
//     return {
//       make: "",
//       model: "",
//       fuelEfficiency: 0,
//     };
//   }
// }

// function getDataTrip(): Trip {
//   try {
//     const distance: number = Number(prompt("enter a trip distance"));
//     const fuelPrice: number = Number(prompt("enter a fuel price"));
//     if (isNaN(distance)&&isNaN(fuelPrice)){
//       throw new Error("enter data");

//     }
//     const trip: Trip = {
//       distance: distance,
//       fuelPrice: fuelPrice,
//     };
//     console.log(trip);
//     return trip;
//   } catch (error) {
//     console.error(error);
//     return {
//       distance: 0,
//       fuelPrice: 0,
//     };
//   }
// }

// const car = getDataCar();
// const trip = getDataTrip();

// function calculateRoad(car:Car, trip:Trip) {
//   const result:number;
//   result = ((trip.distance * car.fuelEfficiency) / 100) * trip.fuelPrice;
//   console.log(result);
// }
// calculateRoad(car,trip);

// // ### 6. Product Discount
// // Define interfaces for Product (with name, price, and category) and Discount (with category and percentage).
// // Implement a function that applies the discount to the product if the categories match, returning a new Product object.

// interface Product {
//   name: string;
//   price: number;
//   category: string;
// }

// interface Discount {
//   category: string;
//   percentage: number;
// }

// function getData(): Product {
//   try {
//     const name: string = prompt("enter a name");
//     const price: number = Number(prompt("enter a price"));
//     const category: string = prompt("enter a category");

//     const product: Product = {
//       name: name,
//       price: price,
//       category: category,
//     };

//     console.log(product);
//     return product;
//   } catch (error) {
//     console.error(error);
//     return {
//       name: "",
//       price: 0,
//       category: "",
//     };
//   }
// }

// function getDataDiscount(): Discount {
//   try {
//     const percentage: number = Number(prompt("enter a discount"));
//     const category: string = prompt("enter a category");

//     const discount: Discount = {
//       category: category,
//       percentage: percentage,
//     };

//     console.log(discount);
//     return discount;
//   } catch (error) {
//     console.error(error);
//     return {
//       category: "",
//       percentage: 0,
//     };
//   }
// }

// const product = getData();
// const discount = getDataDiscount();

// function discountCalculation(product, discount) {
//   const newPrice: number;
//   if (product.category === discount.category) {
//     newPrice = (product.price * (100 - discount.percentage)) / 100;
//     console.log(newPrice);
//   } else {
//     console.log("there is now discount");
//   }
//   return newPrice;
// }

// discountCalculation(product, discount);
