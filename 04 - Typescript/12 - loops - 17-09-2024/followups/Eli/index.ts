interface Book {
    name:string;
    year:number
    publisher:string;
}

const books:Book[]=[
{
    name:"curious george",
    year:2002,
    publisher:"arthur"
}]
const myBook:Book = {name:"lala",year:2024,publisher:"me"}
books.push(myBook)

for (let index = 0; index < books.length; index++) {
    console.log(`name : ${books[index].name}  year: ${books[index].year} publisher : ${books[index].publisher}`) 
    
}