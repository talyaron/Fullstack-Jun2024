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

// This simplified exercise will help beginners get comfortable with:
// - Defining basic types in TypeScript
// - Creating and working with arrays
// - Using simple objects
// - Implementing basic functions
// - Using common array methods like push() and find()
// - Working with loops in TypeScript

// Good luck with your TypeScript practice!

interface Book {
  title: string;
  author: string;
  year: number;
}

function createBookCollection(): string {
  while (true) {
    const collectionName: string =
      prompt(
        "Let's create your new book collection.\nPlease enter the name of your collection:"
      ) || "";

    if (!collectionName.trim()) {
      alert("Please enter a valid collection name.");
    } else {
      console.log(`Collection "${collectionName}" has been created.`);
      return collectionName;
    }
  }
}

function addBook(bookCollection: Book[]): Book[] {
  let title: string;
  let author: string;
  let year: number;

  while (true) {
    title = prompt("Enter the title of the book:") || "";
    if (!title.trim()) {
      alert("Title cannot be empty. Please enter a valid title.");
    } else {
      break;
    }
  }

  while (true) {
    author = prompt("Enter the author of the book:") || "";
    if (!author.trim()) {
      alert("Author cannot be empty. Please enter a valid author.");
    } else {
      break;
    }
  }

  while (true) {
    const yearInput: string = prompt("Enter the year of publication:") || "";
    year = Number(yearInput);
    if (isNaN(year) || year <= 0) {
      alert("Year must be a valid positive number. Please enter a valid year.");
    } else {
      break;
    }
  }

  const book: Book = { title, author, year };
  return [...bookCollection, book];
}

function findBookByTitle(bookCollection: Book[]): Book | undefined {
  try {
    const title: string = prompt("Enter the title of the book to find:") || "";
    if (!title.trim()) throw new Error("Title cannot be empty.");

    const book: Book | undefined = bookCollection.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (!book) {
      console.log(`Book with title "${title}" not found.`);
      return undefined;
    }

    console.log(
      `Found book: ${book.title} by ${book.author}, published in ${book.year}.`
    );
    return book;
  } catch (error) {
    console.error(`Error finding book: ${(error as Error).message}`);
    return undefined;
  }
}

function filterBooksByYear(bookCollection: Book[]): Book[] {
  try {
    const year: number = Number(
      prompt("Enter the year to filter books published after:")
    );
    if (isNaN(year)) throw new Error("Year must be a valid number.");

    const filteredBooks: Book[] = bookCollection.filter(
      (book) => book.year > year
    );

    if (filteredBooks.length === 0) {
      console.log(`No books found published after ${year}.`);
    } else {
      console.log(`Books published after ${year}:`);
      filteredBooks.forEach((book: Book) =>
        console.log(
          `${book.title} by ${book.author}, published in ${book.year}.`
        )
      );
    }

    return filteredBooks;
  } catch (error) {
    console.error(`Error filtering books: ${(error as Error).message}`);
    return [];
  }
}

function getNewestBook(bookCollection: Book[]): Book | undefined {
  try {
    if (bookCollection.length === 0) {
      throw new Error("No books in the collection to find the newest one.");
    }

    let newestBook: Book = bookCollection[0];
    const books: Book[] = bookCollection.slice(1);

    for (const book of books) {
      if (book.year > newestBook.year) {
        newestBook = book;
      }
    }

    console.log(
      `The newest book is "${newestBook.title}" by ${newestBook.author}, published in ${newestBook.year}.`
    );
    return newestBook;
  } catch (error) {
    console.error(`Error getting the newest book: ${(error as Error).message}`);
    return undefined;
  }
}

function displayEachBookInfo(bookCollection: Book[]): void {
  try {
    if (bookCollection.length === 0) {
      throw new Error("No books in the collection to display.");
    }

    bookCollection.forEach((book: Book) => {
      console.log(`${book.author}, ${book.year}, "${book.title}".`);
    });
  } catch (error) {
    console.error(
      `Error displaying each book's information: ${(error as Error).message}`
    );
  }
}

function manageBookCollection(): void {
  const collectionName = createBookCollection();
  let myBookCollection: Book[] = [];

  while (true) {
    const updatedCollection = addBook(myBookCollection);

    if (updatedCollection !== myBookCollection) {
      myBookCollection = updatedCollection;
      console.log("Book added successfully.");
    }

    const addAnother: string =
      prompt("Would you like to add another book? (yes/no):")?.toLowerCase() ||
      "";

    if (addAnother !== "yes") {
      console.log(
        `Collection "${collectionName}" has been created and contains the following books:`
      );
      displayEachBookInfo(myBookCollection);
      break;
    }
  }
}

// Start the book collection management process
manageBookCollection();