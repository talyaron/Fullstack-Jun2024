var Person = /** @class */ (function () {
    function Person(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    Person.prototype.changeName = function (newName) {
        this.name = newName;
    };
    Person.prototype.changelastName = function (newlastName) {
        this.lastName = newlastName;
    };
    Person.prototype.getFullName = function () {
        return this.name + " " + this.lastName;
    };
    return Person;
}());
var Person1 = new Person("Rana", "Zidan");
console.log(Person1.getFullName());
Person1.changeName("Rana");
Person1.changelastName("halaby");
console.log(Person1.getFullName());
