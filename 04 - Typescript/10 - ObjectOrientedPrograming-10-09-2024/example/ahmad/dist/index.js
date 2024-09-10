var Person = /** @class */ (function () {
    function Person(firstName, lastName, birthDay, age) {
        this.age = 0;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        if (age) {
            this.age = age;
        }
    }
    Person.prototype.changeFirstName = function (newName) {
        this.firstName = newName;
        return this.firstName;
    };
    Person.prototype.changeLastName = function (newLastName) {
        this.lastName = newLastName;
        return this.lastName;
    };
    return Person;
}());
var person1 = new Person('David', 'Ben', new Date(2000, 1, 19), 24);
console.log(person1.firstName);
console.log(person1.lastName);
person1.changeFirstName('John');
person1.changeLastName('cohen');
console.log(person1);
