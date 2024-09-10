class Car {
  name: string;
  model: string;
  manufacturer: string;
  year: number;
  initialKilometer: number = 0;
  constructor(
    name: string,
    model: string,
    manufacturer: string,
    year: number,
    initialKilometer?: number
  ) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    if (initialKilometer) this.initialKilometer = initialKilometer;
  }
  getAge(): number {
    return new Date().getFullYear() - this.year;
  }

  addKilometer(): void {
    this.initialKilometer++;
  }
  getNewName(oldName: string): string {
    const newName = String(prompt("Give car new name"));
    if (newName === "null" || !newName) {
      return oldName;
    }
    return newName;
  }
}

const car1 = new Car(`Corolla`, "Gt", "Toyota", 2023);
console.log(car1);
console.log(car1.getAge());
car1.name = car1.getNewName(car1.name);
console.log(car1);
