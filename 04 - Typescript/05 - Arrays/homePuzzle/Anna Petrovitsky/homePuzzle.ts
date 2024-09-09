interface Book{
    title: string;
    author: string;
    year: number;
}

const books : Book [] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// Add a new book to the collection
books.push({ title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 });
books.push({ title: "Brave New World", author: "Aldous Huxley", year: 1932 });

//Display all books in the collection
console.log(books);

//Find a book by its title
const findBook = books.find((book) => book.title === "The Great Gatsby");
console.log(findBook);

//4. Use an array method to filter books published after a certain year.
const publicYear = books.filter((book) => book.year > 1925);
console.log(publicYear);

//Create a function that returns the newest book in the collection.
const bookSortYear = books.sort((a,b) => b.year - a.year);
const newestBook1 = bookSortYear[0];
console.log(newestBook);

//Practice using a forEach to display each book's information.

books.forEach((book,index) => document.write(`<br> <b> Book info in index ${index} is : </b>  Title - ${book.title} , Author - ${book.author} , Year - ${book.year}`));


// Exsercise 2:

//Define an interface for an `Item` object with properties:
interface Item{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Create an array of `Item` objects to represent the inventory.
const items : Item [] = [
    { id: 1, name: "Laptop", price: 1200.99, quantity: 10 },
    { id: 2, name: "Smartphone", price: 799.99, quantity: 25 },
    { id: 3, name: "Headphones", price: 199.99, quantity: 50 },
    { id: 4, name: "Keyboard", price: 49.99, quantity: 100 },
    { id: 5, name: "Monitor", price: 299.99, quantity: 15 },
    { id: 6, name: "Mouse", price: 29.99, quantity: 75 },
    { id: 7, name: "External Hard Drive", price: 89.99, quantity: 30 },
    { id: 8, name: "Webcam", price: 59.99, quantity: 40 },
    { id: 9, name: "Printer", price: 149.99, quantity: 20 },
    { id: 10, name: "Tablet", price: 499.99, quantity: 12 },
];



//Add a new item to the inventory

items.push({ id: 11, name: "Smartwatch", price: 199.99, quantity: 35 },
    { id: 12, name: "Router", price: 99.99, quantity: 18 },
    { id: 13, name: "Bluetooth Speaker", price: 59.99, quantity: 45 },
    { id: 14, name: "Portable Charger", price: 29.99, quantity: 60 },
    { id: 15, name: "Digital Camera", price: 899.99, quantity: 8 },
    { id: 16, name: "Gaming Console", price: 499.99, quantity: 22 },
    { id: 17, name: "Projector", price: 399.99, quantity: 10 },
    { id: 18, name: "Wireless Earbuds", price: 149.99, quantity: 50 },
    { id: 19, name: "Fitness Tracker", price: 129.99, quantity: 40 },
    { id: 20, name: "VR Headset", price: 349.99, quantity: 12 });



//print the list item:

items.forEach((items,index) => document.write(`<br> The item in index: ${index}, ID: ${items.id} Name: ${items.name} Price: ${items.price} Quantity: ${items.quantity}`));

//   b. Remove an item from the inventory by id
//const removeID = Number(prompt("Enter item id that you want top remove:"));
//items.reduce((acc,book,index) => {if(index !== findIndex) {acc.push(book);}return acc;},[]);
const findIndex = items.findIndex((book) => book.id === 14);
console.log(findIndex);
const newArray = [...items.slice(0,findIndex),...items.slice(findIndex + 1)];
console.log(newArray);


//   c. Update the quantity of an item by id
const whichItemToItem = items.findIndex((item) => item.id ===5);
items[whichItemToItem].quantity = 8;
console.log(items[whichItemToItem]);
//const updateItem = function(arr : Item [], index : number, newQuantity : number) => {}


//   d. Find an item by name (case-insensitive)
const findName = items.find((item) => item.name === "Mouse");
console.log(findName);

// Calculate the total value of the inventory

const sumInventory = items.reduce((acc,item,index) => acc + item.price,0);
console.log(sumInventory);

//   f. List all items with quantity below a specified threshold
const filteredQuantity = items.filter((item) => item.quantity<30);
filteredQuantity.forEach((item) => document.write(`<br> ID: ${item.id} ,Name: ${item.name} , Price: ${item.price} , Quantity: ${item.quantity}`));



// swap items
const swapID = function swapID(arr : Item [] , firstIDItem : number, secondIDItem : number ){
    let temp : Item;
    let pos1 = arr.findIndex((item) => item.id === firstIDItem);
    let pos2 = arr.findIndex((item) => item.id === secondIDItem);

    temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;

    return [...arr];
}

console.log(swapID(items,2,4));

//Implement a function to sort the inventory by price (ascending and descending).
const sortPriceAsc = [...items.sort((a,b) => a.price - b.price)];
console.log(sortPriceAsc);
const sortPriceDes = items.sort((a,b) => b.price - a.price);
console.log(sortPriceDes);

//Create a function that returns a summary object containing:- Total number of items- Average price of items- Most expensive item- Least expensive item

function makeNewObject1(itemsList : Item []) : {sumItems : number, avgPriceItems: number, expensiveItem : Item, leastItem : Item}{
    const sum = itemsList.reduce((acc,item,index) => acc + item.quantity,0);
    const avgSum = itemsList.reduce((acc,item,index) => acc + item.price,0) / itemsList.length;
    const sorted = itemsList.sort((a,b) => a.price - b.price);
    return {
        sumItems: sum,
        avgPriceItems: avgSum,
        expensiveItem: sorted[sorted.length-1],
        leastItem: sorted[0]
    }
}
console.log(makeNewObject1(items1));