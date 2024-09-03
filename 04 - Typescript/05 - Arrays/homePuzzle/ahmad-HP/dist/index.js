;
var bookCollection = [];
function addBook(title, author, year) {
    var newBook = { title: title, author: author, year: year };
    bookCollection.push(newBook);
}
function displayBooks() {
    console.log("book Collection: ");
    bookCollection.forEach(function (book, index) {
        console.log("\"" + (index + 1) + ". Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year + " \"");
    });
}
function findBookByTitle(title) {
    return bookCollection.find(function (book) { return book.title === title; });
}
function filterBooksByYear(year) {
    return bookCollection.filter(function (book) { return book.year > year; });
}
function getNewestBook() {
    return bookCollection.reduce(function (newest, book) {
        return book.year > newest.year ? book : newest;
    }, bookCollection[0]);
}
function displayBookInfo() {
    bookCollection.forEach(function (book) {
        console.log("\"Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year + " \"");
    });
}
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);
addBook("1984", "George Orwell", 1949);
displayBooks();
var book = findBookByTitle("1984");
console.log("Found Book:", book);
var recentBooks = filterBooksByYear(1950);
console.log("Books published after 1950:", recentBooks);
var newestBook = getNewestBook();
console.log("Newest Book:", newestBook);
displayBookInfo();
console.log("---------------------------------------------------------------------------");
var inventory = [];
//Add a new item to the inventory
function addItem(id, name, price, quantity) {
    var newItem = { id: id, name: name, price: price, quantity: quantity };
    inventory.push(newItem);
}
//Remove an item from the inventory by id
function removeItem(id) {
    var index = inventory.findIndex(function (item) { return item.id === id; });
    if (index !== -1) {
        inventory.splice(index, 1);
    }
    else {
        console.log("\"item with id " + id + " not founded.\"");
    }
}
// Update the quantity of an item by id
function updateQuantety(id, newQuantety) {
    var item = inventory.find(function (item) { return item.id === id; });
    if (item) {
        item.quantity = newQuantety;
    }
    else {
        console.log("\"Item with id :" + id + " is not defined.\"");
    }
}
// Find an item by name (case-insensitive)
function findeByName(name) {
    return inventory.find(function (item) { return item.name.toLowerCase() === name.toLocaleLowerCase(); });
}
// Calculate the total value of the inventory
function clacTheTotalValue() {
    return inventory.reduce(function (total, item) { return total + (item.price * item.quantity); }, 0);
}
// List all items with quantity below a specified threshold
function listItemsBelowThreshold(threshold) {
    return inventory.filter(function (item) { return item.quantity < threshold; });
}
// print all item in the inventory
function printAllItems() {
    inventory.forEach(function (item) {
        console.log("'ID: " + item.id + ", Name: " + item.name + ", Price: " + item.price + ", Quantity: " + item.quantity + "'");
    });
}
// Use array destructuring to swap the positions of two items in the inventory.
function swapItemsById(id1, id2) {
    var _a;
    var index1 = inventory.findIndex(function (item) { return item.id == id1; });
    var index2 = inventory.findIndex(function (item) { return item.id == id2; });
    if (index1 !== -1 && index2 !== -1) {
        _a = [inventory[index2], inventory[index1]], inventory[index1] = _a[0], inventory[index2] = _a[1];
    }
    else if (index1 === -1 && index2 !== -1 || index1 !== -1 && index2 === -1) {
        console.log('One of the item that you want to swap is not definde. ');
    }
    else {
        console.log('both of the item that you want to swap are not definded.');
    }
}
//  Implement a function to sort the inventory by price (ascending and descending).
function sortPriceAscending() {
    inventory.sort(function (a, b) { return a.price - b.price; });
}
function sortPriceDescending() {
    inventory.sort(function (a, b) { return b.price - a.price; });
}
//  Create a function that returns a summary object containing:
function getInventorySummary() {
    if (inventory.length === 0) {
        return {
            totalItems: 0,
            avaragePrice: 0,
            mostExpensiveItwm: null,
            lessExpensiveItem: null
        };
    }
    var totalItems = inventory.length;
    var totalPrice = inventory.reduce(function (sum, item) { return sum + item.price; }, 0);
    var avaragePrice = totalPrice / totalItems;
    var mostExpensiveItem = inventory.reduce(function (max, item) { return (item.price > max.price ? item : max); }, inventory[0]);
    var lessExpensiveItem = inventory.reduce(function (min, item) { return (item.price < min.price ? item : min); }, inventory[0]);
    return {
        totalItems: totalItems,
        avaragePrice: avaragePrice,
        mostExpensiveItem: mostExpensiveItem,
        lessExpensiveItem: lessExpensiveItem
    };
}
addItem(1, 'Item1', 10, 5);
addItem(2, 'Item2', 20, 3);
addItem(3, 'Item3', 30, 7);
console.log('Inventory after adding items:');
printAllItems();
console.log('Total value of the inventory:', clacTheTotalValue());
console.log('Items with quantity below 5:', listItemsBelowThreshold(5));
updateQuantety(1, 10);
console.log('Inventory after updating quantity of Item 1:');
printAllItems();
removeItem(2);
console.log('Inventory after removing Item 2:');
printAllItems();
swapItemsById(1, 3);
console.log('Inventory after swapping items with ID 1 and 3:');
printAllItems();
console.log('Inventory summary:', getInventorySummary());
sortPriceAscending();
console.log('Inventory sorted by price ascending:');
printAllItems();
sortPriceDescending();
console.log('Inventory sorted by price descending:');
printAllItems();
