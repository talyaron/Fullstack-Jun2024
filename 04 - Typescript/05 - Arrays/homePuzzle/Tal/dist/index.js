var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var items = []; //state
function addItem(name, price, quantity) {
    var id = crypto.randomUUID();
    items.push({ id: id, name: name, price: price, quantity: quantity });
}
addItem('apple', 1, 10);
console.log(JSON.stringify(items));
function removeItem(id) {
    var index = items.findIndex(function (item) { return item.id === id; });
    if (index !== -1) {
        items.splice(index, 1);
    }
}
function updateItem(_a) {
    var id = _a.id, name = _a.name, price = _a.price, quantity = _a.quantity;
    var item = items.find(function (item) { return item.id === id; });
    if (item) {
        if (name)
            item.name = name;
        if (price)
            item.price = price;
        if (quantity)
            item.quantity = quantity;
    }
}
updateItem({ id: items[0].id, name: 'orange' });
console.log(items);
function findByName(name) {
    return items.find(function (item) { return item.name === name; });
}
addItem('banana', 2, 20);
console.log(findByName('banana'));
addItem("broccoli", 3, 30);
function totalInventory() {
    return items.reduce(function (total, item) { return total + (item.price * item.quantity); }, 0);
}
console.log(totalInventory());
function filterItemsByPrice(price) {
    return items.filter(function (item) { return item.price < price; });
}
function swapItems(index1, index2, arr) {
    var _a;
    try {
        var _arr = __spreadArrays(arr);
        // const temp1 = _arr[index1];
        // const temp2 = _arr[index2];
        // _arr[index1] = temp2;
        // _arr[index2] = temp1;
        // return _arr;
        _a = [_arr[index2], _arr[index1]], _arr[index1] = _a[0], _arr[index2] = _a[1];
    }
    catch (e) {
        console.error(e);
        return [];
    }
}
console.log(items);
console.log(swapItems(0, 1, items));
