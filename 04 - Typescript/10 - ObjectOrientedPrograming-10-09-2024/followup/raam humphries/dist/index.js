var person = /** @class */ (function () {
    function person(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    person.prototype.changeName = function (newName) {
        this.name = newName;
    };
    person.prototype.changeLastName = function (newLastName) {
        this.lastname = newLastName;
    };
    person.prototype.howOld = function () {
        return this.age;
    };
    person.prototype.yearOfBirth = function () {
        return 2024 - this.age;
    };
    person.prototype.drivermaterial = function () {
        if (this.age > 18) {
            console.log("age is ligule to drive");
        }
        else {
            console.log("age is not ligule to drive");
        }
    };
    return person;
}());
var person1 = new person("Raam", "Humphries", 29);
console.log(person1);
console.log(person1.howOld());
console.log(person1.yearOfBirth());
person1.changeName("not raam anymore");
console.log(person1.changeLastName("not humphries anymore"));
