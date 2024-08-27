// ## Exercise 1: Simple Book Collection (Beginner-Friendly)

// Let's create a basic program to manage a small collection of books. This exercise will introduce you to TypeScript fundamentals, working with arrays, and using simple objects.

// ### Requirements:

// 1. Create a `Book` object type with these properties:
//    - title (string)
//    - author (string)
//    - year (number)

// 2. Create an array of `Book` objects to store your book collection.

// 3. Implement the following functions:
//    a. Add a new book to the collection
//    b. Display all books in the collection
//    c. Find a book by its title

// 4. Use an array method to filter books published after a certain year.

// 5. Create a function that returns the newest book in the collection.

// 6. Practice using a forEach to display each book's information.

// This simplified exercise will help beginners get comfortable with:
// - Defining basic types in TypeScript
// - Creating and working with arrays
// - Using simple objects
// - Implementing basic functions
// - Using common array methods like push() and find()
// - Working with loops in TypeScript

// Good luck with your TypeScript practice!

interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  {
    title: "home",
    author: "anthuan",
    year: 1888,
  },
  {
    title: "full",
    author: "tal",
    year: 1999,
  },
  {
    title: "stack",
    author: "yaron",
    year: 1997,
  },
];
// Add a new book to the collection

books.push( {
    title: "class",
    author: "ant",
    year: 2000,
  })
console.log(books);

// Find a book by its title
const findBook:Book[]=books.filter(books=>books.title==="stack");
console.log(findBook);

// 4. Use an array method to filter books published after a certain year.

const publishedYear:Book[]=books.filter(books=>books.year>1997);
console.log(publishedYear);
// 5. Create a function that returns the newest book in the collection.

const newBook:Book|undefined = books.pop();
console.log(newBook);

// 6. Practice using a forEach to display each book's information.

books.forEach(writeBook)

function writeBook(books:Book){console.log(`the book ${books.title} was written by ${books.author} in ${books.year}`)}



