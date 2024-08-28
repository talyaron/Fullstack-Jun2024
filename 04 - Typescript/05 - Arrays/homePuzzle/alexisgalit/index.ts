// // ## Exercise 1: Simple Book Collection (Beginner-Friendly)

// // Let's create a basic program to manage a small collection of books. This exercise will introduce you to TypeScript fundamentals, working with arrays, and using simple objects.

// // ### Requirements:

// // 1. Create a `Book` object type with these properties:
// //    - title (string)
// //    - author (string)
// //    - year (number)

// // 2. Create an array of `Book` objects to store your book collection.

// // 3. Implement the following functions:
// //    a. Add a new book to the collection
// //    b. Display all books in the collection
// //    c. Find a book by its title

// // 4. Use an array method to filter books published after a certain year.

// // 5. Create a function that returns the newest book in the collection.

// // 6. Practice using a forEach to display each book's information.

// // This simplified exercise will help beginners get comfortable with:
// // - Defining basic types in TypeScript
// // - Creating and working with arrays
// // - Using simple objects
// // - Implementing basic functions
// // - Using common array methods like push() and find()
// // - Working with loops in TypeScript

// // Good luck with your TypeScript practice!

// interface Book {
//   title: string;
//   author: string;
//   year: number;
// }

// const books: Book[] = [
//   {
//     title: "home",
//     author: "anthuan",
//     year: 1888,
//   },
//   {
//     title: "full",
//     author: "tal",
//     year: 1999,
//   },
//   {
//     title: "stack",
//     author: "yaron",
//     year: 1997,
//   },
// ];
// // Add a new book to the collection

// books.push( {
//     title: "class",
//     author: "ant",
//     year: 2000,
//   })
// console.log(books);

// // Find a book by its title
// const findBook:Book[]=books.filter(books=>books.title==="stack");
// console.log(findBook);

// // 4. Use an array method to filter books published after a certain year.

// const publishedYear:Book[]=books.filter(books=>books.year>1997);
// console.log(publishedYear);
// // 5. Create a function that returns the newest book in the collection.

// const newBook:Book|undefined = books.pop();
// console.log(newBook);

// // 6. Practice using a forEach to display each book's information.

// books.forEach(writeBook)

// function writeBook(books:Book){console.log(`the book ${books.title} was written by ${books.author} in ${books.year}`)}

// // ## Exercise 2: Inventory Management System (Advanced)

// // Create a TypeScript program for a simple inventory management system.
// // This exercise covers arrays, array methods, objects, and more advanced TypeScript concepts.

// // ### Requirements:

// // 1. Define an interface for an `Item` object with properties:
// interface Item {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }
// // 2. Create an array of `Item` objects to represent the inventory.
// const items: Item[] = [
//   {
//     id: 4356789,
//     name: "sebastian",
//     price: 345,
//     quantity: 67,
//   },
//   {
//     id: 435098765436789,
//     name: "catherine",
//     price: 890,
//     quantity: 50,
//   },
//   {
//     id: 102928374,
//     name: "sabrina",
//     price: 768,
//     quantity: 128,
//   },
//   {
//     id: 98765432,
//     name: "steven",
//     price: 9876,
//     quantity: 7,
//   },
//   {
//     id: 34567898,
//     name: "freddie",
//     price: 101092,
//     quantity: 1,
//   },
// ];
// // 3. Implement the following functions using array methods:
// //    a. Add a new item to the inventory

// items.push({
//   id: 8194356789,
//   name: "stormi",
//   price: 1000,
//   quantity: 9,
// });

// console.log(items);
// //    b. Remove an item from the inventory by id
// const newArray = items.filter((items) => items.id != 435098765436789);
// console.log(newArray);
// //    c. Update the quantity of an item by id
// const newQuantityItem = items.find((items) => items.id === 34567898);

// if (newQuantityItem) {
//   newQuantityItem.quantity = 7;
// }
// console.log(items);

// //    d. Find an item by name (case-insensitive)
// const findItem = items.find((items) => items.name === "stormi");
// console.log(findItem);

// //    e. Calculate the total value of the inventory

// function summary(items: Item[]) {
//   const result: number = items.reduce(
//     (acc, items) => acc + items.quantity * items.price,
//     0
//   );

//   console.log(result);
// }
// summary(items);
// //    f. List all items with quantity below a specified threshold
// const itemsUnder10: Item[] = items.filter((items) => items.quantity < 50);
// console.log(itemsUnder10);
// // 4. Use array destructuring to swap the positions of two items in the inventory.
// items[2] = items.splice(0, 0, items[2])[2];
// console.log(items);
// // 5. Implement a function to sort the inventory by price (ascending and descending).

// const sort: Item[] = items.sort((a, b) => a.price - b.price);
// console.log(items);
// // 6. Create a function that returns a summary object containing:
// //    - Total number of items
// function itemNumber(items:Item[]): number {
//   const itemNumber = items.length;

//   console.log(itemNumber);
//   return itemNumber;
// }
// itemNumber(items);


//   //  - Most expensive item
//   //  - Least expensive item

// function mostExpensive(items): Item[] {
//   const expensive: Item = items.sort((a, b) => a.price - b.price);
//   const mostExpensive = items[items.length - 2];
//   console.log(expensive);
//   console.log(mostExpensive);
//   return mostExpensive;
// }

// mostExpensive(items);

// function leastExpensive(items): Item[] {
//   const expensive: Item = items.sort((a, b) => a.price - b.price);
//   const leastExpensive = items[0];
//   console.log(leastExpensive);
//   return leastExpensive;
// }

// leastExpensive(items);
// //    - Average price of items
// function average(items:Item[]) {
//   const total: number = items.reduce((acc, items)=>acc+items.price,0);
//   const average:number = total/items.length;
//   console.log(average);
//   return average;
// }
// average(items);

// // This exercise will help you practice working with TypeScript types, interfaces, arrays, array methods, and objects. It also covers common operations like adding, removing, updating, and searching elements in an array.
