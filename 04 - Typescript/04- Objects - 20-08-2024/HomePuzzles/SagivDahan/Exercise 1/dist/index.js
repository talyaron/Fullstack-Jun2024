// ### 1. Book Information
// Create an interface for a Book with properties: title, author, and publicationYear.
//  Write a function that takes a Book object and returns a formatted string with the book's information.
function getBookInformation() {
    var title = prompt("What is the book title?");
    var author = prompt("Who is the book author?");
    var publicationYearString = prompt("When was the book published?");
    if (title === null) {
        console.error("you didnt wrote the book title.");
    }
    if (author === null) {
        console.error("you didnt wrote who is the book author");
    }
    if (publicationYearString === null) {
        console.error("you didnt wrote the publication year of the book.");
    }
    var publicationYear = parseInt(publicationYearString, 10);
    return { title: title, author: author, publicationYear: publicationYear };
}
function formatBookInfo(book) {
    return "The title of the book is: " + book.title + ", The author of the book is: " + book.author + ", The publication year of the book is: " + book.publicationYear;
}
var myBook = getBookInformation();
console.log(formatBookInfo(myBook));
