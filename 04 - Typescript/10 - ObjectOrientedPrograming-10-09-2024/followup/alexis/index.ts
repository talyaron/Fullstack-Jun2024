class Person {
  name: string;
  lastName: string;
  age: number;
  height: number;
  //constructor
  constructor(name, lastName, age, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
  }

  //methods
  changeName(newName:string):string{
  this.name=newName;
  return this.name;
  }
  yearofBirth():number{
    const currentYear=new Date().getFullYear();
    const yearofBirth = currentYear - this.age;
    return  yearofBirth;
  }
}

const person1 = new Person('Frank','Andrews', 25, 185);

console.log(person1);
console.log(person1.yearofBirth());
person1.changeName("Andrew");
console.log(person1);


