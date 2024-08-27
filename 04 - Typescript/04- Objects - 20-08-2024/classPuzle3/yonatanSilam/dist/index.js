function getBookInfo() {
    var title = prompt("pls enter the title");
    var author = prompt("pls enter the name of author");
    var publicationYear = Number(prompt("pls enter the publication year"));
    try {
        if (title == "" || title == null || author == "" || author == null || publicationYear == null) {
            throw new Error("Invalid input");
        }
        else {
            var book = {
                title: title,
                author: author,
                publicationYear: publicationYear
            };
            return book;
        }
    }
    catch (x) {
        console.error(x);
        var book = {
            title: "",
            author: "",
            publicationYear: 0
        };
        return book;
    }
}
function renderBook(book) {
    document.write("the book name is " + book.title + " by " + book.author + " that publish in " + book.publicationYear);
}
renderBook(getBookInfo());
