/* ex 01 */
var books = [
    {
        title: 'book1',
        auther: 'germany',
        year: 1992
    },
    {
        title: 'book2',
        auther: 'france',
        year: 1890
    },
    {
        title: 'book3',
        auther: 'egpt',
        year: 1999
    },
    {
        title: 'book4',
        auther: 'barzil',
        year: 1292
    },
    {
        title: 'book5',
        auther: 'italy',
        year: 1890
    },
    {
        title: 'book6',
        auther: 'singapore',
        year: 1119
    }
];
books.push({
    title: 'book7',
    auther: 'england',
    year: 1777
});
console.log(books); /* 03  B*/
document.write("the book have: <br>"); /* 04 B */
books.forEach(function (x) { return document.write("<br> title " + x.title + " auther is " + x.auther + " created in " + x.year); });
var found = books.filter(function (value) { return value.title == "book7"; }); /* 03 C */
console.log(found);
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
