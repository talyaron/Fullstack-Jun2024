const buttons = document.querySelectorAll(".actionButton");

// looping for each button on the html page:
buttons.forEach((button) => {
  if (button instanceof HTMLButtonElement) {
    button.addEventListener("click", () => {
      console.log(`${button.id} clicked!`);
      //button id: additem to add more items to the array:
      if (button.id === "addItem") {
        const newitem = inputNewItem(allItems);
        allItems == addItem(newitem, allItems);
        displayinventory(allItems);
      }
      //button id: removeItem to remove item from the collective array:
      if (button.id === "removeItem") {
        const itemByID = searchbyID(allItems);
        allItems == removeItem(itemByID, allItems);
        displayinventory(allItems);
      }
      //button id: updateItem to update the quantity of an item based on its id
      if (button.id === "updateItem") {
        const itemByID = searchbyID(allItems);
        allItems == updateQuantity(itemByID, allItems);
        displayinventory(allItems);
      }
      //button id: searchItemByName to search for item by its name :
      if (button.id === "searchItemByName") {
        const itemByName = searchbyName(allItems);
        displayItem(itemByName);
        displayinventory(allItems);
      }
      //button id: showRestock to show items with low quantities :
      if (button.id === "showRestock") {
        const itemsToRestock = itemToRestock(allItems);
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
        const summuries = summary(allItems);
        //displayinventory(allItems);
      }
    });
  }
});

//interface for the item:
interface item {
  id: Number;
  name: String;
  price: Number;
  quantity: Number;
}

//array for the inventory
const allItems: item[] = [
  {
    id: 5543,
    name: "Teddy Bear",
    price: 15,
    quantity: 23,
  },
  {
    id: 2334,
    name: "Barbie Doll",
    price: 17,
    quantity: 53,
  },
  {
    id: 1234,
    name: "Action Figure",
    price: 10,
    quantity: 12,
  },
  {
    id: 1911,
    name: "Water Gun",
    price: 7,
    quantity: 9,
  },
];
//takes assigns the html list element to the scrip
const itemListElement = document.getElementById("itemList");
//writes all the items on screen 
allItems.forEach(item => {
  const itemElement = document.createElement("li");
  itemElement.textContent = `ID:${item.id} - Name: ${item.name} - Price: $${item.price} - In stock : ${item.quantity}`;
  itemListElement?.appendChild(itemElement);
});


//functions for adding an item into the inventory :

//asks for an item from the user
function inputNewItem(items: item[]): item | null {
  //calls id randomizer function
  const _id = giveRandomId(items);

  //asks user for name
  const _name = String(prompt("Give new item name"));
  if (_name.length < 2 || _name.length > 20||_name==="null") {
    alert("the name you choose is too long/short");
    return null;
  }
  //if name is ok asks user for price
  const _price = Number(prompt("Give new item price"));
  if (Number.isNaN(_price) || _price <= 0) {
    alert("Ilegal price!");
    return null;
  }
  //if price is ok asks user for quantity
  const _quntity = Number(prompt("Give new item quantity"));
  if (!Number.isInteger(_quntity) || _quntity <= 0) {
    alert("quantity needs to be a full number above 0!");
    return null;
  }
  //if all is ok returns the user item
  return { id: _id, name: _name, price: _price, quantity: _quntity };

  

}

//give a random id to the item
function giveRandomId(items: item[]): number {
  const randomID = Math.floor(1000 + Math.random() * 9000);
  const checkID = Boolean(items.find((item) => item.id == randomID));
  if (checkID) {
    return giveRandomId(items);
  } else return randomID;
}

//adds the item to the inventory
function addItem(item: item | null, allItems: item[]): item[] {
  if (item != null) {
    allItems.push(item);
    alert(
      `new item added! Id: ${item.id} name: ${item.name} price: ${item.price}$ quantity: ${item.quantity}`
    );
  } else {
    alert(`no new item added`);
  }
  return allItems;

  //return allItems;
}

//search functions:

//search by id
function searchbyID(item: item[]): item | null {
  const itemID = Number(prompt("Write the ID of the item"));
  const itemSlected = item.find((item) => item.id == itemID);
  if (itemSlected) {
    return itemSlected;
  } else return null;
}

//search by name
function searchbyName(item: item[], hasName?: string | null): item | null {
  const itemName = hasName
    ? hasName
    : String(prompt("Write the NAME of the item"));

  const itemSlected = item.find(
    (item) => item.name.toLowerCase() === itemName.toLowerCase()
  );
  if (itemSlected) {
    return itemSlected;
  } else return null;
}

//remove item function:
function removeItem(itemToRemove: item | null, itemCollection: item[]): item[] {
  if (itemToRemove != null) {
    const index = itemCollection.findIndex(
      (item) => item.id === itemToRemove.id
    );
    if (index !== -1) {
      itemCollection.splice(index, 1);
    }
    alert(`${itemToRemove.name} was removed successfully `);
    return itemCollection;
  } else {
    alert(`item wasnt found :/`);
    return itemCollection;
  }
}

