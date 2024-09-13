// interface Car{
//     name: string;
//     year: number;
//     model: string;
//     manufacturer: string;
// }
var Car = /** @class */ (function () {
    //constructor
    function Car(name, year, model, manufacturer, initialKilometer) {
        this.initialKilometer = 0;
        this.name = name;
        this.year = year;
        this.model = model;
        this.manufacturer = manufacturer;
        if (initialKilometer) {
            this.initialKilometer = initialKilometer;
        }
    }
    //methods
    Car.prototype.getAge = function () {
        return new Date().getFullYear() - this.year;
    };
    Car.prototype.addKilometer = function () {
        this.initialKilometer++;
    };
    return Car;
}());
var Person = /** @class */ (function () {
    function Person(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    return Person;
}());
var car1 = new Car('Civic', 2021, 'X', 'Honda', 20000);
//instance of class Car
console.log(car1);
console.log(car1.getAge());
console.log(car1.initialKilometer);
car1.addKilometer();
console.log(car1.initialKilometer);
var car2 = new Car('Corolla', 2023, 'X', 'Toyota');
console.log(car2);
console.log(car2.getAge());
var yosef_car = new Car('Tesla', 2021, 'Standard Range', 80000);
console.log(yosef_car);
var yosef = new Person('yosef', 'ibrahim');
console.log(yosef);
