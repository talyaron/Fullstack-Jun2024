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

const books: Book[] = [
  { id: 1, title: "1984", publishYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", publishYear: 1960 },
  { id: 3, title: "The Great Gatsby", publishYear: 1925 },
];

const authors: Author[] = [
  { id: 1, name: "George Orwell", birthYear: 1903 },
  { id: 2, name: "Harper Lee", birthYear: 1926 },
  { id: 3, name: "F. Scott Fitzgerald", birthYear: 1896 },
];

const bookAuthors: BookAuthor[] = [
  { bookId: 1, authorId: 1 }, // "1984" by George Orwell
  { bookId: 2, authorId: 2 }, // "To Kill a Mockingbird" by Harper Lee
  { bookId: 3, authorId: 3 }, // "The Great Gatsby" by F. Scott Fitzgerald
];

const selectedAuth = getBooksOfAuthor(3, books, bookAuthors);

renderToScreen(selectedAuth);

function renderToScreen(selectedAuth: Book[]) {
  const containerElement = document.getElementById("container") as HTMLElement;
  const divElement = document.createElement("div") as HTMLElement;
  containerElement.appendChild(divElement);
  if (selectedAuth.length != 0) {
    containerElement.innerHTML = `here is your book : ${selectedAuth.map(
      (b) => b.title
    )}

    <br>by the author :${selectedAuth.map(
      (b) =>
        authors.find(
          (author) =>
            author.id === bookAuthors.find((ba) => ba.bookId === b.id)!.authorId
        )?.name
    )}`;
  } else {
    containerElement.innerHTML = "no book found";
  }
}
function getBooksOfAuthor(
  authorId: number,
  books: Book[],
  bookAuthors: BookAuthor[]
): Book[] {
  const auth = bookAuthors.filter((ba) => ba.authorId === authorId);

  return books.filter((book) => auth.some((au) => au.bookId === book.id));
}
// TODO: Implement a function getBooksOfAuthor that returns all books written by a specific author
// Function signature: getBooksOfAuthor(authorId: number, books: Book[], bookAuthors: BookAuthor[]): Book[]
