var persons = [
    { name: 'Alice', age: 25, isStudent: true },
    { name: 'Bob', age: 30, isStudent: false },
    { name: 'Charlie', age: 35, isStudent: true },
    { name: 'David', age: 40, isStudent: true },
    { name: 'Eve', age: 20, isStudent: true },
    { name: 'Frank', age: 25, isStudent: true },
    { name: 'Grace', age: 30, isStudent: false },
    { name: 'Heidi', age: 35, isStudent: true },
    { name: 'Ivan', age: 40, isStudent: false },
    { name: 'Judy', age: 20, isStudent: true },
    { name: 'shalom', age: 42, isStudent: true },
    { name: 'david', age: 31, isStudent: true },
    { name: 'yair', age: 45, isStudent: true },
    { name: 'sol', age: 34, isStudent: true }
];
var students = persons.filter(function (person) { return person.isStudent; });
// students.forEach((student:Person)=>console.log(student.name))
var oldStudets = students.filter(function (student) { return student.age > 30; });
// oldStudets.forEach((student:Person)=> console.log(`the student ${student.name} ia ${student.age} years old`))
var oldStudetsByAge = oldStudets.sort(function (student1, student2) { return student1.age - student2.age; });
oldStudetsByAge.forEach(function (student) { return console.log("the student " + student.name + " ia " + student.age + " years old"); });
// const lestOlder = students.findLast((num:number)=>num>40 )
// console.log(lestOlder);
