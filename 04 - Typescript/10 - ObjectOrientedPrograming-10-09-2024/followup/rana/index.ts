class Person {
    name:string;
    lastName:string;


    constructor (name:string, lastName:string){
        this.name= name;
        this.lastName= lastName;
    }

    changeName(newName: string): void {
        this.name = newName;
    }


    changelastName(newlastName: string): void {
        this.lastName = newlastName;
    }

    getFullName(): string {
        return `${this.name} ${this.lastName}`;
    }
}

const Person1= new Person("Rana","Zidan");
console.log(Person1.getFullName());


Person1.changeName("Rana");
Person1.changelastName("halaby");

console.log(Person1.getFullName());