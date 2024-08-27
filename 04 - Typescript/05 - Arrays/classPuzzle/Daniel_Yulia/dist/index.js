// const names: string[] = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "David",
//   "Eve",
//   "Frank",
//   "Grace",
//   "Heidi",
//   "Ivan",
//   "Judy",
// ];
// const students: Student[] = [
//   {
//     name: names[Math.floor(Math.random() * 10)],
//     age: Math.floor(Math.random() * 20 + 20),
//     isStudent: Math.random() > 0.5,
//   },
// ]
var students = [
    { name: "Alice", age: 25, isStudent: true },
    { name: "Bob", age: 30, isStudent: true },
    { name: "Charlie", age: 35, isStudent: true },
    { name: "David", age: 40, isStudent: true },
    { name: "Eve", age: 20, isStudent: true },
    { name: "Frank", age: 25, isStudent: true },
    { name: "Grace", age: 30, isStudent: false },
    { name: "Heidi", age: 35, isStudent: true },
    { name: "Ivan", age: 40, isStudent: false },
    { name: "Judy", age: 20, isStudent: true }
];
var res1 = students.filter(function (student) { return student.isStudent === true; });
var res2 = res1.filter(function (student) { return student.age > 30; });
console.log(res1);
console.log(res2);
