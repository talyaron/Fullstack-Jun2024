"use strict";

// ## Exercise 1: Simple Book Collection (Beginner-Friendly)

/* ex 01 */
var books = [{
  title: 'book1',
  auther: 'germany',
  year: 1992
}, {
  title: 'book2',
  auther: 'france',
  year: 1890
}, {
  title: 'book3',
  auther: 'egpt',
  year: 1999
}, {
  title: 'book4',
  auther: 'barzil',
  year: 1292
}, {
  title: 'book5',
  auther: 'italy',
  year: 1890
}, {
  title: 'book6',
  auther: 'singapore',
  year: 1119
}];
books.push({
  title: 'book7',
  auther: 'england',
  year: 1727
});
console.log(books);
/* 03  B*/

var found = books.filter(function (value) {
  return value.title == "book7";
});
/* 03 C */

console.log(found);
var spasific_year = books.filter(function (x) {
  return x.year > 1990;
});
/*  04  */

console.log(spasific_year);
/*  05  */

var last_book = new_book(books);
console.log(last_book);

function new_book(check) {
  var last_array = check.length - 1;
  return check[last_array];
}

document.write("the book have: <br>");
/*  06  */

books.forEach(function (x) {
  return document.write("<br> title " + x.title + " auther is " + x.auther + " created in " + x.year);
}); // document.write(`exsrcise 03-A i pushed the book with title ${books[6].title}`)
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

document.body.style.backgroundColor = 'red';
document.write("<br> <br>Now Exercise 2");
var management_system = [{
  id: 123,
  name: 'laptop',
  price: 200,
  quantity: 5
}, {
  id: 2355,
  name: 'Iphone',
  price: 2000,
  quantity: 8
}, {
  id: 1899923,
  name: 'Tesla',
  price: 199000,
  quantity: 3
}, {
  id: 855443,
  name: 'Screen',
  price: 500,
  quantity: 15
}, {
  id: 75009,
  name: 'Screen',
  price: 900,
  quantity: 11
}];
console.log(management_system);
add_item(777, "Mouse", 80, 88);
/*  03 - A  */

console.log(management_system);
var new_array = remove_item(management_system, 123);
/*  03 - B  */
// management_system = new_array;

console.log(new_array);
console.log(management_system);
var update_array = update(management_system, 777, 1);
/*  03 - C  */

console.log(update_array);
console.log("now");
console.log(management_system);
var founded = found_item(management_system, "Screen");
/*  03  - D  */

console.log(founded);
var total_quantity = total(management_system);
/* 03 - E */

console.log(total_quantity);
var list_quantity = list_by_quantity(management_system, 6);
/*  03  -  F  */

console.log(list_quantity);
console.log("array before swap");
console.log(management_system);
var try1 = management_system;
console.log("array after swap");
swap(try1, 0, 2);
console.log(try1);

function add_item(id, name, price, quantity) {
  management_system.push({
    id: id,
    name: name,
    price: price,
    quantity: quantity
  });
}

function remove_item(arr, id) {
  var new_arr = arr.filter(function (arr) {
    return arr.id != id;
  });
  return new_arr;
}

function update(arr, id, new_quantity) {
  var new_arr,
      _a = arr.forEach(function (arr) {
    if (arr.id == id) arr.quantity = new_quantity;
  });

  return new_arr;
}

function found_item(arr, name) {
  var new_array = arr.filter(function (arr) {
    return arr.name == name;
  });
  return new_array;
}

function total(arr) {
  var sum = 0;
  arr.forEach(function (arr) {
    return sum = sum + arr.quantity;
  });
  return sum;
}

function list_by_quantity(arr2, quantity) {
  var new_arr = arr2.filter(function (arr2) {
    return arr2.quantity < quantity;
  });
  return new_arr;
} // console.log(management_system[4].name);


function swap(arr, new_index, old_index) {
  var temp = arr[old_index];
  console.log(temp);
  arr[old_index] = arr[new_index];
  console.log(arr[old_index]);
  arr[new_index] = temp;
  management_system = arr;
} // console.log(management_system.indexOf(management_system[2]));