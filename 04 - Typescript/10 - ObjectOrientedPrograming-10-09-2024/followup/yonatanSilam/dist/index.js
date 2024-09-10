var Person = /** @class */ (function () {
    function Person(name, lastName, age) {
        this.age = age;
        this.name = name;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.name + ' ' + this.lastName;
    };
    Person.prototype.changeName = function (name) {
        this.name = name;
    };
    Person.prototype.changeLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person;
}());
var person1 = new Person('yonatan', 'silam', 23);
console.log(person1.getFullName());
person1.changeLastName('sillam');
console.log(person1.getFullName());
