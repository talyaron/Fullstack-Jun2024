function getBookDetails() {
    try {
        //get the title of the book
        var title = prompt("What is the title of the book?");
        //get the author of the book
        var author = prompt("who is the author of the book?");
        var publicationYear = prompt("what is the publication year of the book?");
        if (!title || !author || !publicationYear)
            throw new Error("Invalid input");
        //return the book object 
        var Book_1 = {
            title: title,
            author: author,
            publicationYear: publicationYear
        };
        return Book_1;
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
var Book = getBookDetails();
function renderDetails(Book) {
    document.write("The Book title is " + Book.title + ", and the author of the Book is " + Book.author + ", and the publicaiton year of the book is " + Book.publicationYear);
}
renderDetails(Book);
