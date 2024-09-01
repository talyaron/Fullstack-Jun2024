var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var studentName = students.map(function (student) { return (__assign(__assign({}, student), { isStudent: false })); });
console.log(studentName);
