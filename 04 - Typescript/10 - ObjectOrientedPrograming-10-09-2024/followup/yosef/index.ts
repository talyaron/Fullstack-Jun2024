// interface Car{
//     name: string;
//     year: number;
//     model: string;
//     manufacturer: string;
// }
class Car {
    name: string;
    year: number;
    model: string;
    manufacturer: string;
    initialKilometer: number = 0;

    //constructor
    constructor(name: string, year: number, model: string, manufacturer: string, initialKilometer?: number) {
        this.name = name;
        this.year = year;
        this.model = model;
        this.manufacturer = manufacturer;
        if(initialKilometer){
            this.initialKilometer = initialKilometer;
        }
    }



    //methods
    getAge(): number {
        return new Date().getFullYear() - this.year;
    }

    addKilometer(): void {
        this.initialKilometer++;
    }
}


class Person {
first_name: string;
last_name: string;

constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
}

// change_first_and_last_name()

// }



const car1 = new Car('Civic', 2021, 'X', 'Honda', 20000);
//instance of class Car
console.log(car1);
console.log(car1.getAge());
console.log(car1.initialKilometer);
car1.addKilometer();
console.log(car1.initialKilometer);

const car2 = new Car('Corolla', 2023, 'X', 'Toyota');
console.log(car2);
console.log(car2.getAge());

const yosef_car = new Car('Tesla', 2021, 'Standard Range', 80000);
console.log(yosef_car);

const yosef = new Person('yosef', 'ibrahim')

console.log(yosef);
