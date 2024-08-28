// ## Exercise 1: Simple Book Collection (Beginner-Friendly)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 2. Create an array of `Item` objects to represent the inventory.
var Inventory = [
    { id: 1, name: "Laptop", price: 1200, quantity: 10 },
    { id: 2, name: "Smartphone", price: 800, quantity: 15 },
    { id: 3, name: "Headphones", price: 150, quantity: 30 }
];
console.log("original items:", Inventory);
// 3. Implement the following functions using array methods:
//    a. Add a new item to the inventory
Inventory.push({
    id: 4,
    name: "Tablet",
    price: 989,
    quantity: 26
});
console.log("added new item:", Inventory);
//    b. Remove an item from the inventory by id
var removeItemById = function (inventory, id) {
    return inventory.filter(function (item) { return item.id !== id; });
};
var updatedInventory = removeItemById(Inventory, 3);
console.log("The updated inventory after removing is:", updatedInventory);
//    c. Update the quantity of an item by id
var updateItemQuantityById = function (inventory, id, newQuantity) {
    return inventory.map(function (item) {
        return item.id === id ? __assign(__assign({}, item), { quantity: newQuantity }) : item;
    });
};
var updatedQuantityInventory = updateItemQuantityById(Inventory, 2, 20);
console.log("The updated quantity inventory is:", updatedQuantityInventory);
//    d. Find an item by name (case-insensitive)
var FindItemByName = function (Inventory, name) {
    return Inventory.find(function (item) { return function (item) { return item.name.toLowerCase() === name.toLowerCase(); }; });
};
var foundItem = FindItemByName(Inventory, "laptop");
if (foundItem) {
    console.log("the found item is:", foundItem);
}
else {
    console.log("Item not found");
}
//    e. Calculate the total value of the inventory
var calculateTotalInventoryValue = function (Inventory) {
    return Inventory.reduce(function (total, item) { return total + item.price * item.quantity; }, 0);
};
var totalValue = calculateTotalInventoryValue(Inventory);
console.log("Total inventory value: $" + totalValue);
//    f. List all items with quantity below a specified threshold
var quantityBelow = Inventory.filter(function (Inventory) { return Inventory.quantity < 20; });
console.log("the items with quantity below 20 are:", quantityBelow);
// 4. Use array destructuring to swap the positions of two items in the inventory.
var swapPositionsById = function (Inventory, id1, id2) {
    var _a;
    var index1 = Inventory.findIndex(function (item) { return item.id === id1; });
    var index2 = Inventory.findIndex(function (item) { return item.id === id2; });
    if (index1 === -1 || index2 === -1) {
        console.log('One or both items not found');
        return Inventory;
    }
    var newInventory = __spreadArrays(Inventory);
    _a = [newInventory[index2], newInventory[index1]], newInventory[index1] = _a[0], newInventory[index2] = _a[1];
    return newInventory;
};
var updatedSwapInventory = swapPositionsById(Inventory, 1, 3);
console.log("updated Swap Inventory:", updatedSwapInventory);
// 5. Implement a function to sort the inventory by price (ascending and descending).
var sortByPriceAscending = function (Inventory) {
    return Inventory.sort(function (a, b) { return a.price - b.price; });
};
var sortedAscendingInventory = sortByPriceAscending(Inventory);
console.log("Ascending:", sortedAscendingInventory);
// Descending order
var sortByPriceDescending = function (Inventory) {
    return Inventory.sort(function (a, b) { return b.price - a.price; });
};
var sortedDescendingInventory = sortByPriceDescending(Inventory);
console.log("Descending:", sortedDescendingInventory);
// 6. Create a function that returns a summary object containing:
//    - Total number of items
var calculateTotalItems = function (Inventory) {
    return Inventory.reduce(function (total, item) { return total + item.quantity; }, 0);
};
var totalItems = calculateTotalItems(Inventory);
console.log("Total items are: " + totalItems);
//    - Average price of items
var calculateAveragePrice = function (Inventory) {
    if (Inventory.length === 0)
        return 0;
    var total = Inventory.reduce(function (acc, item) { return acc + item.price; }, 0);
    return total / Inventory.length;
};
var AveragePrice = calculateAveragePrice(Inventory);
console.log("Average Price is: " + AveragePrice);
//    - Most expensive item
var findMostExpensiveItem = function (Inventory) {
    if (Inventory.length === 0)
        return null;
    return Inventory.reduce(function (mostExpensive, item) {
        return item.price > mostExpensive.price ? item : mostExpensive;
    });
};
var mostExpensiveItem = findMostExpensiveItem(Inventory);
console.log("Most Expensive Item:", mostExpensiveItem);
//    - Least expensive item
var findLeastExpensiveItem = function (Inventory) {
    if (Inventory.length === 0)
        return null;
    return Inventory.reduce(function (leastExpensive, item) {
        return item.price < leastExpensive.price ? item : leastExpensive;
    });
};
var leastExpensiveItem = findLeastExpensiveItem(Inventory);
console.log("Least Expensive Item:", leastExpensiveItem);
