
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
  