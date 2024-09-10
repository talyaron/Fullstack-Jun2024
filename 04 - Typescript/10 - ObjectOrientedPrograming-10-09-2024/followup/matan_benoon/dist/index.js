var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.changeName = function (newName) {
        this.firstName = newName;
    };
    Person.prototype.changeLastName = function (newLastName) {
        this.lastName = newLastName;
    };
    return Person;
}());
var person1 = new Person('dana', 'lisagor');
console.log(person1.getFullName());
person1.changeName('Matan');
person1.changeLastName('ben noon');
console.log(person1.getFullName());
