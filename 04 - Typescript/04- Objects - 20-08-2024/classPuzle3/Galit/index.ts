// # Book Information Printer:
// Create a Book interface with attributes for title, author, and publication year. 
// Then write a function print_book_info that takes a Book object as an argument and prints
//  its information.


const Book = {
    title:"",
    author:"",
    publicationYear:"",
}

function GetBookInfo (){
    try {
const title = prompt("enter book tittle");
const author = prompt("enter author");
const publicationYear = Number (prompt("enter publication year"));

const Book = {
    title:title,
    author: author,
    publicationYear:publicationYear,
}
return (Book);

    } catch (error)
{ console.error (error);
}

}

const results = GetBookInfo();
console.log (results)
document.write (`the tittle of the book is ${results?.title}, the author ${results?.author}, the publication year is ${results?.publicationYear}`)



// # Rectangle Area Calculator:
// Define a Rectangle interface with width and height attributes. 
// Write a function calculate_area that takes a Rectangle object and returns its area.

interface Rectangle {
    width: number;
    height: number;
  }
  function getRectangle(): Rectangle {
    try {
      const width = Number(prompt("Enter width"));
  
      const height = Number(prompt("Enter height"));
  
      const rectangle: Rectangle = {
        width: width,
        height: height,
      };
      console.log(rectangle);
      
      return rectangle;
      
    } catch (error) {
      console.error(error);
  
      return {
          width: 0,
          height: 0,
      };
    }
  }
  
  function calculateArea(rectangle: Rectangle): number {
    try {
      return rectangle.width * rectangle.height;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  const rectangle = getRectangle();
  const result: number = calculateArea(rectangle);
  document.write(`the area is ${result}`);
  