interface Book{
    title: string;
    author: string;
    year: number;
}

const books1 : Book [] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// Add a new book to the collection
function addBook(libary : Book [],book : Book){
    try{
        if(!book) throw new Error("Invalid INPUT!!!");
        libary.push(book);
    }catch(e){
        console.error(e);
    }
}
const newBook : Book = { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 };
addBook(books1,newBook);
console.log(books1);

//Find a book by its title
function findBookTitle(libary : Book [] , title : string){
    return libary.filter((book) => book.title === title);
}
console.log(findBookTitle(books1,"Moby-Dick"));

//4. Use an array method to filter books published after a certain year.
function filterBookByYear(libary : Book [],year : number){
    return libary.filter((book) => book.year > year);
}
console.log(filterBookByYear(books1,1950));

//Create a function that returns the newest book in the collection.
function newestBook(libary : Book []){
    const bookSortYear = [...libary].sort((a,b) => b.year - a.year);
    return bookSortYear[0];
}
console.log(newestBook(books1));

//Practice using a forEach to display each book's information.
function printBookLibary (libary : Book []){
    libary.forEach((book,index) => document.write(`<br> <b> Book info in index ${index} is : </b>  Title - ${book.title} , Author - ${book.author} , Year - ${book.year}`));
}
printBookLibary(books1)


//Exsercise 2:
//Define an interface for an `Item` object with properties:
interface Item{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Create an array of `Item` objects to represent the inventory.
const items1 : Item [] = [
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
function addItem(listItems : Item [] , newItem : Item){
    listItems.push(newItem);
}
const newItem = {id: 11, name: "Smartwatch", price: 199.99, quantity: 35 };
console.log(addItem(items1,newItem));


//   b. Remove an item from the inventory by id
function removwItem(listItem : Item [], itemId : number){
    const findIndex = listItem.findIndex((item) => item.id === itemId);
    return [...listItem].slice(0,findIndex).concat(listItem.slice(findIndex +1));
}
console.log(removwItem(items1,4));
//   c. Update the quantity of an item by id
function addQuantity (listItem : Item [] , itemId : number, quantity: number){
    const findItem = listItem.findIndex((item) => item.id === itemId);
    listItem[findItem].quantity = quantity;
    return listItem[findItem];
}
console.log(addQuantity(items1,5,5));

//   d. Find an item by name (case-insensitive)
function findItemByName(listItem : Item [], itemName: string){
    return listItem.filter((item) => item.name === itemName);
}
console.log(findItemByName(items1,"Laptop"));

// Calculate the total value of the inventory
function inventorySum(listItem : Item []){
    return listItem.reduce((acc,item,index) => acc + item.price,0);
}
console.log(inventorySum(items1));

//   f. List all items with quantity below a specified threshold
function quantityList(listItem : Item [], min : number){
    return listItem.filter((item) => item.quantity < min);
}
console.log(quantityList(items1,30));

// swap items
function swapItems(listItem : Item [], firstItem : number, secindItem : number){
    let temp: Item;
    let posFirstItem = listItem.findIndex((item) => item.id === firstItem);
    let posSecondtItem = listItem.findIndex((item) => item.id === secindItem);

    temp = listItem[posFirstItem];
    listItem[posFirstItem] = listItem[posSecondtItem];
    listItem[posSecondtItem] = temp;

    return [...listItem];
}

console.log(swapItems(items1, 2,8));

//Implement a function to sort the inventory by price (ascending and descending).
function sortInventory (listItems : Item []){
    const listAsc = [...listItems].sort((a,b) => a.price - b.price);
    const listDes = [...listItems].sort((a,b) => b.price - a.price);
    return {listAsc,listDes};
}
console.log(sortInventory(items1));

//Create a function that returns a summary object containing:- Total number of items- Average price of items- Most expensive item- Least expensive item
function makeNewObject(itemsList : Item []) : {sumItems : number, avgPriceItems: number, expensiveItem : Item, leastItem : Item}{
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
console.log(makeNewObject(items1));

//print inventory

function printInventory(listItem : Item[]){
    listItem.forEach((items,index) => document.write(`<br> The item in index: ${index}, ID: ${items.id} Name: ${items.name} Price: ${items.price} Quantity: ${items.quantity}`));
}
printInventory(items1);