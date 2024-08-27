var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
var getRandomName = function () { return names[Math.floor(Math.random() * names.length)]; };
var getRandomAge = function () { return Math.floor(Math.random() * 21) + 20; };
var getRandomIsStudent = function () { return Math.random() >= 0.5; };
var people = Array.from({ length: 10 }, function () { return ({
    name: getRandomName(),
    age: getRandomAge(),
    isStudent: getRandomIsStudent()
}); });
console.log(people);
var students = people.filter(function (person) { return person.isStudent; });
console.log(students);
var olderStudents = students.filter(function (person) { return person.age > 30; });
console.log(olderStudents);
var sortedOlderStudents = olderStudents.sort(function (a, b) { return b.age - a.age; });
console.log(sortedOlderStudents);
var studentName = students.map(function (student) { return student.isStudent == false; });
console.log(studentName);
