class car {
    name: string;
    year: number;
    model: string;

    constructor (name, year, model) {
        this.name = name;
        this.year = year;
        this.model = model;
    }

    getAge(): number {
        return new Date().getFullYear() - this.year;
    }
}

const car1 = new car ('Skoda', 2018, '1500xl');
console.log(car1);
console.log(car1.getAge());