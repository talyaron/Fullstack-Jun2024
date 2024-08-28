var buttons = document.querySelectorAll(".actionButton");
// Loop through each button and add a click event listener
buttons.forEach(function (button) {
    if (button instanceof HTMLButtonElement) {
        button.addEventListener("click", function () {
            console.log(button.id + " clicked!");
            if (button.id === "addItem") {
                var newitem = addItem(allItems);
                allItems.push(newitem);
                alert("new item added! Id:" + newitem.id + " name:" + newitem.name + " price:" + newitem.price + "$ quantity:" + newitem.quantity);
                allItems.forEach(function (allItems) {
                    console.log("id:" + allItems.id + " name:" + allItems.name + "\n             Costs " + allItems.price + "$ \n              amount in stock:" + allItems.quantity);
                });
            }
            if (button.id === "removeItem") {
                var itemByID = searchbyID(allItems);
                allItems == removeItem(itemByID, allItems);
                allItems.forEach(function (allItems) {
                    console.log("id:" + allItems.id + " name:" + allItems.name + "\n               Costs " + allItems.price + "$ \n                amount in stock:" + allItems.quantity);
                });
            }
            if (button.id === "updateItem") {
                var itemByID = searchbyID(allItems);
                allItems == updateQuantity(itemByID, allItems);
                allItems.forEach(function (allItems) {
                    console.log("id:" + allItems.id + " name:" + allItems.name + "\n                 Costs " + allItems.price + "$ \n                  amount in stock:" + allItems.quantity);
                });
            }
        });
    }
});
var allItems = [
    {
        id: 5543,
        name: "Teddy Bear",
        price: 15,
        quantity: 23
    },
    {
        id: 2334,
        name: "Barbie Doll",
        price: 17,
        quantity: 53
    },
    {
        id: 1234,
        name: "Action Figure",
        price: 10,
        quantity: 12
    },
    {
        id: 1911,
        name: "Water Gun",
        price: 7,
        quantity: 9
    },
];
function addItem(items) {
    //const _id = prompt("Give new item Id")
    var _id = giveRandomId(items);
    var _name = String(prompt("Give new item name"));
    var _price = Number(prompt("Give new item price"));
    var _quntity = Number(prompt("Give new item quantity"));
    return { id: _id, name: _name, price: _price, quantity: _quntity };
}
function giveRandomId(items) {
    var randomID = Math.floor(1000 + Math.random() * 9000);
    var checkID = Boolean(items.find(function (item) { return item.id == randomID; }));
    if (checkID) {
        return giveRandomId(items);
    }
    else
        return randomID;
}
function searchbyID(item) {
    var itemID = Number(prompt("Write the id of the item"));
    var itemSlected = item.find(function (item) { return item.id == itemID; });
    if (itemSlected) {
        return itemSlected;
    }
    else
        return null;
}
function removeItem(itemToRemove, itemCollection) {
    if (itemToRemove != null) {
        var index = itemCollection.findIndex(function (item) { return item.id === itemToRemove.id; });
        if (index !== -1) {
            itemCollection.splice(index, 1);
        }
        return itemCollection;
    }
    else
        return itemCollection;
}
function updateQuantity(item, itemCollection) {
    if (item != null) {
        var newQuantity = Number(prompt("write new quantity for item:" + item.name));
        if (newQuantity === null || !newQuantity || newQuantity < 0) {
            alert("quantity as a number!");
            return itemCollection;
        }
        else {
            item.quantity = newQuantity;
            return itemCollection;
        }
    }
    else {
        alert("this id number doesnt exist buddy!");
        return itemCollection;
    }
}
