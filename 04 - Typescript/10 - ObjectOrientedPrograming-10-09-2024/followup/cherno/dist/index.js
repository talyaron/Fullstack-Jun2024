var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    // getters
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    // setters and updaters
    Person.prototype.changeFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.changeLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.ageYear = function () {
        this.age++;
    };
    // methods
    Person.prototype.introduceString = function () {
        return this.firstName + " " + this.lastName + ", a " + this.age + " year old " + this.gender + " " + this.getAgeGroup() + ".";
    };
    Person.prototype.getAgeGroup = function () {
        if (this.age >= 0 && this.age <= 12) {
            return "Child";
        }
        else if (this.age >= 13 && this.age <= 19) {
            return "Teenager";
        }
        else if (this.age >= 19 && this.age <= 65) {
            return "Adult";
        }
        else {
            return "Senior";
        }
    };
    return Person;
}());
// usage Example
var person1 = new Person("Israel", "Israeli", 19, "Male");
console.log(person1.introduceString()); // Output: Israel Israeli, a 19 year old Male Teenager.
person1.changeFirstName("John");
person1.ageYear();
console.log(person1.introduceString()); // Output: John Israeli, a 20 year old Male Adult.
