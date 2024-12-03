interface Student {
    name: string;
    age: number;
    isStudent: boolean;
}

const students: Student[] = [
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
]

//callback functions
const isStudent = (student:Student)=>student.isStudent === true;
const isOldStudent = (student:Student)=>student.isStudent === true && student.age >30

const realStudents = students.filter(isOldStudent).sort((st1, st2)=>st2.age - st1.age);
console.log(realStudents)

//get the sum of the students age
const sumAges = students.reduce((acc, student)=> acc + student.age,0);
console.log(sumAges)

const newStudents = students.map(student=>({...student, isStudent:true, age:20}))
console.log(newStudents)