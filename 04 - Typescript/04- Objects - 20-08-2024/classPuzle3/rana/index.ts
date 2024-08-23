interface User {
  title: string;
  author: string;
  publicationYear: number;
}

function PrintBookInfo(): User {
  try {
    const title:string = prompt("pls enter the book title");
    const author:string = prompt("pls enter the book author ");
    const publicationYear = Number(prompt("pls enter the book publication year"));

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
        publicationYear:Number,
    }
  }
}

const user:User = PrintBookInfo();

function bookDetails(user: User) {
    document.write(`The book title ${user.title}, the book author ${user.author} ,the book publication year  ${user.publicationYear}`);
}

bookDetails(user);