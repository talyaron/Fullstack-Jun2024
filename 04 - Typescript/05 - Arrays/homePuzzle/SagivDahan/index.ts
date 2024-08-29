//I want to make the interface of the book with the parameters "title:string, autor: string, and year:number"
interface Book{
    title: string,
    author: string,
    year: number
}

// I want to make an array collection with parameters of books.
const bookCollection:Book[] = [
    {title: "The developer who liked to disappear", author: "Idan Gal", year: 2019},
    {title: "Sable World", author: "Oron Kurtz", year: 2022},
    {title: "The lion was loved strawberry", author: "IDK", year: 2005}
]

// I want to make a function that push to the array new parameters
// in my function I want to make a variable that will save the new parameters
// after that the variable saved the information I want that he will push his information to bookCollection.
function pushToBookCollection(title: string, author: string, year:number): void {
    const newBook: Book = {title, author, year};
    bookCollection.push(newBook);
}

// I want to make a variables to save and get the user information from the browser in prompt.
//const title: string = prompt("Enter book title:") || '';
//const author: string = prompt("Enter book:") || '';
//const yearInput: number = Number(prompt("Enter the year of the book:")) || 0;

// this is enable the function.
//pushToBookCollection(title, author, yearInput);
//this is prints bookCollection array.
//console.log(bookCollection);

// I want to make a function that filter a book by year.
function filterBooksAfterYear(collection: Book[], year: number): Book[] {
    return collection.filter(book => book.year >= year);
}

// function enable
const filteredBooks = filterBooksAfterYear(bookCollection, 2010);
console.log(filteredBooks);

function getNewestBook(collection: Book[]): Book | undefined {
    return collection.reduce((newest, book) => {
        if (!newest) return book;
        return book.year > newest.year ? book : newest;
    }, undefined as Book | undefined); 
}

//enable function
const newestBook = getNewestBook(bookCollection);
//return the newest book.
console.log('The newest book is:', newestBook);