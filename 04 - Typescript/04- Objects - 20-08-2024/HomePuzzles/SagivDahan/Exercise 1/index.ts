// ### 1. Book Information
// Create an interface for a Book with properties: title, author, and publicationYear.
//  Write a function that takes a Book object and returns a formatted string with the book's information.

interface Book{
    title: string,
    author: string,
    publicationYear: number
}

function getBookInformation(): Book {
    const title = prompt("What is the book title?");
    const author = prompt("Who is the book author?");
    const publicationYearString = prompt("When was the book published?");

    if (title === null){
        console.error("you didnt wrote the book title.");
    }

    if (author === null){
        console.error("you didnt wrote who is the book author")
    }

    if(publicationYearString === null){
        console.error("you didnt wrote the publication year of the book.")
    }

    const publicationYear = parseInt(publicationYearString as string, 10);
    return { title: title as string, author: author as string, publicationYear };

}

function formatBookInfo(book:Book){
    return `The title of the book is: ${book.title}, The author of the book is: ${book.author}, The publication year of the book is: ${book.publicationYear}`
}

const myBook = getBookInformation();
console.log(formatBookInfo(myBook));
