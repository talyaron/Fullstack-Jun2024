var Car = /** @class */ (function () {
    function Car(name, model, manufacturer, year, initialKilometer) {
        this.initialKilometer = 0;
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        if (initialKilometer)
            this.initialKilometer = initialKilometer;
    }
    Car.prototype.getAge = function () {
        return new Date().getFullYear() - this.year;
    };
    Car.prototype.addKilometer = function () {
        this.initialKilometer++;
    };
    Car.prototype.getNewName = function (oldName) {
        var newName = String(prompt("Give car new name"));
        if (newName === "null" || !newName) {
            return oldName;
        }
        return newName;
    };
    return Car;
}());
var car1 = new Car("Corolla", "Gt", "Toyota", 2023);
console.log(car1);
console.log(car1.getAge());
car1.name = car1.getNewName(car1.name);
console.log(car1);
