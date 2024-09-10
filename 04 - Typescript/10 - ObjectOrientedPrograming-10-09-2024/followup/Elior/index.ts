class car {
    name: string; 
    year: number;
    model: string;
    manufacturer: string; 
    intialkilometer: number = 0; 


//constructor 
constructor(name: string, year: number, model: string, manufacturer: string, initialKilometer?: number) {
this.name = name; 
this.year = year; 
this.model = model; 
this.manufacturer = manufacturer; 
if (initialKilometer){
    this.intialkilometer = initialKilometer;
}
   
}
//methods
getAge(): number {
    return new Date().getFullYear() - this.year; 
}
addKilometer(): void {
    this.intialkilometer++;
}
}

const car1 = new Car('Civic', 2021, 'X', 'Honda', 20000);
console.log(car1);

}
 
