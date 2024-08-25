// exercise 1- Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.

// interface Book{
// title:string;
// author:string;
// publicationYear:number;
// }

// function bookInfo(): Book{
//     try{
//     const title = prompt("enter a book title");
//     const author = prompt("enter the author");
//     const publicationYear: number = Number(prompt("enter a year the book was published"));

//     const book : Book ={
//         title:title,
//         author:author,
//         publicationYear:publicationYear,
//     }

// console.log(book);
// return book;
// }
// catch (error){
// console.error("An error occurred", error);
// return{
//     title:"",
//     author:"",
//     publicationYear:0,
// }
// }
// }

// const book:Book = bookInfo();
// function bookP(book){
//     document.write(`The book ${book.title}, was written by ${book.author} and published in ${book.publicationYear}`);
// }



//exercise 2 -Circle Area:
interface Circle {
    radius: number;
}

function calculateArea(circle: Circle): number {
    try {
        if (circle.radius < 0) {
            throw new Error("הרדיוס לא יכול להיות שלילי.");
        }

        const area = Math.PI * Math.pow(circle.radius, 2);
        return area;
    } catch (error) {
        console.error("שגיאה בחישוב השטח:", error.message);
        return document.write(`The circle area cannot be negative`);
    }
}

const radiusInput = prompt("הזן את הרדיוס של העיגול:");
const radius = Number(radiusInput);

if (isNaN(radius)) {
    console.error("הרדיוס שהוזן אינו מספר תקין.");
} else {
    const myCircle: Circle = { radius: radius };
    const area = calculateArea(myCircle);
    document.write(`The circle area is: ${area}`)
    console.log("The circle area is:", area);
}

