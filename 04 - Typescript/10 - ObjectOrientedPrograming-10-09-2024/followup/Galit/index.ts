
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
    setNameAndLastName(newName: string, newLastName: string): void {
        this.name = newName;
        this.lastName = newLastName;
    }

}



const Person1 = new Person('Galit', 'Li', 26);

Person1.setNameAndLastName('Noa', 'Levi');

//instance of class Person
console.log(Person1);
console.log(Person1.getLastName());

const Person2 = new Person('dov', 'lala', 7);
console.log(Person2);
console.log(Person2.getLastName());