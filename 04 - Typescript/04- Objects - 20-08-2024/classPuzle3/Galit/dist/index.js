// # Book Information Printer:
// Create a Book interface with attributes for title, author, and publication year. 
// Then write a function print_book_info that takes a Book object as an argument and prints
//  its information.
var Book = {
    title: "",
    author: "",
    publicationYear: ""
};
function GetBookInfo() {
    try {
        var title = prompt("enter book tittle");
        var author = prompt("enter author");
        var publicationYear = Number(prompt("enter publication year"));
        var Book_1 = {
            title: title,
            author: author,
            publicationYear: publicationYear
        };
        return (Book_1);
    }
    catch (error) {
        console.error(error);
    }
}
var results = GetBookInfo();
console.log(results);
document.write("the tittle of the book is " + (results === null || results === void 0 ? void 0 : results.title) + ", the author " + (results === null || results === void 0 ? void 0 : results.author) + ", the publication year is " + (results === null || results === void 0 ? void 0 : results.publicationYear));
function getRectangle() {
    try {
        var width = Number(prompt("Enter width"));
        var height = Number(prompt("Enter height"));
        var rectangle_1 = {
            width: width,
            height: height
        };
        console.log(rectangle_1);
        return rectangle_1;
    }
    catch (error) {
        console.error(error);
        return {
            width: 0,
            height: 0
        };
    }
}
function calculateArea(rectangle) {
    try {
        return rectangle.width * rectangle.height;
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
var rectangle = getRectangle();
var result = calculateArea(rectangle);
document.write("the area is " + result);
