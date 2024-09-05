interface Book{
    title:string;
    author:string;
    year: number;
}

function getBookDiteails() : Book{
    try{
        const title : string = prompt("Please enter your book title:") || "";
        const author : string= prompt("Please enter your book author:") || "";
        const year : number = Number(prompt("Please enter your book number:"));
        
        if(!title || !author || !year) throw new Error("Invalid input");

        const getBookDiteails : Book = {
        title: title,
        author: author,
        year : year,
        }

        console.log(getBookDiteails);
        return getBookDiteails;
    }catch(e){
        console.error(e);
        return {
            title: "",
            author: "",
            year: 0,
        }
    }
}

const Booking : Book = getBookDiteails();

function rederBook (book : Book){
    document.write(`Your Booking details: <br> Title:${book.title} <br> Author:${book.author} <br> Year:${book.year}`);
}

rederBook(Booking);


interface Rectangle {
    width : number;
    height : number;
}

function getRectangleInfo() : Rectangle{
    try{
        const width: number = Number(prompt("Width?"));
        const height: number = Number(prompt("height?"));

        if (!width || !height) throw new Error("Invalid Inpur");

        const rectangle : Rectangle = {
            width : width,
            height : height,
        }
        console.log(rectangle);
        return rectangle;
    }catch(e){
        console.error(e);
        return {
            width: 0,
            height: 0,
        }
    }
}

const rectangle : Rectangle = getRectangleInfo();

function calcArea(rectangle : Rectangle) : number {
    return rectangle.width * rectangle.height;
}

const area : number = calcArea(rectangle);

function rederAreas(size : Rectangle , area :number){
    document.write(`<br> The Rectangle size is width: ${size.width} and height: ${size.height} and the area is: ${area}`);
}

rederAreas(rectangle,area);