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
    { name: 'Judy', age: 21, isStudent: true }
];
//callback functions
var isStudent = function (student) { return student.isStudent === true; };
var isOldStudent = function (student) { return student.isStudent === true && student.age > 30; };
var realStudents = students.filter(isOldStudent).sort(function (st1, st2) { return st2.age - st1.age; });
console.log(realStudents);
//get the sum of the students age
var sumAges = students.reduce(function (acc, student) { return acc + student.age; }, 0);
console.log(sumAges);
var newStudents = students.map(function (student) { return (__assign(__assign({}, student), { isStudent: true, age: 20 })); });
console.log(newStudents);
