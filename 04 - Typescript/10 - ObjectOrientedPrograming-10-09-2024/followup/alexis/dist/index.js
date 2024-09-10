var Person = /** @class */ (function () {
    //constructor
    function Person(name, lastName, age, height) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
    }
    //methods
    Person.prototype.changeName = function (newName) {
        this.name = newName;
    };
    Person.prototype.yearofBirth = function () {
        var currentYear = new Date().getFullYear();
        var yearofBirth = currentYear - this.age;
        return yearofBirth;
    };
    return Person;
}());
var person1 = new Person('Frank', 'Andrews', 25, 185);
console.log(person1);
console.log(person1.yearofBirth());
person1.changeName("Andrew");
console.log(person1);
