//2. Create an array of `Book` objects to store your book collection-
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
//3. Implement the following functions:
//a. Add a new book to the collection-
function addBook(newBook) {
    bookCollection.push(newBook);
    console.log("Added: " + newBook.title + " by " + newBook.author + " (" + newBook.year + ")");
    return bookCollection;
}
var newBook = {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006
};
var updatedCollection = addBook(newBook);
console.log(updatedCollection);
//b. Display all books in the collection-
