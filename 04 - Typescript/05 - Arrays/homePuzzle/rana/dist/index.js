/*
//## Exercise 1-
// 1. Create a `Book` object type with these properties-
interface Book {
  title: string;
  author: string;
  year: number;
}

// 2. Create an array of `Book` objects to store your book collection-
const bookCollection:Book[] = [
  {
    title: "Good Omens",
    author: "Neil Gaiman",
    year: 1990,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
  },
  {
    title: "Bossypants",
    author: "Tina Fey",
    year: 2011,
  },
];

//3. Implement the following functions: a. Add a new book to the collection-

bookCollection.push({
  title: "The Road",
  author: "Cormac McCarthy",
  year: 2006,
});
console.log(bookCollection);

// b. Display all books in the collection-
function displayAllBooks(): Book[] {
  bookCollection.forEach((book) =>console.log(`${book.title} written by ${book.author} in(${book.year})`));
  return bookCollection;
}
displayAllBooks();
// c. Find a book by its title-
function findBookByTitle(title: string): Book | undefined {
    return bookCollection.find(book => book.title.toLowerCase() === title.toLowerCase());
  };
  const book = findBookByTitle("The Hitchhiker's Guide to the Galaxy");
  if (book) {
    console.log(`Found book: "${book.title}" by ${book.author}`);
  } else {
    console.log("Book not found");
  }

// 4. Use an array method to filter books published after a certain year-
function filterBooksByYear(year: number): Book[] {
    return bookCollection.filter(book => book.year > year);
  }
  const booksAfter2000 = filterBooksByYear(2000);
console.log("Books published after 2000:", booksAfter2000);

const booksAfter1990 = filterBooksByYear(1990);
console.log("Books published after 1990:", booksAfter1990);

// 5. Create a function that returns the newest book in the collection-
function getNewestBook(bookCollection: Book[]): Book | undefined {
    return bookCollection.sort((a, b) => b.year - a.year)[0];
  }

// 6. Practice using a forEach to display each book's information-

bookCollection.forEach((book) => {
    console.log(`The book "${book.title}" was written by ${book.author} in ${book.year}.`);
  });
*/
//2. Create an array of `Item` objects to represent the inventory.
var items = [
    {
        id: 4356789,
        name: "sebastian",
        price: 345,
        quantity: 67
    },
    {
        id: 435098765436789,
        name: "catherine",
        price: 890,
        quantity: 50
    },
    {
        id: 102928374,
        name: "sabrina",
        price: 768,
        quantity: 128
    },
    {
        id: 98765432,
        name: "steven",
        price: 9876,
        quantity: 7
    },
    {
        id: 34567898,
        name: "freddie",
        price: 101092,
        quantity: 1
    },
];
//3. Implement the following functions using array methods:
//a. Add a new item to the inventory
items.push({
    id: 8194356789,
    name: "stormi",
    price: 1000,
    quantity: 9
});
console.log(items);
//b. Remove an item from the inventory by id
var newArray = items.filter(function (items) { return items.id != 435098765436789; });
console.log(newArray);
//c. Update the quantity of an item by id
var newQuantityItem = items.find(function (items) { return items.id === 34567898; });
if (newQuantityItem) {
    newQuantityItem.quantity = 7;
}
console.log(items);
//d. Find an item by name (case-insensitive)
var findItem = items.find(function (items) { return items.name === "stormi"; });
console.log(findItem);
//e. Calculate the total value of the inventory
function summary(items) {
    var result = items.reduce(function (acc, items) { return acc + items.quantity * items.price; }, 0);
    console.log(result);
}
summary(items);
//f. List all items with quantity below a specified threshold
var itemsUnder10 = items.filter(function (items) { return items.quantity < 50; });
console.log(itemsUnder10);
// 4. Use array destructuring to swap the positions of two items in the inventory.
items[2] = items.splice(0, 0, items[2])[2];
console.log(items);
// 5. Implement a function to sort the inventory by price (ascending and descending).
var sort = items.sort(function (a, b) { return a.price - b.price; });
console.log(items);
//6. Create a function that returns a summary object containing:
function itemNumber(items) {
    var itemNumber = items.length;
    console.log(itemNumber);
    return itemNumber;
}
itemNumber(items);
function mostExpensive(items) {
    var expensive = items.sort(function (a, b) { return a.price - b.price; });
    var mostExpensive = items[items.length - 2];
    console.log(expensive);
    console.log(mostExpensive);
    return mostExpensive;
}
mostExpensive(items);
function leastExpensive(items) {
    var expensive = items.sort(function (a, b) { return a.price - b.price; });
    var leastExpensive = items[0];
    console.log(leastExpensive);
    return leastExpensive;
}
leastExpensive(items);
function average(items) {
    var total = items.reduce(function (acc, items) { return acc + items.price; }, 0);
    var average = total / items.length;
    console.log(average);
    return average;
}
average(items);
