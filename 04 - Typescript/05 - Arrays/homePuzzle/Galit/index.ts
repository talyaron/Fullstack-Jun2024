// ## Exercise 1: Simple Book Collection (Beginner-Friendly)

// Let's create a basic program to manage a small collection of books. This exercise will introduce you to TypeScript fundamentals, working with arrays, and using simple objects.

// ### Requirements:

// 1. Create a `Book` object type with these properties:
//    - title (string)
//    - author (string)
//    - year (number)

// 2. Create an array of `Book` objects to store your book collection.

// 3. Implement the following functions:
//    a. Add a new book to the collection
//    b. Display all books in the collection
//    c. Find a book by its title

// 4. Use an array method to filter books published after a certain year.

// 5. Create a function that returns the newest book in the collection.

// 6. Practice using a forEach to display each book's information.

// interface Book {
//     title: string;
//     author: string;
//     year: number;
//   }
  
//   const books: Book[] = [
//     {
//       title: "home",
//       author: "anthuan",
//       year: 1888,
//     },
//     {
//       title: "full",
//       author: "tal",
//       year: 1999,
//     },
//     {
//       title: "stack",
//       author: "yaron",
//       year: 1997,
//     },
//   ];
//   // Add a new book to the collection
  
//   books.push( {
//       title: "class",
//       author: "ant",
//       year: 2000,
//     })
//   console.log(books);
  
//   // Find a book by its title
//   const findBook:Book[]=books.filter(books=>books.title==="stack");
//   console.log(findBook);
  
//   // 4. Use an array method to filter books published after a certain year.
  
//   const publishedYear:Book[]=books.filter(books=>books.year>1997);
//   console.log(publishedYear);
//   // 5. Create a function that returns the newest book in the collection.
  
//   const newBook:Book|undefined = books.pop();
//   console.log(newBook);
  
//   // 6. Practice using a forEach to display each book's information.
  
//   books.forEach(writeBook)
  
//   function writeBook(books:Book){console.log(`the book ${books.title} was written by ${books.author} in ${books.year}`)}
  
//   ## Exercise 2: Inventory Management System (Advanced)

// Create a TypeScript program for a simple inventory management system. This exercise covers arrays, array methods, objects, and more advanced TypeScript concepts.

// ### Requirements:

// 1. Define an interface for an `Item` object with properties:
//    - id (number)
//    - name (string)
//    - price (number)
//    - quantity (number)


interface Item {
    id: number,
    name:string,
    price: number,
    quantity: number
}

// 2. Create an array of `Item` objects to represent the inventory.

const Inventory: Item[] = [
    { id: 1, name: "Laptop", price: 1200, quantity: 10 },
    { id: 2, name: "Smartphone", price: 800, quantity: 15 },
    { id: 3, name: "Headphones", price: 150, quantity: 30 }
];
console.log("original items:" , Inventory);

// 3. Implement the following functions using array methods:
//    a. Add a new item to the inventory

Inventory.push ({
    id: 4,
    name: "Tablet",
    price: 989,
    quantity: 26
})
console.log("added new item:", Inventory);


//    b. Remove an item from the inventory by id

const removeItemById = (inventory: Item[], id: 3): Item[] => {
    return inventory.filter(item => item.id !== id);
}

const updatedInventory = removeItemById(Inventory, 3);
console.log("The updated inventory after removing is:", updatedInventory);

//    c. Update the quantity of an item by id

const updateItemQuantityById = (inventory: Item[], id: number, newQuantity: number): Item[] => {
    return inventory.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
    );
}

const updatedQuantityInventory = updateItemQuantityById(Inventory, 2, 20);

console.log("The updated quantity inventory is:", updatedQuantityInventory);


//    d. Find an item by name (case-insensitive)

const FindItemByName = (Inventory: Item[], name: string): Item| undefined  => {
return Inventory.find (item => item => item.name.toLowerCase() === name.toLowerCase());
}
const foundItem = FindItemByName(Inventory, "laptop");

if (foundItem) {
    console.log("the found item is:", foundItem);
} else {
    console.log("Item not found");
}
//    e. Calculate the total value of the inventory

const calculateTotalInventoryValue = (Inventory: Item[]): number => {
    return Inventory.reduce((total, item) => total + item.price * item.quantity, 0);
}

const totalValue = calculateTotalInventoryValue(Inventory);

console.log(`Total inventory value: $${totalValue}`);

//    f. List all items with quantity below a specified threshold

const quantityBelow:Item[]=Inventory.filter(Inventory=>Inventory.quantity<20);
  console.log("the items with quantity below 20 are:", quantityBelow);

// 4. Use array destructuring to swap the positions of two items in the inventory.

const swapPositionsById = (Inventory: Item[], id1: number, id2: number): Item[] => {
    const index1 = Inventory.findIndex(item => item.id === id1);
    const index2 = Inventory.findIndex(item => item.id === id2);

    if (index1 === -1 || index2 === -1) {
        console.log('One or both items not found');
        return Inventory;
    }

    const newInventory = [...Inventory];
    [newInventory[index1], newInventory[index2]] = [newInventory[index2], newInventory[index1]];

    return newInventory;
}

const updatedSwapInventory = swapPositionsById(Inventory, 1, 3);

console.log("updated Swap Inventory:", updatedSwapInventory);



// 5. Implement a function to sort the inventory by price (ascending and descending).

const sortByPriceAscending = (Inventory: Item[]): Item[] => {
    return Inventory.sort((a, b) => a.price - b.price);
}

const sortedAscendingInventory = sortByPriceAscending(Inventory);
console.log("Ascending:", sortedAscendingInventory);

// Descending order
const sortByPriceDescending = (Inventory: Item[]): Item[] => {
    return Inventory.sort((a, b) => b.price - a.price);
}


const sortedDescendingInventory = sortByPriceDescending(Inventory);
console.log("Descending:", sortedDescendingInventory);

// 6. Create a function that returns a summary object containing:


  //    - Total number of items

const calculateTotalItems = (Inventory: Item[]): number => {
    return Inventory.reduce((total, item) => total  + item.quantity, 0);
}

const totalItems = calculateTotalItems(Inventory);

console.log(`Total items are: ${totalItems}`);



//    - Average price of items

const calculateAveragePrice = (Inventory: Item[]): number => {
    if (Inventory.length === 0) return 0; 

    const total = Inventory.reduce((acc, item) => acc + item.price, 0);
    return total / Inventory.length;
}


const AveragePrice = calculateAveragePrice(Inventory);

console.log(`Average Price is: ${AveragePrice}`);


//    - Most expensive item

const findMostExpensiveItem = (Inventory: Item[]): Item | null => {
    if (Inventory.length === 0) return null; 

    return Inventory.reduce((mostExpensive, item) => 
        item.price > mostExpensive.price ? item : mostExpensive
    );
}

const mostExpensiveItem = findMostExpensiveItem(Inventory);
console.log("Most Expensive Item:", mostExpensiveItem);


//    - Least expensive item

const findLeastExpensiveItem = (Inventory: Item[]): Item | null => {
    if (Inventory.length === 0) return null; 

    return Inventory.reduce((leastExpensive, item) => 
        item.price < leastExpensive.price ? item : leastExpensive
    );
}


const leastExpensiveItem = findLeastExpensiveItem(Inventory);
console.log("Least Expensive Item:", leastExpensiveItem);