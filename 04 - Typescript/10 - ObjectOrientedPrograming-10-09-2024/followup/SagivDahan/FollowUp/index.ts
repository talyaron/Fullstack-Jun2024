// #1 just repeat the same steps as the example to create a class for the person and use it to create the objects, and methods.
class Human{
    name: string;
    age: number;
    eyeColor: string;
    height: number;
    yearOfBirth: number;
    lastName: string;

    constructor(name: string, lastName:string, age:number, eyeColor: string, height:number, yearOfBirth: number){
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        this.height = height;
        this.yearOfBirth = yearOfBirth;
    }
}

const human1 = new Human('Sagiv','Dahan', 18, 'brown', 1.80, 2006);
console.log(human1);

// #2 just repeat the same steps as the previous task but this time you have to create a class 
// for the Person and use it to create the objects.the methods should be change name, change last name.

