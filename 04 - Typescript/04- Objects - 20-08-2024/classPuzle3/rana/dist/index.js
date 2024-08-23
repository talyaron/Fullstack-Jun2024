function PrintBookInfo() {
    try {
        var title = prompt("pls enter the book title");
        var author = prompt("pls enter the book author ");
        var publicationYear = Number(prompt("pls enter the book publication year"));
        var user_1 = {
            title: title,
            author: author,
            publicationYear: publicationYear
        };
        return user_1;
    }
    catch (error) {
        console.error(error);
        return {
            title: "",
            author: "",
            publicationYear: Number
        };
    }
}
var user = PrintBookInfo();
function bookDetails(user) {
    document.write("The book title " + user.title + ", the book author " + user.author + " ,the book publication year  " + user.publicationYear);
}
bookDetails(user);
