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
