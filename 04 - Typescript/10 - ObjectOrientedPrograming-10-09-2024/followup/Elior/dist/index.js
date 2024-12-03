var car = /** @class */ (function () {
    //constructor 
    function car(name, year, model, manufacturer, initialKilometer) {
        this.intialkilometer = 0;
        this.name = name;
        this.year = year;
        this.model = model;
        this.manufacturer = manufacturer;
        if (initialKilometer) {
            this.intialkilometer = initialKilometer;
        }
    }
    //methods
    car.prototype.getAge = function () {
        return new Date().getFullYear() - this.year;
    };
    car.prototype.addKilometer = function () {
        this.intialkilometer++;
    };
    return car;
}());
var car1 = new Car('Civic', 2021, 'X', 'Honda', 20000);
console.log(car1);
