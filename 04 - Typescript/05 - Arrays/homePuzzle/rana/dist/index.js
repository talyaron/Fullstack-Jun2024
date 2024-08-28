// 2. Create an array of `Book` objects to store your book collection-
var bookCollection = [
    {
        title: "Good Omens",
        author: "Neil Gaiman",
        year: 1990
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        year: 1979
    },
    {
        title: "Bossypants",
        author: "Tina Fey",
        year: 2011
    },
];
// 3. Implement the following functions:
// a. Add a new book to the collection-
bookCollection.push({
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006
});
console.log(bookCollection);
// b. Display all books in the collection-
function displayAllBooks() {
    bookCollection.forEach(function (book) { return console.log(book.title + " written by " + book.author + " in(" + book.year + ")"); });
    return bookCollection;
}
displayAllBooks();
// c. Find a book by its title-
function findBookByTitle(title) {
    return bookCollection.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
}
;
var book = findBookByTitle("The Hitchhiker's Guide to the Galaxy");
if (book) {
    console.log("Found book: \"" + book.title + "\" by " + book.author);
}
else {
    console.log("Book not found");
}
// 4. Use an array method to filter books published after a certain year-
function filterBooksByYear(year) {
    return bookCollection.filter(function (book) { return book.year > year; });
}
var booksAfter2000 = filterBooksByYear(2000);
console.log("Books published after 2000:", booksAfter2000);
var booksAfter1990 = filterBooksByYear(1990);
console.log("Books published after 1990:", booksAfter1990);
// 5. Create a function that returns the newest book in the collection-
function getNewestBook(bookCollection) {
    return bookCollection.sort(function (a, b) { return b.year - a.year; })[0];
}
// 6. Practice using a forEach to display each book's information-
bookCollection.forEach(function (book) {
    console.log("The book \"" + book.title + "\" was written by " + book.author + " in " + book.year + ".");
});
