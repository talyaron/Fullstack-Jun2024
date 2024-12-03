var item1 = {
    id: 12345,
    name: "Xbox",
    price: 2500,
    quantity: 10
};
var Inventory = [
    { id: 11111, name: "xbox", price: 2500, quantity: 4 },
    { id: 22222, name: "ps", price: 3500, quantity: 3 },
    { id: 33333, name: "cat", price: 1000, quantity: 2 },
    { id: 44444, name: "ipad", price: 2950, quantity: 1 },
    { id: 55555, name: "box", price: 10, quantity: 10 },
    { id: 66666, name: "glass", price: 5, quantity: 100 },
    { id: 77777, name: "image", price: 999, quantity: 12 },
    { id: 88888, name: "comp", price: 10000, quantity: 2 },
    { id: 99999, name: "lamp", price: 129, quantity: 5 },
    { id: 17856, name: "dast", price: 999999, quantity: 5 },
];
//add item
Inventory.push(item1);
//remove item
function removeById(id) {
    var index = Inventory.findIndex(function (item) { return item.id == id; });
    console.log(index);
    Inventory.splice(index, 1);
} //more way downPage
removeById(33333);
// Update the quantity of an item by id
function changeQuan(id, wantQuantity) {
    var index = Inventory.findIndex(function (item) { return item.id == id; });
    Inventory[index].quantity = wantQuantity;
}
changeQuan(66666, 5);
// d. Find an item by name (case-insensitive)
function findByName(name) {
    var x = name.toLowerCase();
    var item = Inventory.find(function (item) { return item.name == x; });
    if (item == undefined)
        return { error: " not found!" };
    return { item: item, error: " found!" };
}
var y = findByName("PS");
// console.log(y.item?.name+y.error);
function culcValueItem(item) {
    var value = item.price * item.quantity;
    return value;
}
//  Calculate the total value of the inventory
function culcArray(o) {
    var sum = o.reduce(function (accumulator, item) {
        return accumulator + culcValueItem(item);
    }, 0);
    return sum;
}
console.log(culcArray(Inventory));
// List all items with quantity below a specified threshold
function Stock(threshold, o) {
    var stock = o.filter(function (item) { return item.quantity < threshold; });
    return stock;
}
console.log(Stock(5, Inventory));
// Implement a function to sort the inventory by price (ascending and descending).
function sortByPriceLToH(o) {
    o.sort(function (item1, item2) { return item1.price - item2.price; });
}
function sortByPriceHToL(o) {
    o.sort(function (item1, item2) { return item2.price - item1.price; });
}
function summary(o) {
    var total = o.length;
    var average = culcArray(o) / total;
    sortByPriceLToH(o);
    var mostExpensive = o.at(-1);
    var leastExpensive = o.at(-o.length);
    var summary = {
        total: total,
        average: average,
        mostExpensive: mostExpensive,
        leastExpensive: leastExpensive
    };
    return summary;
}
console.log(summary(Inventory));
console.log(Inventory);
//   var index: number = 0;
//   Inventory.forEach(checkId);
//   function checkId(item: Item, i: number) {
//     if (item.id == id) index = i;
//   }
