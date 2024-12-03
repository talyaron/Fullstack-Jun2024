interface Student{
    name: string,
    age: number,
    isStudent: boolean
} 

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

const students: Student[] = [
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

const res1: Student[] = students.filter(student => student.isStudent === true); 
const res2: Student[] = res1.filter(student => student.age > 30);

console.log(res1);
console.log(res2);
