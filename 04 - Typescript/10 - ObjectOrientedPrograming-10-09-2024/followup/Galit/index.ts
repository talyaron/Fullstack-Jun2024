
class Person {
    name: string;
    lastName: string;
    age: number;
    
    //constructor
    constructor(name: string, lastName:string , age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;

    }

    //methods
    getLastName(): string {
       return this.lastName
    }

}

const Person1 = new Person('Galit', 'Li', 26);
//instance of class Person
console.log(Person1);
console.log(Person1.getLastName());

const Person2 = new Person('dov', 'lala', 7);
console.log(Person2);
console.log(Person2.getLastName());