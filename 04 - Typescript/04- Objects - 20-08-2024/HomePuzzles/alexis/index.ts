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


// ### 4. Person Age Calculator
// Define an interface for a Person with name and birthDate properties. 
// Implement a function that takes a Person object and a reference date, then returns the person's age at that reference date.


interface Person{
    name:string;
    birthDate:number;
}

function getData(){
    const name:string = prompt("What's your name?");
    const birthDate:number = Number(prompt("When is your birthday?"));
    const referenceDate:number = Number(prompt("What day is it today?"));
    
}







