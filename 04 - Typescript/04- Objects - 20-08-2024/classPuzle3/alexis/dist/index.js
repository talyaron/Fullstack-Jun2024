// // # Book Information Printer:
// // Create a Book interface with attributes for title, author, and publication year. Then write a function print_book_info that takes a Book object as an argument and prints its information.
function printBookInfo() {
    try {
        var title = prompt("Book Title");
        var author = prompt("Book Author");
        var publicationYear = Number(prompt("Publication Year"));
        var book_1 = {
            title: title,
            author: author,
            publicationYear: publicationYear
        };
        return book_1;
    }
    catch (error) {
        console.error(error);
        return {
            title: "",
            author: "",
            publicationYear: ""
        };
    }
}
var book = printBookInfo();
function renderDetails(book) {
    document.write("The book " + book.title + ", was written by " + book.author + " and published in " + book.publicationYear);
}
renderDetails(book);
// // # Rectangle Area Calculator:
// // Define a Rectangle interface with width and height attributes.
// // Write a function calculate_area that takes a Rectangle object and returns its area.
// interface Rectangle {
//   width: number;
//   height: number;
// }
// function getRectangle(): Rectangle {
//   try {
//     const width = Number(prompt("Enter width"));
//     const height = Number(prompt("Enter height"));
//     const rectangle: Rectangle = {
//       width: width,
//       height: height,
//     };
//     console.log(rectangle);
//     return rectangle;
//   } catch (error) {
//     console.error(error);
//     return {
//         width: 0,
//         height: 0,
//     };
//   }
// }
// function calculateArea(rectangle: Rectangle): number {
//   try {
//     return rectangle.width * rectangle.height;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }
// const rectangle = getRectangle();
// const result = calculateArea(rectangle);
// document.write(`the area is ${result}`);
