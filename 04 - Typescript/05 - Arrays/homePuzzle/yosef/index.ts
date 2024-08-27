interface book {
    title : String;
    auther : String;
    year : Number;
}

const number22: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const books: book[] = [
    {
        title : 'book1',
        auther : 'yose232323f',
        year : 1992

    }

    {
        title : 'book2',
        auther : 'yose232323f',
        year : 1890

    }

    {
        title : 'book3',
        auther : 'yose232323f',
        year : 1999

    }
    
]


const new_arry = number22.push(11,12);
console.log(number22);
console.log(new_arry);

books.push({
    title : 'book4',
    auther : 'haifa',
    year : 2002
})

console.log(books);

