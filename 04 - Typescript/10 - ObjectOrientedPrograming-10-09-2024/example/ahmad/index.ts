class Person {
    firstName: string;
    lastName: string;
    birthDay: Date;
    age: number = 0;

    constructor(firstName: string, lastName: string, birthDay: Date, age?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        if (age) {
            this.age = age;
        }
    }

    changeFirstName(newName: string) {
        this.firstName = newName;
        return this.firstName;
    }

    changeLastName(newLastName: string) {
        this.lastName = newLastName;
        return this.lastName;
    }
}

const person1 = new Person('David', 'Ben', new Date(2000, 1, 19), 24);

console.log(person1.firstName);
console.log(person1.lastName);

person1.changeFirstName('John');
person1.changeLastName('cohen');

console.log(person1);
