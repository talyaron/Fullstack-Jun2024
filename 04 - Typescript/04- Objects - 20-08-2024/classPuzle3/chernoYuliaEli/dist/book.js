function bookHandler() {
    var title = prompt("enter book title");
    var author = prompt("enter book author");
    var publicationYear = Number(prompt("enter book publication year"));
    try {
        if (!title || !author || !publicationYear) {
            throw new Error("invalid book");
        }
        return { title: title, author: author, publicationYear: publicationYear };
    }
    catch (e) {
        console.error(e);
        return { title: String(title), author: String(author), publicationYear: publicationYear };
    }
}
function print_book_info() {
    var book = bookHandler();
    document.write("the book " + book.title + " by " + book.author + " was written in " + book.publicationYear);
}
print_book_info();
