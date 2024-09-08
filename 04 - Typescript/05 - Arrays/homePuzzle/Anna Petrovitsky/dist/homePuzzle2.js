var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var books1 = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];
// Add a new book to the collection
function addBook(libary, book) {
    try {
        if (!book)
            throw new Error("Invalid INPUT!!!");
        libary.push(book);
    }
    catch (e) {
        console.error(e);
    }
}
var newBook = { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 };
addBook(books1, newBook);
console.log(books1);
//Find a book by its title
function findBookTitle(libary, title) {
    return libary.filter(function (book) { return book.title === title; });
}
console.log(findBookTitle(books1, "Moby-Dick"));
//4. Use an array method to filter books published after a certain year.
function filterBookByYear(libary, year) {
    return libary.filter(function (book) { return book.year > year; });
}
console.log(filterBookByYear(books1, 1950));
//Create a function that returns the newest book in the collection.
function newestBook(libary) {
    var bookSortYear = __spreadArrays(libary).sort(function (a, b) { return b.year - a.year; });
    return bookSortYear[0];
}
console.log(newestBook(books1));
//Practice using a forEach to display each book's information.
function printBookLibary(libary) {
    libary.forEach(function (book, index) { return document.write("<br> <b> Book info in index " + index + " is : </b>  Title - " + book.title + " , Author - " + book.author + " , Year - " + book.year); });
}
printBookLibary(books1);
// Create an array of `Item` objects to represent the inventory.
var items1 = [
    { id: 1, name: "Laptop", price: 1200.99, quantity: 10 },
    { id: 2, name: "Smartphone", price: 799.99, quantity: 25 },
    { id: 3, name: "Headphones", price: 199.99, quantity: 50 },
    { id: 4, name: "Keyboard", price: 49.99, quantity: 100 },
    { id: 5, name: "Monitor", price: 299.99, quantity: 15 },
    { id: 6, name: "Mouse", price: 29.99, quantity: 75 },
    { id: 7, name: "External Hard Drive", price: 89.99, quantity: 30 },
    { id: 8, name: "Webcam", price: 59.99, quantity: 40 },
    { id: 9, name: "Printer", price: 149.99, quantity: 20 },
    { id: 10, name: "Tablet", price: 499.99, quantity: 12 },
];
//Add a new item to the inventory
function addItem(listItems, newItem) {
    listItems.push(newItem);
}
var newItem = { id: 11, name: "Smartwatch", price: 199.99, quantity: 35 };
console.log(addItem(items1, newItem));
//   b. Remove an item from the inventory by id
function removwItem(listItem, itemId) {
    var findIndex = listItem.findIndex(function (item) { return item.id === itemId; });
    return __spreadArrays(listItem).slice(0, findIndex).concat(listItem.slice(findIndex + 1));
}
console.log(removwItem(items1, 4));
//   c. Update the quantity of an item by id
function addQuantity(listItem, itemId, quantity) {
    var findItem = listItem.findIndex(function (item) { return item.id === itemId; });
    listItem[findItem].quantity = quantity;
    return listItem[findItem];
}
console.log(addQuantity(items1, 5, 5));
//   d. Find an item by name (case-insensitive)
function findItemByName(listItem, itemName) {
    return listItem.filter(function (item) { return item.name === itemName; });
}
console.log(findItemByName(items1, "Laptop"));
// Calculate the total value of the inventory
function inventorySum(listItem) {
    return listItem.reduce(function (acc, item, index) { return acc + item.price; }, 0);
}
console.log(inventorySum(items1));
//   f. List all items with quantity below a specified threshold
function quantityList(listItem, min) {
    return listItem.filter(function (item) { return item.quantity < min; });
}
console.log(quantityList(items1, 30));
// swap items
function swapItems(listItem, firstItem, secindItem) {
    var temp;
    var posFirstItem = listItem.findIndex(function (item) { return item.id === firstItem; });
    var posSecondtItem = listItem.findIndex(function (item) { return item.id === secindItem; });
    temp = listItem[posFirstItem];
    listItem[posFirstItem] = listItem[posSecondtItem];
    listItem[posSecondtItem] = temp;
    return __spreadArrays(listItem);
}
console.log(swapItems(items1, 2, 8));
//Implement a function to sort the inventory by price (ascending and descending).
function sortInventory(listItems) {
    var listAsc = __spreadArrays(listItems).sort(function (a, b) { return a.price - b.price; });
    var listDes = __spreadArrays(listItems).sort(function (a, b) { return b.price - a.price; });
    return { listAsc: listAsc, listDes: listDes };
}
console.log(sortInventory(items1));
//Create a function that returns a summary object containing:- Total number of items- Average price of items- Most expensive item- Least expensive item
function makeNewObject(itemsList) {
    var sum = itemsList.reduce(function (acc, item, index) { return acc + item.quantity; }, 0);
    var avgSum = itemsList.reduce(function (acc, item, index) { return acc + item.price; }, 0) / itemsList.length;
    var sorted = itemsList.sort(function (a, b) { return a.price - b.price; });
    return {
        sumItems: sum,
        avgPriceItems: avgSum,
        expensiveItem: sorted[sorted.length - 1],
        leastItem: sorted[0]
    };
}
console.log(makeNewObject(items1));
//print inventory
function printInventory(listItem) {
    listItem.forEach(function (items, index) { return document.write("<br> The item in index: " + index + ", ID: " + items.id + " Name: " + items.name + " Price: " + items.price + " Quantity: " + items.quantity); });
}
printInventory(items1);
