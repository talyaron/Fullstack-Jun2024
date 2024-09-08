interface Student{
    name: string;
    age: number;
    isStudent: boolean;
}

const names: string [] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const generatNum = (min,max) => {return Math.floor(Math.random() * (max - min) + min)};
const age : number = generatNum(20,40);
const students : Student [] = [
    { name: 'Alice', age: 25, isStudent: true },
    { name: 'Bob', age: 30,isStudent: true },
    { name: 'Charlie', age: 35,isStudent: true },
    { name: 'David', age: 40,isStudent: true },
    { name: 'Eve', age: 20,isStudent: true },
    { name: 'Frank', age: 25,isStudent: true },
    { name: 'Grace', age: 30,isStudent: false },
    { name: 'Heidi', age: 35,isStudent: true },
    { name: 'Ivan', age: 40,isStudent: false },
    { name: 'Judy', age: 20,isStudent: true },
];


const isStudent = students.filter((students)=> students.isStudent===true);
console.log(isStudent);
const olderStudent = isStudent.filter((students) => students.age > 30);
console.log(olderStudent);
const sortArray = olderStudent.sort((a,b) => b.age - a.age);
console.log(sortArray);

const sumStudentAge = students.reduce((acc,Student) => acc + Student.age,0);
console.log(sumStudentAge);

const lesOlder = students.find