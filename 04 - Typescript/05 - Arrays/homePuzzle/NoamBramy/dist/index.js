// ## Exercise 1: Simple Book Collection (Beginner-Friendly)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
// 2. Create an array of `Book` objects to store your book collection.
var collection = [
    {
        title: "Noam Book",
        author: "Chris",
        year: 1990
    },
];
console.log(collection);
// a. Add a new book to the collection
collection.push({ title: "Noam Book 2", author: "Chris2", year: 1991 });
collection.push({ title: "Noam Book 3", author: "Chris3", year: 1992 });
collection.push({ title: "Noam Book 4", author: "Chris4", year: 1993 });
collection.push({ title: "Noam Book 5", author: "Chris5", year: 1994 });
// b. Display all books in the collection
collection.forEach(function (book) {
    console.log("Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year);
});
// c. Find a book by its title
var foundBook = collection.find(function (book) { return book.title === "Noam Book"; });
if (foundBook) {
    console.log("Found book: Title: " + foundBook.title + ", Author: " + foundBook.author + ", Year: " + foundBook.year);
}
else {
    console.log("Book not found");
}
// 4. Use an array method to filter books published after a certain year.
var filterBook = collection.filter(function (book) { return book.year > 1992; });
console.log(filterBook);
// 5. Create a function that returns the newest book in the collection.
var newestBook = collection.reduce(function (latest, book) {
    if (book.year > latest.year) {
        return book;
    }
    return latest;
});
if (newestBook) {
    console.log("Newest book: Title: " + newestBook.title + ", Author: " + newestBook.author + ", Year: " + newestBook.year);
}
else {
    console.log("No books in collection");
}
// 6. Practice using a forEach to display each book's information.
collection.forEach(function (book) {
    console.log("Title: " + book.title + ", Author: " + book.author + ", Year: " + book.year);
});
// 2. Create an array of `Item` objects to represent the inventory.
var inventory = [
    { id: 1, name: "Laptop", price: 50, quantity: 10 },
    { id: 2, name: "Mouse", price: 25.5, quantity: 100 },
    { id: 3, name: "Keyboard", price: 75.0, quantity: 50 },
];
console.log(inventory);
// 3. Implement the following functions using array methods:
//    a. Add a new item to the inventory
inventory.push({ id: 4, name: "Monitor", price: 99.0, quantity: 5 });
//    b. Remove an item from the inventory by id
var removeitem = inventory.findIndex(function (item) { return item.id === 3; });
if (removeitem !== -1) {
    inventory.splice(removeitem, 1);
}
//    c. Update the quantity of an item by id
var item = inventory.find(function (item) { return item.id === 2; });
if (item) {
    item.quantity = 70;
}
//    d. Find an item by name (case-insensitive)
var finditem = inventory.find(function (item) { return item.name.toLowerCase() === "mouse".toLowerCase(); });
if (finditem) {
    console.log("ID: " + finditem.id + ", Name: " + finditem.name + ", Price: " + finditem.price + ", Quantity: " + finditem.quantity);
}
//    e. Calculate the total value of the inventory
var totalValue = inventory.reduce(function (total, item) {
    return total + item.price * item.quantity;
}, 0);
console.log(totalValue);
//    f. List all items with quantity below a specified threshold
var listall = inventory.filter(function (item) { return item.quantity > 4; });
console.log(listall);
//   4. Use array destructuring to swap the positions of two items in the inventory.
var index1 = 0;
var index2 = 1;
_a = [inventory[index2], inventory[index1]], inventory[index1] = _a[0], inventory[index2] = _a[1];
// 5. Implement a function to sort the inventory by price (ascending and descending).
function sortByPrice(boolean) {
    if (boolean === void 0) { boolean = true; }
    return __spreadArrays(inventory).sort(function (a, b) { return boolean ? a.price - b.price : b.price - a.price; });
}
console.log(sortByPrice());
// 6. Create a function that returns a summary object containing:
//    - Total number of items
var totalItems = inventory.length;
console.log(totalItems);
//    - Average price of items
var averagePrice = inventory.reduce(function (total, item) { return total + (item.price * item.quantity); }, 0) / totalItems;
console.log(averagePrice);
//    - Most expensive item
var mostExpensive = inventory.reduce(function (max, item) { return item.price > max.price ? item : max; }, inventory[0]);
console.log(mostExpensive);
//    - Least expensive item
var leastExpensive = inventory.reduce(function (min, item) { return item.price < min.price ? item : min; }, inventory[0]);
console.log(leastExpensive);
