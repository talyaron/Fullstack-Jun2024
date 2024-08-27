// ## Exercise 1: Simple Book Collection (Beginner-Friendly)
var books = [
    {
        title: "home",
        author: "anthuan",
        year: 1888
    },
    {
        title: "full",
        author: "tal",
        year: 1999
    },
    {
        title: "stack",
        author: "yaron",
        year: 1997
    },
];
// Add a new book to the collection
books.push({
    title: "class",
    author: "ant",
    year: 2000
});
console.log(books);
// Find a book by its title
var findBook = books.filter(function (books) { return books.title === "stack"; });
console.log(findBook);
// 4. Use an array method to filter books published after a certain year.
var publishedYear = books.filter(function (books) { return books.year > 1997; });
console.log(publishedYear);
// 5. Create a function that returns the newest book in the collection.
var newBook = books.pop();
console.log(newBook);
// 6. Practice using a forEach to display each book's information.
books.forEach(writeBook);
function writeBook(books) { console.log("the book " + books.title + " was written by " + books.author + " in " + books.year); }
