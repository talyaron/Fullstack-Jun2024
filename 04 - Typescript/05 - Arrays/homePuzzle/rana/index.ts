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

// 3. Implement the following functions:

// a. Add a new book to the collection-

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
