// ## Exercise 1: Simple Book Collection (Beginner-Friendly)
/* ex 01 */

interface book {                 /* 01 */
    title : String;
    auther : String;
    year : number;
}

const books: book[] = [                      /* 02 */
    {
        title : 'book1',
        auther : 'germany',
        year : 1992

    }

    {
        title : 'book2',
        auther : 'france',
        year : 1890

    }

    {
        title : 'book3',
        auther : 'egpt',
        year : 1999

    }

    {
        title : 'book4',
        auther : 'barzil',
        year : 1292

    }

    {
        title : 'book5',
        auther : 'italy',
        year : 1890

    }

    {
        title : 'book6',
        auther : 'singapore',
        year : 1119

    }
    
]

books.push({            /* 03  A*/
    title : 'book7',
    auther : 'england',
    year : 1727
})

console.log(books);      /* 03  B*/

const found : book[] = books.filter((value) => value.title == "book7");    /* 03 C */
console.log(found);

const spasific_year : book[] = books.filter((x) => x.year > 1990);   /*  04  */
console.log(spasific_year);
 

/*  05  */

const last_book = new_book(books);
console.log(last_book);

function new_book (check : book[]) : object {
    const last_array = check.length-1;
    return check[last_array];
}


document.write("the book have: <br>");   /*  06  */
books.forEach((x) => document.write(`<br> title ${x.title} auther is ${x.auther} created in ${x.year}`))





// document.write(`exsrcise 03-A i pushed the book with title ${books[6].title}`)
// document.write(`<br>`);
// document.write(`${books.length}`)
// document.write(`<br>`);


// document.write(`<br>`);
// number22.forEach((number22:Number,index:Number) => 
//     document.write(`<br>the numbers in are in index: ${index}`)
// );

// document.write('<br>');
// number22.forEach((number22:Number,index:Number) => 
//     document.write(`<br>the numbers in the array are: ${number22}`);
// );

// document.write('<br>');
// number22.forEach((value,index,array) => 
//     document.write(`<br>the numbers in the array are: ${array}`);
// );

// document.write('<br>');

// const anythin2gGoes: any[] = [1, 'a22aa', 2, 'bbb', 3, 'c323cc'];

// anythin2gGoes.forEach((x,i) => document.write(`<br>in the array are: ${x}`));






// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   console.log(num * 3); // מדפיס את הכפולה של כל מספר
// });


// ## Exercise 2: Inventory Management System (Advanced)

document.write("<br> <br>Now Exercise 2");


interface Item {         /*  01  */
    id : number;
    name : string;
    price : number;
    quantity : Number;
}

var management_system : Item [] = [         /*  02  */
    {
        id : 123,
        name : 'laptop',
        price : 200,
        quantity : 5

    }

    {
        id : 2355,
        name : 'Iphone',
        price : 2000,
        quantity : 8

    }

    {
        id : 1899923,
        name : 'Tesla',
        price : 199000,
        quantity : 3

    }

    {
        id : 855443,
        name : 'Screen',
        price : 500,
        quantity : 15

    }

    {
        id : 75009,
        name : 'Screen',
        price : 900,
        quantity : 11

    }
]

console.log(management_system);
add_item(777,"Mouse",80,88);     /*  03 - A  */
console.log(management_system);
const new_array = remove_item(management_system,123);    /*  03 - B  */
// management_system = new_array;
console.log(new_array);
console.log(management_system);
const update_array = update(management_system,777,1);  /*  03 - C  */
console.log(update_array);
console.log("now");
console.log(management_system);
const founded = found_item(management_system,"Screen");    /*  03  - D  */
console.log(founded);
const total_quantity = total(management_system);         /* 03 - E */
console.log(total_quantity);
var list_quantity = list_by_quantity(management_system,6);   /*  03  -  F  */
console.log(list_quantity);
console.log("array before swap")
console.log(management_system);
var try1 = management_system;
console.log("array after swap")
swap(try1,0,2);
console.log(try1);





function add_item (id:number, name:string, price:number, quantity:number) : void
{
    management_system.push({
        id : id,
        name : name,
        price : price,
        quantity : quantity,
    })
}

function remove_item (arr : Item[], id : number) : Item[]
{
    const new_arr = arr.filter((arr => arr.id != id))
    return new_arr;

}

function update (arr:Item[], id:number, new_quantity:number) : Item[]
{
    const new_arr[] = arr.forEach((arr => {
        if (arr.id == id)
            arr.quantity = new_quantity;
    }))
    return new_arr
}

function found_item (arr:Item[], name:string) : Item[]
{
    const new_array = arr.filter((arr => arr.name == name)) 
    return new_array
}

function total (arr:Item[]) : number {
    var sum : number = 0;
    arr.forEach((arr) => sum=sum+arr.quantity)
    return sum
}

function list_by_quantity (arr2:Item[], quantity:number) : Item[]
{
    const new_arr = arr2.filter((arr2 => arr2.quantity < quantity))
    return new_arr;
}

// console.log(management_system[4].name);

function swap (arr:Item[], new_index:number, old_index:number) : void
{
    const temp= arr[old_index];
    console.log(temp);
    arr[old_index] = arr[new_index];
    console.log(arr[old_index]);
    arr[new_index] = temp
    management_system = arr;
}

console.log(management_system.indexOf(2));


