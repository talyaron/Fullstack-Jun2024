class person {
  name: string;
  lastname: string;
  age: number;
  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  changeName(newName: string) {
    this.name = newName;
  }
  changeLastName(newLastName: string) {
    this.lastname = newLastName;
  }
  howOld() {
    return this.age;
  }
  yearOfBirth() {
    return 2024 - this.age;
  }
  drivermaterial?() {
    if (this.age > 18) {
      console.log("age is ligule to drive");
    } else {
      console.log("age is not ligule to drive");
    }
  }
}

const person1 = new person("Raam", "Humphries", 29);
console.log(person1);
console.log(person1.howOld());
console.log(person1.yearOfBirth());
person1.changeName("not raam anymore");
console.log(person1.changeLastName("not humphries anymore"));
