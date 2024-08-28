interface Book {
  title: String;
  author: String;
  year: Number;
}

const bookCollections: Book[] = [
  { title: "Dune", author: "George Orwell", year: 1984 },
  {
    title: "Pinocchio",
    author: "Carlo Collodi",
    year: 1883,
  },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function inputBook(): Book {
  const title: String = String(prompt("Give the book title"));
  const author: String = String(prompt("Give the book author"));
  const year: Number = Number(prompt("Give the book publishing year"));
  return { title, author, year };
}

function printToUser(
  userBook: Book,
  exsistinsystem: Book | undefined,
  collectionBook: Book[]
) {
  if (!exsistinsystem || exsistinsystem.title == "null") {
    collectionBook.push(userBook);

    console.log(`all of our books:`);
    collectionBook.forEach((collectionBook) => {
      console.log(
        ` ${collectionBook.title} by ${collectionBook.author} written in ${collectionBook.year}`
      );
    });

  } else {

    console.log(
      `your book is : ${exsistinsystem.title} by ${exsistinsystem.author} written in ${exsistinsystem.year}`
    );
    console.log(`the rest of our books:`);
    collectionBook.forEach((collectionBook) => {
      console.log(
        ` ${collectionBook.title} by ${collectionBook.author} written in ${collectionBook.year}`
      );
    });
    
  }
}

const userBook = inputBook();
const foundBook = bookCollections.find((Book) => Book.title == userBook.title);
const addOrShowUser = printToUser(userBook, foundBook, bookCollections);
