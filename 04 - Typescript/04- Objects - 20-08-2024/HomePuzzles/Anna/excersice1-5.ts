//Excersise 2:
interface Circle{
    radius : number;
}

function getRadius() :Circle{
    try{
        const radiusSize : number = Number(prompt("Please enter a radius:"));

        if(!radiusSize) throw new Error("Invalid Input");

        const radius : Circle = {
            radius : radiusSize,
        }
        return radius;
    }catch(error){
        console.error(error);
        return {
            radius: 0,
        }
    }
}
const radius : Circle = getRadius();

function calcCirclearea (radius : Circle) : number{
    return Math.pow(radius.radius,2) * Math.PI;
}

const circleArea : number = calcCirclearea(radius);

function rederCircle (circleSize : Circle , area : number){
    document.write(`Base on circle radius ${circleSize.radius} the circle area is ${area}`);
}

rederCircle(radius,circleArea);

//Excersise 3:

interface Temp{
    value: number;
    unit: string;
}

function getTemp() : Temp{
    try{
        const value : number = Number(prompt("Please enter a value"));
        let tempUnit : string = prompt("Please enter a Unit:") || "";

        tempUnit = tempUnit?.toUpperCase();
        if(!value || !tempUnit || (tempUnit!== "C" && tempUnit!=="F")) throw new Error("Invalid Input");

        const Temperature : Temp = {
            value : value,
            unit : tempUnit,
        }
        return Temperature;
    }catch(e){
        console.error(e);
        return{
            value: 0,
            unit: "",
        }
    }
}

const Temperature : Temp = getTemp();

function convertTemp (newTemp : Temp) : Temp{
    try{
        if (!newTemp.value || !newTemp.unit) throw new Error("Invalid Object size");
        if(newTemp.unit === "F"){
            return {
                unit: "C",
                value: (newTemp.value - 32) / 1.8,
            }
        }
        else{
            return{
                unit: "F",
                value: (newTemp.value * 1.8) + 32,
            }
        }
    }catch(e){
        console.error(e);
        return{
            value: 0 ,
            unit: "",
        }
    }
}

const convertefTemp : Temp = convertTemp(Temperature);

function rederTemp (temp : Temp, convertTemp : Temp ){
    document.write(`<br> The temp that user enter is ${temp.value}${temp.unit} after converted the temp is ${convertTemp.value}${convertTemp.unit}`);
}

rederTemp(Temperature,convertefTemp);

//Excersise 4:
interface Person{
    name: string;
    birthDate: Date;
}
function getPerson() : Person{
    try{
        const name : string = prompt("Please enter your name:") || "";
        const date : string = prompt("Please enter your birth date: (in this template year-month-date") || "2024-09-04";

        if(!name || !date) throw new Error("Invalid Person details");

        const person : Person = {
            name : name,
            birthDate : new Date(date),
        }
        return person;
    }catch(e){
        console.error(e);
        return {
            name : "",
            birthDate : new Date("2024-09-16"),
        }
    }
}

const person : Person = getPerson();
let todayDate : Date =   new Date(Date.now());

function age(info : Person, todayDate : Date) : number{
    try{
        if(!info || !todayDate) throw new Error("the person info is empty:");
        return  todayDate.getFullYear() - info.birthDate.getFullYear() ;
    }catch(e){
       console.error(e);
       return 0;
    }
}

const Age : number = age(person,todayDate);

function rederAge(info : Person, age : number){
    document.write(`<br> Person info: <br> Name: ${info.name}. <br> Birth date: ${info.birthDate.toISOString().slice(0,10)} <br> Age: ${age}`);
}

rederAge(person,Age);

//Excersise 5:
interface Car{
    manufacturer: string;
    model: string;
    fuelEffect: string;
}

interface Trip{
    distance: number;
    fuelprice: number;
}

function getCar() : Car{
    try{
        const manufacturer = prompt("Enter car manufacturer:");
        const model = prompt("Enter car model:");
        let fueleffect = prompt("Enter car fuel effect:") || "High";

        fueleffect=fueleffect?.toLowerCase();
        if(!manufacturer || !model || (fueleffect !== "low" && fueleffect !== "high" && fueleffect !== "med")) throw new Error("Invalid inputs");

        const car : Car = {
            manufacturer: manufacturer,
            model: model,
            fuelEffect: fueleffect,
        }
        return car;
    }catch(e){
        console.error(e);
        return {
            manufacturer: "Ibiza",
            model: "Seat",
            fuelEffect: "High",
        }
    }
}

const car : Car = getCar();

function getTrip() : Trip{
    try{
        const distance = Number(prompt("Enter your car distance:"));
        const fuelprice = Number(prompt("Enter your car fuel price:"));
        
        if(!distance || !fuelprice) throw new Error("Invalid input");

        const trip : Trip = {
            distance: distance,
            fuelprice: fuelprice,
        }

        return trip;
    }catch(e){
        console.error(e);
        return {
            distance: 0,
            fuelprice: 0 ,
        }
    }
}

const trip : Trip = getTrip();

function fuelExpenses (fuelInfo : Trip) : number{
    return fuelInfo.distance * fuelInfo.fuelprice;
}

const fuelexpenses : number = fuelExpenses(trip);

function rederFuel (carInfo : Car, fuelInfo : Trip , expenses : number){
    document.write(`<br> <b>Car info : </b> <br> Make: ${carInfo.manufacturer} <br> Model: ${carInfo.model}
        <br> Fuel efficiency: ${carInfo.fuelEffect} <br>
        <b> Car Trip Info:</b><br> Distance: ${fuelInfo.distance} <br> Fuel Price: ${fuelInfo.fuelprice}
        <br> Base on the car info and car trip your fuel cost is ${expenses}`);
}

rederFuel(car,trip,fuelexpenses);