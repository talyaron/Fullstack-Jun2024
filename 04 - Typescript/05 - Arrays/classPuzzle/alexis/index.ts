// interface Person {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }

// const person:Person[]=
// [
//   { name: "Alice", age: 25, isStudent: true },
//   { name: "Bob", age: 30, isStudent: true },
//   { name: "Charlie", age: 35, isStudent: true },
//   { name: "David", age: 40, isStudent: true },
//   { name: "Eve", age: 20, isStudent: true },
//   { name: "Frank", age: 25, isStudent: true },
//   { name: "Grace", age: 30, isStudent: false },
//   { name: "Heidi", age: 35, isStudent: true },
//   { name: "Ivan", age: 40, isStudent: false },
//   { name: "Judy", age: 20, isStudent: true },
// ];

// // const studentTrue:Person[]=person.filter(person=>person.isStudent===true);
// // console.log(studentTrue);

// const filter:Person[]=person.filter(person=>person.age>30 &&person.isStudent===true);
// console.log(filter);


// const sort:Person[]=person.sort((a, b) => b-a);
// console.log(person);


const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]