class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    changeName(newName: string): void {
        this.firstName = newName;
    }

    changeLastName(newLastName: string): void {
        this.lastName = newLastName;
    }

    
}

const person1 = new Person('dana', 'lisagor');
console.log(person1.getFullName());

person1.changeName('Matan');
person1.changeLastName('ben noon')
console.log(person1.getFullName());