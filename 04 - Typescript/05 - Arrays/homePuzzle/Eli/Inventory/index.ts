const buttons = document.querySelectorAll(".actionButton");

// Loop through each button and add a click event listener
buttons.forEach((button) => {
  if (button instanceof HTMLButtonElement) {
    button.addEventListener("click", () => {
      console.log(`${button.id} clicked!`);
      if (button.id === "addItem") {
        const newitem = addItem(allItems);
        allItems.push(newitem);
        alert(
          `new item added! Id:${newitem.id} name:${newitem.name} price:${newitem.price}$ quantity:${newitem.quantity}`
        );
        allItems.forEach((allItems) => {
          console.log(
            `id:${allItems.id} name:${allItems.name}
             Costs ${allItems.price}$ 
              amount in stock:${allItems.quantity}`
          );
        });
      }
      if (button.id === "removeItem") {
        const itemByID = searchbyID(allItems);
        allItems == removeItem(itemByID, allItems);
        allItems.forEach((allItems) => {
          console.log(
            `id:${allItems.id} name:${allItems.name}
               Costs ${allItems.price}$ 
                amount in stock:${allItems.quantity}`
          );
        });
      }
      if (button.id === "updateItem") {
        const itemByID = searchbyID(allItems);
        allItems == updateQuantity(itemByID, allItems);
        allItems.forEach((allItems) => {
          console.log(
            `id:${allItems.id} name:${allItems.name}
                 Costs ${allItems.price}$ 
                  amount in stock:${allItems.quantity}`
          );
        });
      }
    });
  }
});

interface item {
  id: Number;
  name: String;
  price: Number;
  quantity: Number;
}

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

function addItem(items: item[]): item {
  //const _id = prompt("Give new item Id")
  const _id = giveRandomId(items);
  const _name = String(prompt("Give new item name"));
  const _price = Number(prompt("Give new item price"));
  const _quntity = Number(prompt("Give new item quantity"));
  return { id: _id, name: _name, price: _price, quantity: _quntity };
}
function giveRandomId(items: item[]): number {
  const randomID = Math.floor(1000 + Math.random() * 9000);
  const checkID = Boolean(items.find((item) => item.id == randomID));
  if (checkID) {
    return giveRandomId(items);
  } else return randomID;
}

function searchbyID(item: item[]): item | null {
  const itemID = Number(prompt("Write the id of the item"));
  const itemSlected = item.find((item) => item.id == itemID);
  if (itemSlected) {
    return itemSlected;
  } else return null;
}
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
function updateQuantity(item: item | null, itemCollection: item[]): item[] {
  if (item != null) {
    const newQuantity = Number(prompt(`write new quantity for item:${item.name}`));
    if (newQuantity === null || !newQuantity||newQuantity<0) {
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
