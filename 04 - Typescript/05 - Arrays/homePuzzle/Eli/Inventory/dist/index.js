var buttons = document.querySelectorAll(".actionButton");
// looping for each button on the html page:
buttons.forEach(function (button) {
    if (button instanceof HTMLButtonElement) {
        button.addEventListener("click", function () {
            console.log(button.id + " clicked!");
            //button id: additem to add more items to the array:
            if (button.id === "addItem") {
                var newitem = inputNewItem(allItems);
                allItems == addItem(newitem, allItems);
                displayinventory(allItems);
            }
            //button id: removeItem to remove item from the collective array:
            if (button.id === "removeItem") {
                var itemByID = searchbyID(allItems);
                allItems == removeItem(itemByID, allItems);
                displayinventory(allItems);
            }
            //button id: updateItem to update the quantity of an item based on its id
            if (button.id === "updateItem") {
                var itemByID = searchbyID(allItems);
                allItems == updateQuantity(itemByID, allItems);
                displayinventory(allItems);
            }
            //button id: searchItemByName to search for item by its name :
            if (button.id === "searchItemByName") {
                var itemByName = searchbyName(allItems);
                displayItem(itemByName);
                displayinventory(allItems);
            }
            //button id: showRestock to show items with low quantities :
            if (button.id === "showRestock") {
                var itemsToRestock = itemToRestock(allItems);
                displayinventory(itemsToRestock);
            }
        });
    }
});
//array for the inventory
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
//functions for adding an item into the inventory :
//asks for an item from the user
function inputNewItem(items) {
    var _id = giveRandomId(items);
    var _name = String(prompt("Give new item name"));
    if (_name.length < 2 || _name.length > 20) {
        alert("the name you choose is too long/short");
    }
    else {
        var _price = Number(prompt("Give new item price"));
        if (Number.isNaN(_price) || _price <= 0) {
            alert("Ilegal price!");
        }
        else {
            var _quntity = Number(prompt("Give new item quantity"));
            if (!Number.isInteger(_quntity) || _quntity <= 0) {
                alert("quantity needs to be a full number above 0!");
            }
            else {
                return { id: _id, name: _name, price: _price, quantity: _quntity };
            }
        }
    }
    return { id: 2, name: "a", price: 0, quantity: 0 };
}
//give a random id to the item
function giveRandomId(items) {
    var randomID = Math.floor(1000 + Math.random() * 9000);
    var checkID = Boolean(items.find(function (item) { return item.id == randomID; }));
    if (checkID) {
        return giveRandomId(items);
    }
    else
        return randomID;
}
//adds the item to the inventory 
function addItem(item, allItems) {
    if (item.name !== "a") {
        allItems.push(item);
        alert("new item added! Id: " + item.id + " name: " + item.name + " price: " + item.price + "$ quantity: " + item.quantity);
    }
    alert("no new item added");
    return allItems;
}
//search functions:
//search by id
function searchbyID(item) {
    var itemID = Number(prompt("Write the id of the item"));
    var itemSlected = item.find(function (item) { return item.id == itemID; });
    if (itemSlected) {
        return itemSlected;
    }
    else
        return null;
}
//search by name
function searchbyName(item) {
    var itemName = String(prompt("Write the id of the item"));
    var itemSlected = item.find(function (item) { return item.name.toLowerCase() === itemName.toLowerCase(); });
    if (itemSlected) {
        return itemSlected;
    }
    else
        return null;
}
//remove item function:
function removeItem(itemToRemove, itemCollection) {
    if (itemToRemove != null) {
        var index = itemCollection.findIndex(function (item) { return item.id === itemToRemove.id; });
        if (index !== -1) {
            itemCollection.splice(index, 1);
        }
        alert(itemToRemove.name + " was removed successfully ");
        return itemCollection;
    }
    else {
        alert("item wasnt found :/");
        return itemCollection;
    }
}
//update item quantity by id function:
function updateQuantity(item, itemCollection) {
    if (item != null) {
        var newQuantity = Number(prompt("write new quantity for item: " + item.name));
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
//items to restock function:
function itemToRestock(item) {
    var lowNum = 5;
    var closeToOutItems = item.filter(function (item) { return item.quantity < lowNum; });
    return closeToOutItems;
}
//calculate the sum cost/worth of inventory function:
function calcInvWorth(items) {
    var sumAmmount = 0;
    items.forEach(function (item) {
        if (typeof item.quantity === "number" && typeof item.price === "number") {
            sumAmmount += item.quantity * item.price;
        }
    });
    return sumAmmount;
}
//display functions
//displays selected item in the console
function displayItem(item) {
    if (item != null)
        alert("item id: " + item.id + " name: " + item.name + " costs: " + item.price + "$ each. amount in stock: " + item.quantity);
    else
        alert("no such item in the system");
}
//displays inventory in the console and calculates the sum cost
function displayinventory(item) {
    item.forEach(function (item) {
        console.log("id:" + item.id + " name:" + item.name + "\n      Costs " + item.price + "$ \n    amount in stock:" + item.quantity);
    });
    var amountWorth = calcInvWorth(item);
    console.log("stock worth of : " + amountWorth + "$");
}
