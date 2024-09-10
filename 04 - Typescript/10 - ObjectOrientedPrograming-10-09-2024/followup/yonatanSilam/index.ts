class Person{
    name:string
    lastName:string
    age: number
    constructor(name:string,lastName:string,age:number){
        this.age=age;
        this.name=name;
        this.lastName=lastName;
    }
    getFullName():string{
        return this.name +' '+this.lastName
    }
    changeName(name:string){
        this.name=name;
    }
    changeLastName(lastName:string){
        this.lastName=lastName;
    }
}
const person1= new Person('yonatan','silam',23);
console.log(person1.getFullName())
person1.changeLastName('sillam');
console.log(person1.getFullName())
