var car = /** @class */ (function () {
    function car(name, year, model) {
        this.name = name;
        this.year = year;
        this.model = model;
    }
    car.prototype.getAge = function () {
        return new Date().getFullYear() - this.year;
    };
    return car;
}());
var car1 = new car('Skoda', 2018, '1500xl');
console.log(car1);
console.log(car1.getAge());
