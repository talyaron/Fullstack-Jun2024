// # Rectangle Area Calculator:
// Define a Rectangle interface with width and height attributes. Write a function calculate_area that takes a Rectangle object and returns its area.
// function renderToScreen(book:Book){
// }
function getDetails() {
    try {
        var title = prompt("write the title of the book:");
        var author = prompt("who is the author of the book?:");
        var publication_year = Number(prompt("what is the publiction year?:"));
        if (title === null || author === null || publication_year === null)
            throw new Error("Invalid input");
        var book_1 = {
            title: title,
            author: author,
            publication_year: publication_year
        };
        return book_1;
    }
    catch (e) {
        console.error(e);
        return undefined;
    }
}
var book = getDetails();
document.write("the title of the book is: " + book.title + ", the author of the book is: " + book.author + ", the publication year of the book is: " + book.publication_year);
