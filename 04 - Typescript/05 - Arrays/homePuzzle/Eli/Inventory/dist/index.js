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
            //button id: switchItemsPositions to switch position between two items :
            if (button.id === "switchItemsPositions") {
                allItems == switchItems(allItems);
                displayinventory(allItems);
            }
            //button id: sort to sort items by price :
            if (button.id === "sort") {
                allItems == sort(allItems);
                displayinventory(allItems);
            }
            if (button.id === "summary") {
                var summuries = summary(allItems);
                //displayinventory(allItems);
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
//takes assigns the html list element to the scrip
var itemListElement = document.getElementById("itemList");
//writes all the items on screen 
allItems.forEach(function (item) {
    var itemElement = document.createElement("li");
    itemElement.textContent = "ID:" + item.id + " - Name: " + item.name + " - Price: $" + item.price + " - In stock : " + item.quantity;
    itemListElement === null || itemListElement === void 0 ? void 0 : itemListElement.appendChild(itemElement);
});
//functions for adding an item into the inventory :
//asks for an item from the user
function inputNewItem(items) {
    //calls id randomizer function
    var _id = giveRandomId(items);
    //asks user for name
    var _name = String(prompt("Give new item name"));
    if (_name.length < 2 || _name.length > 20 || _name === "null") {
        alert("the name you choose is too long/short");
        return null;
    }
    //if name is ok asks user for price
    var _price = Number(prompt("Give new item price"));
    if (Number.isNaN(_price) || _price <= 0) {
        alert("Ilegal price!");
        return null;
    }
    //if price is ok asks user for quantity
    var _quntity = Number(prompt("Give new item quantity"));
    if (!Number.isInteger(_quntity) || _quntity <= 0) {
        alert("quantity needs to be a full number above 0!");
        return null;
    }
    //if all is ok returns the user item
    return { id: _id, name: _name, price: _price, quantity: _quntity };
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
    if (item != null) {
        allItems.push(item);
        alert("new item added! Id: " + item.id + " name: " + item.name + " price: " + item.price + "$ quantity: " + item.quantity);
    }
    else {
        alert("no new item added");
    }
    return allItems;
    //return allItems;
}
//search functions:
//search by id
function searchbyID(item) {
    var itemID = Number(prompt("Write the ID of the item"));
    var itemSlected = item.find(function (item) { return item.id == itemID; });
    if (itemSlected) {
        return itemSlected;
    }
    else
        return null;
}
//search by name
function searchbyName(item, hasName) {
    var itemName = hasName
        ? hasName
        : String(prompt("Write the NAME of the item"));
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
        alert("item wasnt found :/ try writing exsisting item ID");
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
    // clear existing items on html page
    if (itemListElement)
        itemListElement.innerHTML = "";
    //display items on html page:
    allItems.forEach(function (item) {
        var itemElement = document.createElement("li");
        itemElement.textContent = "ID:" + item.id + " - Name: " + item.name + " - Price: $" + item.price + " - In stock : " + item.quantity;
        itemListElement === null || itemListElement === void 0 ? void 0 : itemListElement.appendChild(itemElement);
    });
}
//switch two items position in the arrray function
function switchItems(item) {
    //set first item by calling search by name
    var _firstItem = searchbyName(item);
    if (_firstItem === null) {
        alert("no item");
        return item;
    }
    //set second item by calling search by name again
    var _secondItem = searchbyName(item);
    if (_secondItem === null) {
        alert("no item");
        return item;
    }
    // finds the index of the first item
    var firstIndex = item.findIndex(function (item) { return item.id === _firstItem.id; });
    // finds the index of the second item
    var secondIndex = item.findIndex(function (item) { return item.id === _secondItem.id; });
    if (firstIndex !== -1 && secondIndex !== -1) {
        // swaps the items
        var temp = item[firstIndex];
        item[firstIndex] = item[secondIndex];
        item[secondIndex] = temp;
    }
    else {
        alert("One or both items not found in the array.");
    }
    alert("succsussfully switched between " + _firstItem.name + " and  " + _secondItem.name);
    return item;
}
//sort items by price function
function sort(item) {
    item.sort(function (a, b) { return Number(a.price) - Number(b.price); });
    return item;
}
//calculate the amount of all the items not type function
function calculatAllItems(item) {
    var sumAmmount = 0;
    item.forEach(function (item) {
        if (typeof item.quantity === "number") {
            sumAmmount += item.quantity;
        }
    });
    return sumAmmount;
}
//summary function
function summary(item) {
    var _itemAmountSum = item.length;
    var sumAmmount = Number(calculatAllItems(item));
    var sumPrice = calcInvWorth(item);
    var _avrgPrice = sumPrice / sumAmmount;
    var cheapestItem = item.sort(function (a, b) { return Number(a.price) - Number(b.price); })[0];
    var mostExpensiveItem = item.sort(function (a, b) { return Number(b.price) - Number(a.price); })[0];
    console.log("the are " + _itemAmountSum + " types of items and overall " + sumAmmount + " items\n  in the inventory average price " + _avrgPrice.toFixed(1) + "$ \n  the most expensive item is : " + mostExpensiveItem.name + " it costs : " + mostExpensiveItem.price + "$\n   and the cheapest is: " + cheapestItem.name + " it costs : " + cheapestItem.price + "$ ");
    if (itemListElement)
        itemListElement.innerHTML = "";
    var itemElement = document.createElement("div");
    itemElement.textContent = "the are " + _itemAmountSum + " types of items and overall " + sumAmmount + " items\n  in the inventory average price is " + _avrgPrice.toFixed(1) + "$ \n  the most expensive item is : " + mostExpensiveItem.name + " it costs : " + mostExpensiveItem.price + "$\n   and the cheapest is: " + cheapestItem.name + " it costs : " + cheapestItem.price + "$ ";
    itemListElement === null || itemListElement === void 0 ? void 0 : itemListElement.appendChild(itemElement);
}
