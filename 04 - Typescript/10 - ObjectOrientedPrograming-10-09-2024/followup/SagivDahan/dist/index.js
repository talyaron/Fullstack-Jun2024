// #1 just repeat the same steps as the example to create a class for the person and use it to create the objects, and methods.
var Human = /** @class */ (function () {
    function Human(name, lastName, age, eyeColor, height, yearOfBirth) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        this.height = height;
        this.yearOfBirth = yearOfBirth;
    }
    Human.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return Human;
}());
var human1 = new Human('Sagiv', 'Dahan', 18, 'brown', 1.80, 2006);
console.log(human1);
// #2 just repeat the same steps as the previous task but this time you have to create a class 
// for the Person and use it to create the objects.the methods should be change name, change last name.
human1.changeName("Idan");
console.log(human1);
