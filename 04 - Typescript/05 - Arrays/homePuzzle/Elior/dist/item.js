//creating inventory of items of array
var inventory = [
    { id: 1, name: "laptop", quantity: 10, price: 1200 },
    { id: 2, name: "Mouse", quantity: 50, price: 25 },
    { id: 3, name: "Keyboard", quantity: 30, price: 45 },
    { id: 4, name: "Monitor", quantity: 15, price: 300 },
];
//creating a function to add a new item to the inventory 
function addItemToInventory(newItem) {
    inventory.push(newItem);
}
//creating a new item to the inventory
var newItem = { id: 5, name: "printer", quantity: 20, price: 150 };
//adding the new item to the inventory 
addItemToInventory(newItem);
//remove item from the inventory by id
function removeItemById(id) {
    inventory = inventory.filter(function (item) { return item.id !== id; });
}
//Removing the item by id
removeItemById(3);
//creating a function to update the quantity of item with id
function updateItemQuantityById(id, newQuantity) {
    var item = inventory.find(function (item) { return item.id === id; });
    if (item) {
        item.quantity = newQuantity;
    }
    else {
        //throwing a error message if the id not found
        console.error("Item with id " + id + " not found.");
    }
}
//updating the quantity of the item with id 2 
updateItemQuantityById(2, 60);
//creating a function to find item by name 
function findItemByName(name) {
    return inventory.find(function (item) { return item.name === name; });
}
var item = findItemByName("Mouse");
if (item) {
    console.log("item found:", item);
}
else {
    console.log("item not found");
}
//calculating the total value of the inventory 
//creating a function to calculate the total value of the inventory 
function calculateTotalInventoryValue() {
    return inventory.reduce(function (total, item) { return total + (item.quantity * item.price); }, 0);
}
//calling the function to work
var totalValue = calculateTotalInventoryValue();
console.log("total inventory value:", totalValue);
//creating a function of all items with quantity below a specified threshold 
function listItemsBelowThreshold(threshold) {
    return inventory.filter(function (item) { return item.quantity < threshold; });
}
//calling the function to work
var itemsBelowThreshold = listItemsBelowThreshold(20);
//rendering the resulst to the console
console.log("Items with quantity below threshold:", itemsBelowThreshold);
//creating function to swap items in the inventory 
function swapItems(inventory, index1, index2) {
    var _a;
    _a = [inventory[index2], inventory[index1]], inventory[index1] = _a[0], inventory[index2] = _a[1];
}
//calling the function to swap the items
swapItems(inventory, 0, 1);
console.log(inventory);
//creating a function to sort the inventory by up price
function sortInventoryByPriceAscending() {
    return inventory.sort(function (a, b) { return a.price - b.price; });
}
//creating a function to sort the inventory by down price
function sortInventoryByPriceDescending() {
    return inventory.sort(function (a, b) { return b.price - a.price; });
}
console.log("Inventory sorted by price (ascending):", sortInventoryByPriceAscending());
console.log("Inventory sorted by price (descending):", sortInventoryByPriceDescending());
//creating a function that returns a summary object containing 
function getInventorySummary() {
    var totalItems = inventory.length;
    var averagePrice = inventory.reduce(function (acc, item) { return acc + item.price; }, 0) / totalItems;
    var mostExpensiveItem = inventory.reduce(function (prev, current) { return (prev.price > current.price ? prev : current); });
    var leastExpensiveItem = inventory.reduce(function (prev, current) { return (prev.price < current.price ? prev : current); });
    return {
        totalItems: totalItems,
        averagePrice: averagePrice,
        mostExpensiveItem: mostExpensiveItem,
        leastExpensiveItem: leastExpensiveItem
    };
}
var summary = getInventorySummary();
console.log("inventory Summary:", summary);
//rendering to the console
console.log(inventory);
