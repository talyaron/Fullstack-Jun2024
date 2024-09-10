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