//## Exercise 1-
//1. Create a `Book` object type with these properties-
interface Book {
  title: string;
  author: string;
  year: number;
}
//2. Create an array of `Book` objects to store your book collection-
const bookCollection: Book[] = [ 
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
  },];

//3. Implement the following functions:
//a. Add a new book to the collection-
function addBook(newBook: Book): Book[] {
    bookCollection.push(newBook);
    console.log(`Added: ${newBook.title} by ${newBook.author} (${newBook.year})`);
    return bookCollection;
}

const newBook: Book = {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
};

const updatedCollection = addBook(newBook);
console.log(updatedCollection);

//b. Display all books in the collection-




