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

//functions for adding an item into the inventory :

//asks for an item from the user
function inputNewItem(items: item[]): item {
  const _id = giveRandomId(items);
  const _name = String(prompt("Give new item name"));
  const _price = Number(prompt("Give new item price"));
  const _quntity = Number(prompt("Give new item quantity"));
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

//adds the item to the inventory if all prematers are right
function addItem(item: item, allItems: item[]): item[] {
  const minNum: Number = 0;
  if (item.name.length < 2 || item.name.length > 20) {
    alert("the name you choose is too long/short");
  } else if (
    item.price === null ||
    item.price == undefined ||
    item.price <= minNum
  ) {
    alert("Ilegal price!");
  } else if (!Number.isInteger(item.quantity) || item.quantity <= minNum) {
    alert("quantity needs to be a full number above 0!");
  } else {
    allItems.push(item);
    alert(
      `new item added! Id: ${item.id} name: ${item.name} price: ${item.price}$ quantity: ${item.quantity}`
    );
  }
  return allItems;
}

//search functions:

//search by id
function searchbyID(item: item[]): item | null {
  const itemID = Number(prompt("Write the id of the item"));
  const itemSlected = item.find((item) => item.id == itemID);
  if (itemSlected) {
    return itemSlected;
  } else return null;
}

//search by name
function searchbyName(item: item[]): item | null {
  const itemName = String(prompt("Write the id of the item"));
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
    return itemCollection;
  } else return itemCollection;
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
}
