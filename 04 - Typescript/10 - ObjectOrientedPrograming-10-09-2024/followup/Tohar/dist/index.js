var Person = /** @class */ (function () {
    //constructor
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    //methods
    Person.prototype.changeFirstName = function (newName) {
        this.firstName = newName;
    };
    Person.prototype.changeLastName = function (newName) {
        this.lastName = newName;
    };
    return Person;
}());
var person1 = new Person("John", "K", 25);
console.log(person1);
person1.changeFirstName("David");
console.log(person1);
