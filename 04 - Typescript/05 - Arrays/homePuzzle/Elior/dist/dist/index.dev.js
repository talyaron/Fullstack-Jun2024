"use strict";

//create object with: title, author, year
// create arry of 'Book' to store your collection. 
// create a funcation to add a new book to the collection
// display all books in the collection
// find a book by its title
// use an array method to filter books publised after a cretain year
// Create a function that returns the newest book in the collection.
// practice using ForEach to display each book's information
var books = [{
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
}, {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960
}, {
  title: "1984",
  author: "George Orwell",
  year: 1949
}, {
  title: "Moby Dick",
  author: "Herman Melville",
  year: 1851
}, {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813
}, {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  year: 1951
}, {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  year: 1937
}];

function addBook(newBook) {
  books.push(newBook);
}

function displayBooks() {
  books.forEach(function (book) {
    "Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year;
    document.write("Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year + "<br>");
  });
}

displayBooks();

function findBookByTitle(title) {
  return books.find(function (book) {
    return book.title === title;
  });
}

var booksAfter1950 = books.filter(function (book) {
  return book.year > 1950;
});
console.log(booksAfter1950);