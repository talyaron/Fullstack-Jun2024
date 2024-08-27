var people = [
    { name: "Alice", age: 25, isStudent: true },
    { name: "Bob", age: 30, isStudent: true },
    { name: "Charlie", age: 37, isStudent: true },
    { name: "David", age: 40, isStudent: true },
    { name: "Eve", age: 20, isStudent: true },
    { name: "Frank", age: 25, isStudent: true },
    { name: "Grace", age: 30, isStudent: false },
    { name: "Heidi", age: 35, isStudent: true },
    { name: "Ivan", age: 40, isStudent: false },
    { name: "Judy", age: 20, isStudent: true },
];
var students = people.filter(function (person) { return person.isStudent; });
var oldStudents = students.filter(function (person) { return person.isStudent && person.age > 30; });
var sortedStudents = students.sort(function (a, b) { return a.age - b.age; });
var sortedOldStudents = oldStudents.sort(function (a, b) { return a.age - b.age; });
console.log(sortedStudents, sortedOldStudents);
