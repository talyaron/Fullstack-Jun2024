//Q1
type Book = {
  title: string;
  author: string;
  year: number;
};

let bookCollection: Book[] = [];

function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  bookCollection.push(newBook);
}

function displayBooks(): void {
  console.log("book Collection: ");
  bookCollection.forEach((book, index) => {
    console.log(
      `"${index +1}. Title: ${book.title}, Author: ${book.author}, Year: ${book.year} "`
    );
  });
}

function findBookByTitle(title: string): Book | undefined {
  return bookCollection.find((book) => book.title === title);
}

function filterBooksByYear(year: number): Book[] {
  return bookCollection.filter((book) => book.year > year);
}

function getNewestBook(): Book | undefined {
  return bookCollection.reduce((newest, book) => {
    return book.year > newest.year ? book : newest;
  }, bookCollection[0]);
}

function displayBookInfo(): void {
  bookCollection.forEach((book) => {
    console.log(
      `"Title: ${book.title}, Author: ${book.author}, Year: ${book.year} "`);
    });
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);
addBook("1984", "George Orwell", 1949);


displayBooks();


const book = findBookByTitle("1984");
console.log("Found Book:", book);


const recentBooks = filterBooksByYear(1950);
console.log("Books published after 1950:", recentBooks);


const newestBook = getNewestBook();
console.log("Newest Book:", newestBook);


displayBookInfo();



console.log("---------------------------------------------------------------------------")

//  Q2
type Item={
  id:number,
  name:string,
  price:number,
  quantity:number,
}

let inventory:Item[]=[];

//Add a new item to the inventory
function addItem(id:number,name:string,price:number,quantity:number):void{
  const newItem:Item={id,name,price,quantity};
  inventory.push(newItem);
}
//Remove an item from the inventory by id
function removeItem(id:number):void{
  const index = inventory.findIndex(item => item.id === id);
  if(index!== -1){
    inventory.splice(index,1);
  }else{
    console.log(`"item with id ${id} not founded."`);
  }
}
// Update the quantity of an item by id
function updateQuantety(id:number, newQuantety: number):void{
  const item= inventory.find(item => item.id ===id);
  if(item){
    item.quantity=newQuantety;
  }else{
    console.log(`"Item with id :${id} is not defined."`)
  }
}
// Find an item by name (case-insensitive)
function findeByName(name:string): Item | undefined{
  return inventory.find(item => item.name.toLowerCase() === name.toLocaleLowerCase());
}
// Calculate the total value of the inventory
function clacTheTotalValue(): number{
  return inventory.reduce((total,item) => total+ (item.price * item.quantity),0);
}
// List all items with quantity below a specified threshold
function listItemsBelowThreshold (threshold: number):Item[]{
  return inventory.filter(item => item.quantity < threshold);
}
// print all item in the inventory
function printAllItems(): void {
  inventory.forEach(item => {
    console.log(`'ID: ${item.id}, Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}'`);
  });
}

// Use array destructuring to swap the positions of two items in the inventory.
function swapItemsById(id1:Number, id2: number): void{
  const index1= inventory.findIndex(item => item.id == id1);
  const index2= inventory.findIndex(item => item.id == id2);
  
  if (index1 !== -1 && index2 !== -1 ){
    [inventory[index1], inventory[index2]]= [inventory[index2], inventory[index1]];
  }
  else if(index1 === -1 && index2 !== -1 || index1 !== -1 && index2 === -1 ){
    console.log('One of the item that you want to swap is not definde. ');
  }
  else{
    console.log('both of the item that you want to swap are not definded.');
  }
}
//  Implement a function to sort the inventory by price (ascending and descending).
function sortPriceAscending():void{
  inventory.sort((a,b)=>a.price - b.price);
}
function sortPriceDescending():void{
  inventory.sort((a,b)=>b.price - a.price);
}

//  Create a function that returns a summary object containing:
function getInventorySummary(){
  if(inventory.length === 0){
    return {
      totalItems:0,
      avaragePrice:0,
      mostExpensiveItwm: null,
      lessExpensiveItem: null

    };
  }

  const totalItems= inventory.length;

  const totalPrice= inventory.reduce((sum,item) => sum + item.price, 0);
  const avaragePrice= totalPrice /totalItems;

  const mostExpensiveItem= inventory.reduce((max,item) => (item.price > max.price ? item:max ),inventory[0]) ;
  const lessExpensiveItem= inventory.reduce((min,item) => (item.price < min.price ? item:min ),inventory[0]) ;

  return{
      totalItems,
      avaragePrice,
      mostExpensiveItem,
      lessExpensiveItem,
  };
}

addItem(1, 'Item1', 10, 5);
addItem(2, 'Item2', 20, 3);
addItem(3, 'Item3', 30, 7);

console.log('Inventory after adding items:');
printAllItems();

console.log('Total value of the inventory:', clacTheTotalValue());

console.log('Items with quantity below 5:', listItemsBelowThreshold(5));

updateQuantety(1, 10);
console.log('Inventory after updating quantity of Item 1:');
printAllItems();

removeItem(2);
console.log('Inventory after removing Item 2:');
printAllItems();

swapItemsById(1, 3);
console.log('Inventory after swapping items with ID 1 and 3:');
printAllItems();

console.log('Inventory summary:', getInventorySummary());

sortPriceAscending();
console.log('Inventory sorted by price ascending:');
printAllItems();

sortPriceDescending();
console.log('Inventory sorted by price descending:');
printAllItems();