function addItem(inventory, item) {
    inventory.push(item);
}
function removeItem(inventory, id) {
    var itemIndex = inventory.findIndex(function (item) { return item.id === id; });
    inventory.splice(itemIndex, 1);
}
function updateQuantity(inventory, id, newQuantity) {
    var itemIndex = inventory.findIndex(function (item) { return item.id === id; });
    inventory[itemIndex].quantity = newQuantity;
}
function itemByName(inventory, name) {
    var itemIndex = inventory.findIndex(function (item) { return item.name === name; });
    return inventory[itemIndex];
}
function calculateValue(inventory) {
    return inventory.reduce(function (acc, item) { return acc + (item.price * item.quantity); }, 0);
}
function listRares(inventory, threshold) {
    return inventory.filter(function (item) { return item.quantity < threshold; });
}
function swapItems(inventory, itemA, itemB) {
    var indexA = inventory.indexOf(itemA);
    var indexB = inventory.indexOf(itemB);
    inventory[indexA] = itemB;
    inventory[indexB] = itemA;
}
function sortItems(inventory, asscending) {
    inventory.sort(function (itemA, itemB) { return itemA.price - itemB.price; });
    if (asscending) {
        inventory.reverse();
    }
}
function getSummery(inventory) {
    var totalItems = inventory.reduce(function (acc, item) { return acc + item.quantity; }, 0);
    var avgPrice = inventory.reduce(function (acc, item) { return acc + item.price; }, 0) / totalItems;
    var mostExpensive = inventory.reduce(function (most, current) { return (most.price > current.price ? most : current); }, inventory[0]);
    var leastExpensive = inventory.reduce(function (most, current) { return (most.price > current.price ? current : most); }, inventory[0]);
    return { totalItems: totalItems, avgPrice: avgPrice, mostExpensive: mostExpensive, leastExpensive: leastExpensive };
}
console.log("======testing module======");
var inventory = [];
console.log("add, remove and update test:");
addItem(inventory, { id: 12, name: "", price: 1, quantity: 1 });
addItem(inventory, { id: 23, name: "test item", price: 2, quantity: 1 });
addItem(inventory, { id: 32, name: "", price: 3, quantity: 1 });
addItem(inventory, { id: 42, name: "getMe", price: 4, quantity: 1 });
removeItem(inventory, 32);
updateQuantity(inventory, 23, 4);
console.log("expected: 12, 23 with 4 items, 42");
console.log(inventory);
console.log("itemByName test:");
console.log("expected: 42");
console.log(itemByName(inventory, "getMe"));
console.log("calculateValue test:");
console.log(calculateValue(inventory) + " (expected 1 + 2*4 + 4 = 13)");
console.log("listRares test:");
console.log("expected 12, 42");
console.log(listRares(inventory, 2));
console.log("swapItems test:");
swapItems(inventory, itemByName(inventory, "getMe"), itemByName(inventory, "test item"));
console.log("expected 12, 42, 23");
console.log(inventory);
console.log("sortItems test:");
sortItems(inventory, true);
console.log("expected 42, 23, 12");
console.log(inventory);
console.log("getSummery test:");
console.log(getSummery(inventory));
console.log("======testing end======");
