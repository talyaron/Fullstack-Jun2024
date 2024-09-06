var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
var generatNum = function (min, max) { return Math.floor(Math.random() * (max - min) + min); };
var age = generatNum(20, 40);
var students = [
    { name: 'Alice', age: 25, isStudent: true },
    { name: 'Bob', age: 30, isStudent: true },
    { name: 'Charlie', age: 35, isStudent: true },
    { name: 'David', age: 40, isStudent: true },
    { name: 'Eve', age: 20, isStudent: true },
    { name: 'Frank', age: 25, isStudent: true },
    { name: 'Grace', age: 30, isStudent: false },
    { name: 'Heidi', age: 35, isStudent: true },
    { name: 'Ivan', age: 40, isStudent: false },
    { name: 'Judy', age: 20, isStudent: true },
];
var isStudent = students.filter(function (students) { return students.isStudent === true; });
console.log(isStudent);
var olderStudent = students.filter(function (students) { return students.isStudent === true && students.age > 38; });
console.log(olderStudent);
var filteredStudent = students.filter(function (student) { return student.age > 30; });
var sortArray = filteredStudent.sort(function (a, b) { return b.age - a.age; });
console.log(sortArray);
