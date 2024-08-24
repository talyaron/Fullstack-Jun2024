// # Rectangle Area Calculator:
// Define a Rectangle interface with width and height attributes. Write a function calculate_area that takes a Rectangle object and returns its area.

// interface Rectangle {
//     width: number;
//     height: number;
//   }
//   function calc(rectangle: Rectangle): number {
//     return rectangle.width * rectangle.height;
//   }
//   function getnumbers(): Rectangle {
//     const width =  Number(prompt("width of the rectangle:"));
//     const height = Number(prompt("height of the rectangle:"));
//     return { width, height };
//   }

//   const result = getnumbers();
//   const result2 = calc(result);
//   console.log(`rectangle is: ${result2}`);

//   # Book Information Printer:
// Create a Book interface with attributes for title, author, and publication year. 
// Then write a function print_book_info that takes a Book object as an argument and prints its information.

interface Book{
    title:string,
    author:string,
    publication_year:number,
}

// function renderToScreen(book:Book){
// }

function getDetails(): Book | undefined {
    try{
        const title =  prompt("write the title of the book:");
        const author = prompt("who is the author of the book?:");
        const publication_year = Number(prompt("what is the publiction year?:"));
        if(title === null || author === null || publication_year === null) throw new Error("Invalid input")

        const book:Book= {
            title: title,
            author: author,
            publication_year: publication_year,
        }
        return book;
    } catch(e){
        console.error(e);
        return undefined
    }
}

const book:Book = getDetails();
document.write(`the title of the book is: ${book.title}, the author of the book is: ${book.author}, the publication year of the book is: ${book.publication_year}`)