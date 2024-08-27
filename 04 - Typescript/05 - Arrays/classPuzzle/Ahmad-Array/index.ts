
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];

const getRandomName= () => names[Math.floor(Math.random()*names.length)];

const getRandomAge = () => Math.floor(Math.random()* 21)+20;  

const getRandomIsStudent = () => Math.random() >= 0.5;

const people: Person[] = Array.from({length:10 }, () => ({
    name:getRandomName(),
    age :getRandomAge(),
    isStudent: getRandomIsStudent()
}));
console.log(people);

const students = people.filter(person => person.isStudent);
console.log(students); 


const olderStudents = students.filter(person => person.age > 30);
console.log(olderStudents); 

const sortedOlderStudents = olderStudents.sort((a, b) => b.age - a.age);
console.log(sortedOlderStudents);

const studentName = students.map(student => student.isStudent == false);
console.log(studentName);