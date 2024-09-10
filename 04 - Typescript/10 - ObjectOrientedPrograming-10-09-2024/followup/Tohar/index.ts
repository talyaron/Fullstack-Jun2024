class Person {
    firstName: string;
    lastName: string;
    age: number;
    
    //constructor
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //methods
    changeFirstName(newName:string):void {
        this.firstName = newName;
    }

    changeLastName(newName:string):void {
        this.lastName = newName;
    }
}

const person1 = new Person("John", "K", 25);
console.log(person1);
person1.changeFirstName("David");
console.log(person1);