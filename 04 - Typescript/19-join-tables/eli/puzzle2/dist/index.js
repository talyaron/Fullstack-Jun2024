var books = [
    { id: 1, title: "1984", publishYear: 1949 },
    { id: 2, title: "To Kill a Mockingbird", publishYear: 1960 },
    { id: 3, title: "The Great Gatsby", publishYear: 1925 },
];
var authors = [
    { id: 1, name: "George Orwell", birthYear: 1903 },
    { id: 2, name: "Harper Lee", birthYear: 1926 },
    { id: 3, name: "F. Scott Fitzgerald", birthYear: 1896 },
];
var bookAuthors = [
    { bookId: 1, authorId: 1 },
    { bookId: 2, authorId: 2 },
    { bookId: 3, authorId: 3 },
];
var selectedAuth = getBooksOfAuthor(3, books, bookAuthors);
renderToScreen(selectedAuth);
function renderToScreen(selectedAuth) {
    var containerElement = document.getElementById("container");
    var divElement = document.createElement("div");
    containerElement.appendChild(divElement);
    if (selectedAuth.length != 0) {
        containerElement.innerHTML = "here is your book : " + selectedAuth.map(function (b) { return b.title; }) + "\n\n    <br>by the author :" + selectedAuth.map(function (b) { var _a; return (_a = authors.find(function (author) {
            return author.id === bookAuthors.find(function (ba) { return ba.bookId === b.id; }).authorId;
        })) === null || _a === void 0 ? void 0 : _a.name; });
    }
    else {
        containerElement.innerHTML = "no book found";
    }
}
function getBooksOfAuthor(authorId, books, bookAuthors) {
    var auth = bookAuthors.filter(function (ba) { return ba.authorId === authorId; });
    return books.filter(function (book) { return auth.some(function (au) { return au.bookId === book.id; }); });
}
// TODO: Implement a function getBooksOfAuthor that returns all books written by a specific author
// Function signature: getBooksOfAuthor(authorId: number, books: Book[], bookAuthors: BookAuthor[]): Book[]
