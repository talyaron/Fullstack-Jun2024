// exercise 1- Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
function bookInformation1() {
    try {
        var books1 = {
            title: "rana",
            author: "saly",
            publicationYear: 2018
        };
        console.log(books1);
        return books1;
    }
    catch (error) {
        console.log("hi thir is an error", error);
        return {
            title: "",
            author: "",
            publicationYear: 0
        };
    }
}
document.write("אנא מלא את כל השדות.<br>");
bookInformation1();
