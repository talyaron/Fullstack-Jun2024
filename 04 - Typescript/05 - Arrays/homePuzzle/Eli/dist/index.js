var bookCollections = [
    { title: "Dune", author: "George Orwell", year: 1984 },
    {
        title: "Pinocchio",
        author: "Carlo Collodi",
        year: 1883
    },
    { title: "1984", author: "George Orwell", year: 1949 },
];
function inputBook() {
    var title = String(prompt("Give the book title"));
    var author = String(prompt("Give the book author"));
    var year = Number(prompt("Give the book publishing year"));
    return { title: title, author: author, year: year };
}
function printToUser(userBook, exsistinsystem, collectionBook) {
    if (!exsistinsystem || exsistinsystem.title == "null") {
        collectionBook.push(userBook);
        console.log(collectionBook);
    }
    else {
        console.log("your book is : " + exsistinsystem.title + " by " + exsistinsystem.author + " written in " + exsistinsystem.year);
        console.log(collectionBook);
    }
}
var userBook = inputBook();
var foundBook = bookCollections.find(function (Book) { return Book.title == userBook.title; });
var addOrShowUser = printToUser(userBook, foundBook, bookCollections);
