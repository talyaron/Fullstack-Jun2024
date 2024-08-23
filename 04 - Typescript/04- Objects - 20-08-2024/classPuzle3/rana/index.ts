interface User {
  title: string;
  author: string;
  publicationYear: number;
}

function PrintBookInfo(): user {
  try {
    const title = prompt("pls enter the book title");
    const author = prompt("pls enter the book author ");
    const publicationYear = prompt("pls enter the book publication year");

    const user: User = {
      title: title,
      author: author,
      publicationYear: publicationYear,
    };

    return user;
  } 
  catch (error) {
    console.error(error);
    return {
        title: "",
        author: "",
        publicationYear: "",
    }
  }
}

const user:User = PrintBookInfo();

function bookDetails(user: User) {
    document.write(`The book title ${user.title}, the book author ${user.author} ,the book publication year  ${user.publicationYear}`);
}

bookDetails(user);