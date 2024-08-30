interface Book {
    title: string;
    author: string; 
    publicationYear: string;   
}
  
function getBookDetails(): Book {
 try {
    //get the title of the book
    const title =  prompt ("What is the title of the book?");

    //get the author of the book
    const author = prompt ("who is the author of the book?");

    const publicationYear = prompt ("what is the publication year of the book?");

    if (!title || !author || !publicationYear) throw new Error ("Invalid input")

    //return the book object 
    const Book:Book = {
        title: title, 
        author: author, 
        publicationYear: publicationYear, 
    }

    return Book; 
} catch (error) {
    console.error (error)
    return {
        title: "",
        author: "",
        publicationYear: "",
    }
}
    }

    const Book:Book = getBookDetails();

    function renderDetails(Book:Book) {
        document.write(`The Book title is ${Book.title}, and the author of the Book is ${Book.author}, and the publicaiton year of the book is ${Book.publicationYear}`);
    }
    
    renderDetails(Book);


