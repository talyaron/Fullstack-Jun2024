// ## Exercise 1: Simple Book Collection (Beginner-Friendly)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function createBookCollection() {
    while (true) {
        var collectionName = prompt("Let's create your new book collection.\nPlease enter the name of your collection:") || "";
        if (!collectionName.trim()) {
            alert("Please enter a valid collection name.");
        }
        else {
            console.log("Collection \"" + collectionName + "\" has been created.");
            return collectionName;
        }
    }
}
function addBook(bookCollection) {
    var title;
    var author;
    var year;
    while (true) {
        title = prompt("Enter the title of the book:") || "";
        if (!title.trim()) {
            alert("Title cannot be empty. Please enter a valid title.");
        }
        else {
            break;
        }
    }
    while (true) {
        author = prompt("Enter the author of the book:") || "";
        if (!author.trim()) {
            alert("Author cannot be empty. Please enter a valid author.");
        }
        else {
            break;
        }
    }
    while (true) {
        var yearInput = prompt("Enter the year of publication:") || "";
        year = Number(yearInput);
        if (isNaN(year) || year <= 0) {
            alert("Year must be a valid positive number. Please enter a valid year.");
        }
        else {
            break;
        }
    }
    var book = { title: title, author: author, year: year };
    return __spreadArrays(bookCollection, [book]);
}
function findBookByTitle(bookCollection) {
    try {
        var title_1 = prompt("Enter the title of the book to find:") || "";
        if (!title_1.trim())
            throw new Error("Title cannot be empty.");
        var book = bookCollection.find(function (book) { return book.title.toLowerCase() === title_1.toLowerCase(); });
        if (!book) {
            console.log("Book with title \"" + title_1 + "\" not found.");
            return undefined;
        }
        console.log("Found book: " + book.title + " by " + book.author + ", published in " + book.year + ".");
        return book;
    }
    catch (error) {
        console.error("Error finding book: " + error.message);
        return undefined;
    }
}
function filterBooksByYear(bookCollection) {
    try {
        var year_1 = Number(prompt("Enter the year to filter books published after:"));
        if (isNaN(year_1))
            throw new Error("Year must be a valid number.");
        var filteredBooks = bookCollection.filter(function (book) { return book.year > year_1; });
        if (filteredBooks.length === 0) {
            console.log("No books found published after " + year_1 + ".");
        }
        else {
            console.log("Books published after " + year_1 + ":");
            filteredBooks.forEach(function (book) {
                return console.log(book.title + " by " + book.author + ", published in " + book.year + ".");
            });
        }
        return filteredBooks;
    }
    catch (error) {
        console.error("Error filtering books: " + error.message);
        return [];
    }
}
function getNewestBook(bookCollection) {
    try {
        if (bookCollection.length === 0) {
            throw new Error("No books in the collection to find the newest one.");
        }
        var newestBook = bookCollection[0];
        var books = bookCollection.slice(1);
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var book = books_1[_i];
            if (book.year > newestBook.year) {
                newestBook = book;
            }
        }
        console.log("The newest book is \"" + newestBook.title + "\" by " + newestBook.author + ", published in " + newestBook.year + ".");
        return newestBook;
    }
    catch (error) {
        console.error("Error getting the newest book: " + error.message);
        return undefined;
    }
}
function displayEachBookInfo(bookCollection) {
    try {
        if (bookCollection.length === 0) {
            throw new Error("No books in the collection to display.");
        }
        bookCollection.forEach(function (book) {
            console.log(book.author + ", " + book.year + ", \"" + book.title + "\".");
        });
    }
    catch (error) {
        console.error("Error displaying each book's information: " + error.message);
    }
}
function manageBookCollection() {
    var _a;
    var collectionName = createBookCollection();
    var myBookCollection = [];
    while (true) {
        var updatedCollection = addBook(myBookCollection);
        if (updatedCollection !== myBookCollection) {
            myBookCollection = updatedCollection;
            console.log("Book added successfully.");
        }
        var addAnother = ((_a = prompt("Would you like to add another book? (yes/no):")) === null || _a === void 0 ? void 0 : _a.toLowerCase()) ||
            "";
        if (addAnother !== "yes") {
            console.log("Collection \"" + collectionName + "\" has been created and contains the following books:");
            displayEachBookInfo(myBookCollection);
            break;
        }
    }
}
// Start the book collection management process
manageBookCollection();
