// Exercise 2: Books and Authors

interface Book {
  id: number;
  title: string;
  publishYear: number;
}

interface Author {
  id: number;
  name: string;
  birthYear: number;
}

interface BookAuthor {
  bookId: number;
  authorId: number;
}

// TODO: Implement a function getBooksOfAuthor that returns all books written by a specific author
// Function signature: getBooksOfAuthor(authorId: number, books: Book[], bookAuthors: BookAuthor[]): Book[]

// list of books
const defaultBooks: Book[] = [
  { id: 1, title: "The Great Adventure", publishYear: 1998 },
  { id: 2, title: "Mystery of the Mountains", publishYear: 2000 },
  { id: 3, title: "Journey Beyond the Sea", publishYear: 2005 },
  { id: 4, title: "Tales of the Forgotten", publishYear: 2010 },
  { id: 5, title: "The Future is Now", publishYear: 2015 },
  { id: 6, title: "Chronicles of the Past", publishYear: 2018 },
  { id: 7, title: "Wisdom of the Ages", publishYear: 2020 },
  { id: 8, title: "The Science of Tomorrow", publishYear: 2021 },
  { id: 9, title: "Legends Reborn", publishYear: 2022 },
  { id: 10, title: "Echoes of Eternity", publishYear: 2023 }
];

// list of authors
const defaultAuthors: Author[] = [
  { id: 1, name: "John Smith", birthYear: 1960 },
  { id: 2, name: "Jane Doe", birthYear: 1970 },
  { id: 3, name: "Robert Brown", birthYear: 1980 },
  { id: 4, name: "Emily White", birthYear: 1990 },
  { id: 5, name: "Michael Green", birthYear: 1985 },
  { id: 6, name: "Laura Black", birthYear: 1995 },
  
];

// array of links between books and authors by their IDs
const defaultBookAuthors: BookAuthor[] = [
  { bookId: 1, authorId: 1 },
  { bookId: 2, authorId: 1 },
  { bookId: 3, authorId: 2 },
  { bookId: 4, authorId: 2 },
  { bookId: 5, authorId: 3 },
  { bookId: 6, authorId: 3 },
  { bookId: 7, authorId: 4 },
  { bookId: 8, authorId: 4 },
  { bookId: 9, authorId: 5 },
  { bookId: 10, authorId: 5 }
];

// books of the author by his IDs
function getBooksOfAuthor(
  authorId: number,
  books: Book[] = defaultBooks,
  bookAuthors: BookAuthor[] = defaultBookAuthors
): Book[] {
  try {
    // get all book IDs by author ID
    const bookIdsByAuthor = bookAuthors
      .filter((ba) => ba.authorId === authorId)
      .map((ba) => ba.bookId);

    // if no books found for author ID - throw an error
    if (bookIdsByAuthor.length === 0) {
      throw new Error(`No books found for author with ID ${authorId}`);
    }

    // return all books by author ID
    return books.filter((book) => bookIdsByAuthor.includes(book.id));
  } catch (error) {
    // log error message
    console.error(error.message);
    return []; // return empty array if error occurred
  }
}
// Test cases
console.log(getBooksOfAuthor(1));  
console.log(getBooksOfAuthor(2));
console.log(getBooksOfAuthor(3));
console.log(getBooksOfAuthor(4));

// Function for print books of author

function printAuthorBooks(authorId: number): void {
  try {
    // find author by his ID
    const author = defaultAuthors.find((author) => author.id === authorId);

    // if author not found - throw an error
    if (!author) {
      throw new Error(`Author with ID ${authorId} not found.`);
    }

    // get all books of author
    const booksOfAuthor = getBooksOfAuthor(authorId);

    // if no books found for author - throw an error
    if (booksOfAuthor.length === 0) {
      throw new Error(`Author with ID ${authorId} has not written any books.`);
    }

    // print author name and list of his books
    console.log(`${author.name} (author ID: ${authorId}) has written the following books:`);
    booksOfAuthor.forEach((book) => {
      console.log(`- ${book.title} (ID: ${book.id})`);
    });
  } catch (error) {
    // log error message
    console.error(error.message);
  }
}

// Test cases

printAuthorBooks(1);
printAuthorBooks(2);
printAuthorBooks(6);
printAuthorBooks(25);
