interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const item1: Item = {
  id: 12345,
  name: "Xbox",
  price: 2500,
  quantity: 10,
};

const Inventory: Item[] = [
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
function removeById(id: number) {
  const index = Inventory.findIndex((item) => item.id == id);
  console.log(index);
  Inventory.splice(index, 1);
} //more way downPage
removeById(33333);

// Update the quantity of an item by id
function changeQuan(id: number, wantQuantity: number) {
  const index = Inventory.findIndex((item) => item.id == id);
  Inventory[index].quantity = wantQuantity;
}
changeQuan(66666, 5);

// d. Find an item by name (case-insensitive)
function findByName(name: string): { item?: Item | undefined; error: string } {
  const x: string = name.toLowerCase();
  const item: Item | undefined = Inventory.find((item) => item.name == x);
  if (item == undefined) return { error: ` not found!` };
  return { item: item, error: ` found!` };
}
const y = findByName("PS");
// console.log(y.item?.name+y.error);

function culcValueItem(item: Item): number {
  const value = item.price * item.quantity;
  return value;
}

//  Calculate the total value of the inventory
function culcArray(o: Item[]): number {
  const sum = o.reduce((accumulator, item) => {
    return accumulator + culcValueItem(item);
  }, 0);
  return sum;
}
console.log(culcArray(Inventory));

// List all items with quantity below a specified threshold
function Stock(threshold: number, o: Item[]): Item[] {
  const stock: Item[] = o.filter((item) => item.quantity < threshold);
  return stock;
}
console.log(Stock(5, Inventory));

// Implement a function to sort the inventory by price (ascending and descending).
function sortByPriceLToH(o: Item[]) {
  o.sort((item1, item2) => item1.price - item2.price);
}

function sortByPriceHToL(o: Item[]) {
  o.sort((item1, item2) => item2.price - item1.price);
}

// Create a function that returns a summary object containing:
//    - Total number of items
//    - Average price of items
//    - Most expensive item
//    - Least expensive item
interface Summary {
  total: number;
  average: number;
  mostExpensive: Item;
  leastExpensive: Item;
}

function summary(o: Item[]): Summary {
  const total: number = o.length;

  const average: number = culcArray(o) / total;

  sortByPriceLToH(o);
  const mostExpensive: Item = o.at(-1);

  const leastExpensive: Item = o.at(-o.length);
  const summary: Summary = {
    total: total,
    average: average,
    mostExpensive: mostExpensive,
    leastExpensive: leastExpensive,
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
