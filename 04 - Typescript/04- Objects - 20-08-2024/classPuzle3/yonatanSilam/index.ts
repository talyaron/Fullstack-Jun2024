interface Book {
    title: string;
    author: string;
    publicationYear:number; 
}

function getBookInfo():Book{
    const title =prompt("pls enter the title")
    const author= prompt("pls enter the name of author")
    const publicationYear= Number(prompt("pls enter the publication year"))

    try{
        if(title==""|| title==null||author==""|| author==null|| publicationYear==null){
            throw new Error("Invalid input")
            } 
        else{
        const book:Book = {
            title: title,
            author: author,
            publicationYear:publicationYear,
    }
    return book;
}
    }
catch(x){
    console.error(x);
    const book:Book = {
        title:"",
        author: "",
        publicationYear:0
    }
    return book;
}}
function renderBook(book: Book) {
    document.write(`the book name is ${book.title} by ${book.author} that publish in ${book.publicationYear}`);
}
renderBook(getBookInfo());
