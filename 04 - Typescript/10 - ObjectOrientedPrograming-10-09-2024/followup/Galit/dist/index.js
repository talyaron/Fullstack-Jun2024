var Person = /** @class */ (function () {
    //constructor
    function Person(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    //methods
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    return Person;
}());
var Person1 = new Person('Galit', 'Li', 26);
//instance of class Person
console.log(Person1);
console.log(Person1.getLastName());
var Person2 = new Person('dov', 'lala', 7);
console.log(Person2);
console.log(Person2.getLastName());
