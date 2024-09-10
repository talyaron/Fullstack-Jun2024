var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Person = function (firstName, lastNamed, age, id) {
        this.firstName = firstName;
        this.lastNamed = lastNamed;
        this.age = age;
        this.id = id;
    };
    Person.prototype.Person = function () {
        this.firstName = "Anna";
        this.lastNamed = "Petrovitsky";
        this.age = 22;
        this.id = 11111;
    };
    Person.prototype.Person = function (other) {
        this.firstName = other.firstName;
        this.lastNamed = other.lastNamed;
        this.age = other.age;
        this.id = other.id;
    };
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastNamed;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getID = function () {
        return this.id;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastNamed) {
        this.lastNamed = lastNamed;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setID = function (id) {
        this.id = id;
    };
    Person.prototype.isLegal = function () {
        return this.age >= 18;
    };
    Person.prototype.calcAgeDifference = function (other) {
        return this.age - other.age;
    };
    Person.prototype.toString = function () {
        document.write("<b> Person details: </b> <br> firstname: " + this.firstName + " <br> lastname: " + this.lastNamed + " <br> Age:" + this.age + " <br> ID:" + this.id);
    };
    return Person;
}());