//update item quantity by id function:
function updateQuantity(item: item | null, itemCollection: item[]): item[] {
  if (item != null) {
    const newQuantity = Number(
      prompt(`write new quantity for item: ${item.name}`)
    );
    if (newQuantity === null || !newQuantity || newQuantity < 0) {
      alert("quantity as a number!");
      return itemCollection;
    } else {
      item.quantity = newQuantity;
      return itemCollection;
    }
  } else {
    alert("this id number doesnt exist buddy!");
    return itemCollection;
  }
}

//items to restock function:
function itemToRestock(item: item[]): item[] {
  const lowNum: Number = 5;
  const closeToOutItems = item.filter((item) => item.quantity < lowNum);
  return closeToOutItems;
}

//calculate the sum cost/worth of inventory function:
function calcInvWorth(items: item[]): number {
  let sumAmmount = 0;
  items.forEach((item) => {
    if (typeof item.quantity === "number" && typeof item.price === "number") {
      sumAmmount += item.quantity * item.price;
    }
  });

  return sumAmmount;
}

//display functions

//displays selected item in the console
function displayItem(item: item | null) {
  if (item != null)
    alert(
      `item id: ${item.id} name: ${item.name} costs: ${item.price}$ each. amount in stock: ${item.quantity}`
    );
  else alert(`no such item in the system`);
}

//displays inventory in the console and calculates the sum cost
function displayinventory(item: item[]) {
  item.forEach((item) => {
    console.log(
      `id:${item.id} name:${item.name}
      Costs ${item.price}$ 
    amount in stock:${item.quantity}`
    );
  });
  const amountWorth = calcInvWorth(item);
  
  console.log(`stock worth of : ${amountWorth}$`);
// clear existing items on html page
if(itemListElement)
  itemListElement.innerHTML = ""; 
  //display items on html page:
  allItems.forEach(item => {
    const itemElement = document.createElement("li");
    itemElement.textContent = `ID:${item.id} - Name: ${item.name} - Price: $${item.price} - In stock : ${item.quantity}`;
    itemListElement?.appendChild(itemElement);
  });
}

//switch two items position in the arrray function
function switchItems(item: item[]) {
  //set first item by calling search by name
  const _firstItem = searchbyName(item);
  if (_firstItem === null) {
    alert("no item");
    return item;
  }
  //set second item by calling search by name again
  const _secondItem = searchbyName(item);
  if (_secondItem === null) {
    alert("no item");
    return item;
  }

  // finds the index of the first item
  const firstIndex = item.findIndex((item) => item.id === _firstItem.id);

  // finds the index of the second item
  const secondIndex = item.findIndex((item) => item.id === _secondItem.id);

  if (firstIndex !== -1 && secondIndex !== -1) {
    // swaps the items
    const temp = item[firstIndex];
    item[firstIndex] = item[secondIndex];
    item[secondIndex] = temp;
  } else {
    alert("One or both items not found in the array.");
  }
  alert(
    `succsussfully switched between ${_firstItem.name} and  ${_secondItem.name}`
  );
  return item;
}

//sort items by price function
function sort(item: item[]): item[] {
  item.sort((a, b) => Number(a.price) - Number(b.price));
  return item;
}

//calculate the amount of all the items not type function
function calculatAllItems(item: item[]): Number {
  let sumAmmount = 0;
  item.forEach((item) => {
    if (typeof item.quantity === "number") {
      sumAmmount += item.quantity;
    }
  });
  return sumAmmount;
}

//summary function
function summary(item: item[]) {
  const _itemAmountSum = item.length;
  const sumAmmount = Number(calculatAllItems(item));
  const sumPrice = calcInvWorth(item);
  const _avrgPrice = sumPrice / sumAmmount;

  const cheapestItem = item.sort(
    (a, b) => Number(a.price) - Number(b.price)
  )[0];
  const mostExpensiveItem = item.sort(
    (a, b) => Number(b.price) - Number(a.price)
  )[0];

  console.log(`the are ${_itemAmountSum} types of items and overall ${sumAmmount} items
  in the inventory average price ${_avrgPrice.toFixed(1)}$ 
  the most expensive item is : ${mostExpensiveItem.name} it costs : ${
    mostExpensiveItem.price
  }$
   and the cheapest is: ${cheapestItem.name} it costs : ${
    cheapestItem.price
  }$ `);
  if(itemListElement)
    itemListElement.innerHTML = ""; 
  const itemElement = document.createElement("div");
    itemElement.textContent = `the are ${_itemAmountSum} types of items and overall ${sumAmmount} items
  in the inventory average price is ${_avrgPrice.toFixed(1)}$ 
  the most expensive item is : ${mostExpensiveItem.name} it costs : ${
    mostExpensiveItem.price
  }$
   and the cheapest is: ${cheapestItem.name} it costs : ${
    cheapestItem.price
  }$ `;
    itemListElement?.appendChild(itemElement);
}
