
//creating interface
interface Item {
    id: number; 
    name: string; 
    price: number; 
    quantity: number; 
}

//creating inventory of items of array
let inventory: Item [] = [
    {id: 1, name: "laptop", quantity: 10, price: 1200},
    {id: 2, name: "Mouse", quantity: 50, price: 25},
    {id: 3, name: "Keyboard", quantity: 30, price: 45},
    {id: 4, name: "Monitor", quantity: 15, price: 300},

];

//creating a function to add a new item to the inventory 
function addItemToInventory (newItem: Item) {
    inventory.push(newItem); 
}

//creating a new item to the inventory
const newItem: Item = {id: 5, name: "printer", quantity: 20, price: 150}; 

//adding the new item to the inventory 
addItemToInventory(newItem);

//remove item from the inventory by id
function removeItemById (id:number) {
    inventory = inventory.filter (item => item.id !==id); 
}

//Removing the item by id
removeItemById(3);

//creating a function to update the quantity of item with id
function updateItemQuantityById (id: number, newQuantity: number) {
    const item = inventory.find (item => item.id === id);
    if (item) {
        item.quantity = newQuantity; 
    } else {
        //throwing a error message if the id not found
        console.error(`Item with id ${id} not found.`);

    }
}

//updating the quantity of the item with id 2 
updateItemQuantityById(2, 60);

//creating a function to find item by name 
function findItemByName(name:string): Item | undefined {
    return inventory.find (item => item.name ===name); 
}

const item = findItemByName("Mouse"); 
if (item) {
    console.log ("item found:", item);

} else {
    console.log("item not found");
}

//calculating the total value of the inventory 

//creating a function to calculate the total value of the inventory 
function calculateTotalInventoryValue(): number {
    return inventory.reduce((total, item) => total + (item.quantity * item.price), 0);
}

//calling the function to work
const totalValue = calculateTotalInventoryValue(); 
console.log ("total inventory value:", totalValue); 

//creating a function of all items with quantity below a specified threshold 
function listItemsBelowThreshold (threshold: number):Item [] {
    return inventory.filter (item => item.quantity < threshold);
}

//calling the function to work
const itemsBelowThreshold = listItemsBelowThreshold(20); 
//rendering the resulst to the console
console.log ("Items with quantity below threshold:", itemsBelowThreshold);

//creating function to swap items in the inventory 
function swapItems(inventory: Item[], index1: number, index2: number): void {
    [inventory[index1], inventory[index2]] = [inventory[index2], inventory[index1]];
}

//calling the function to swap the items
swapItems (inventory, 0,1); 
console.log(inventory);

//creating a function to sort the inventory by up price
function sortInventoryByPriceAscending(): Item[] {
    return inventory.sort((a, b) => a.price - b.price);
  }
  

//creating a function to sort the inventory by down price
function sortInventoryByPriceDescending(): Item[] {
    return inventory.sort((a, b) => b.price - a.price);
  }

  console.log("Inventory sorted by price (ascending):", sortInventoryByPriceAscending());
  console.log("Inventory sorted by price (descending):", sortInventoryByPriceDescending());


//creating a function that returns a summary object containing 
function getInventorySummary() {
    const totalItems = inventory.length;
  
    const averagePrice = inventory.reduce((acc, item) => acc + item.price, 0) / totalItems;
  
    const mostExpensiveItem = inventory.reduce((prev, current) => (prev.price > current.price ? prev : current));
  
    const leastExpensiveItem = inventory.reduce((prev, current) => (prev.price < current.price ? prev : current));
  
    return {
      totalItems,
      averagePrice,
      mostExpensiveItem,
      leastExpensiveItem,
    };
  }

  const summary = getInventorySummary(); 
  console.log("inventory Summary:", summary);
  

//rendering to the console
console.log(inventory);


