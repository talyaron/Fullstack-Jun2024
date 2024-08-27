interface Person{
    name:string;
    age:number;
    isStudent:boolean
}
const persons:Person[]=[
    { name: 'Alice', age: 25, isStudent: true },
    { name: 'Bob', age: 30,isStudent: false },
    { name: 'Charlie', age: 35,isStudent: true },
      { name: 'David', age: 40,isStudent: true },
      { name: 'Eve', age: 20,isStudent: true },
      { name: 'Frank', age: 25,isStudent: true },
      { name: 'Grace', age: 30,isStudent: false },
      { name: 'Heidi', age: 35,isStudent: true },
      { name: 'Ivan', age: 40,isStudent: false },
      { name: 'Judy', age: 20,isStudent: true },
      { name: 'shalom', age: 42,isStudent: true },
      { name: 'david', age: 31,isStudent: true },
      { name: 'yair', age: 45,isStudent: true },
      { name: 'sol', age: 34,isStudent: true }
]

const students:Person[]= persons.filter((person:Person)=> person.isStudent);
// students.forEach((student:Person)=>console.log(student.name))

const oldStudets:Person[]= students.filter((student:Person)=> student.age>30);
// oldStudets.forEach((student:Person)=> console.log(`the student ${student.name} ia ${student.age} years old`))
const oldStudetsByAge:Person[]=oldStudets.sort((student1,student2) =>student1.age-student2.age )
oldStudetsByAge.forEach((student:Person)=> console.log(`the student ${student.name} ia ${student.age} years old`))


