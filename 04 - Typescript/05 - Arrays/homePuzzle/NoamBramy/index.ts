// ## Exercise 1: Simple Book Collection (Beginner-Friendly)

// 1. Create a `Book` object type with these properties:
//    - title (string)
//    - author (string)
//    - year (number)
interface Book {
  title: string;
  author: string;
  year: number;
}

// 2. Create an array of `Book` objects to store your book collection.
const collection: Book[] = [
  {
    title: "Noam Book",
    author: "Chris",
    year: 1990,
  },
];
console.log(collection);

// a. Add a new book to the collection
collection.push({ title: "Noam Book 2", author: "Chris2", year: 1991 });
collection.push({ title: "Noam Book 3", author: "Chris3", year: 1992 });
collection.push({ title: "Noam Book 4", author: "Chris4", year: 1993 });
collection.push({ title: "Noam Book 5", author: "Chris5", year: 1994 });


// b. Display all books in the collection
collection.forEach((book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
  );
});

// c. Find a book by its title
const foundBook = collection.find((book) => book.title === "Noam Book");
if (foundBook) {
  console.log(
    `Found book: Title: ${foundBook.title}, Author: ${foundBook.author}, Year: ${foundBook.year}`
  );
} else {
  console.log("Book not found");
}

// 4. Use an array method to filter books published after a certain year.
const filterBook = collection.filter((book) => book.year > 1992);
console.log(filterBook);

// 5. Create a function that returns the newest book in the collection.
const newestBook = collection.reduce((latest, book) => {
  if (book.year > latest.year) {
    return book;
  }
  return latest;
});
if (newestBook) {
  console.log(
    `Newest book: Title: ${newestBook.title}, Author: ${newestBook.author}, Year: ${newestBook.year}`
  );
} else {
  console.log("No books in collection");
}

// 6. Practice using a forEach to display each book's information.
collection.forEach((book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
  );
});

// ## Exercise 2: Inventory Management System (Advanced)

// 1. Define an interface for an `Item` object with properties:
//    - id (number)
//    - name (string)
//    - price (number)
//    - quantity (number)
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. Create an array of `Item` objects to represent the inventory.
const inventory: Item[] = [
  { id: 1, name: "Laptop", price: 50, quantity: 10 },
  { id: 2, name: "Mouse", price: 25.5, quantity: 100 },
  { id: 3, name: "Keyboard", price: 75.0, quantity: 50 },
];
console.log(inventory);

// 3. Implement the following functions using array methods:
//    a. Add a new item to the inventory
inventory.push({ id: 4, name: "Monitor", price: 99.0, quantity: 5 });

//    b. Remove an item from the inventory by id
const removeitem = inventory.findIndex((item) => item.id === 3);
if (removeitem !== -1) {
  inventory.splice(removeitem, 1);
}

//    c. Update the quantity of an item by id
const item = inventory.find((item) => item.id === 2);
if (item) {
  item.quantity = 70;
}

//    d. Find an item by name (case-insensitive)
const finditem = inventory.find(
  (item) => item.name.toLowerCase() === "mouse".toLowerCase()
);
if (finditem) {
  console.log(`ID: ${finditem.id}, Name: ${finditem.name}, Price: ${finditem.price}, Quantity: ${finditem.quantity}`);
}

//    e. Calculate the total value of the inventory
const totalValue = inventory.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(totalValue);

//    f. List all items with quantity below a specified threshold
  const listall = inventory.filter(item => item.quantity > 4)
  console.log(listall)

//   4. Use array destructuring to swap the positions of two items in the inventory.
const index1 = 0;
const index2 = 1;
[inventory[index1], inventory[index2]] = [inventory[index2], inventory[index1]];

// 5. Implement a function to sort the inventory by price (ascending and descending).
function sortByPrice(boolean: boolean = true): Item[] {
  return [...inventory].sort((a, b) => boolean ? a.price - b.price : b.price - a.price);
}
console.log(sortByPrice())

// 6. Create a function that returns a summary object containing:

//    - Total number of items
  const totalItems = inventory.length
  console.log(totalItems)

    //    - Average price of items
  const averagePrice = inventory.reduce((total, item) => { return total + (item.price * item.quantity) }, 0) / totalItems;
  console.log(averagePrice)

//    - Most expensive item
  const mostExpensive = inventory.reduce((max, item) => item.price > max.price ? item : max, inventory[0]);
  console.log(mostExpensive)

//    - Least expensive item
const leastExpensive = inventory.reduce((min, item) => item.price < min.price ? item : min, inventory[0]);
console.log(leastExpensive)
