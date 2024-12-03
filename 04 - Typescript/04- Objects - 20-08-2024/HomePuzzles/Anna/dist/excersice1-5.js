function getRadius() {
    try {
        var radiusSize = Number(prompt("Please enter a radius:"));
        if (!radiusSize)
            throw new Error("Invalid Input");
        var radius_1 = {
            radius: radiusSize
        };
        return radius_1;
    }
    catch (error) {
        console.error(error);
        return {
            radius: 0
        };
    }
}
var radius = getRadius();
function calcCirclearea(radius) {
    return Math.pow(radius.radius, 2) * Math.PI;
}
var circleArea = calcCirclearea(radius);
function rederCircle(circleSize, area) {
    document.write("Base on circle radius " + circleSize.radius + " the circle area is " + area);
}
rederCircle(radius, circleArea);
function getTemp() {
    try {
        var value = Number(prompt("Please enter a value"));
        var tempUnit = prompt("Please enter a Unit:") || "";
        tempUnit = tempUnit === null || tempUnit === void 0 ? void 0 : tempUnit.toUpperCase();
        if (!value || !tempUnit || (tempUnit !== "C" && tempUnit !== "F"))
            throw new Error("Invalid Input");
        var Temperature_1 = {
            value: value,
            unit: tempUnit
        };
        return Temperature_1;
    }
    catch (e) {
        console.error(e);
        return {
            value: 0,
            unit: ""
        };
    }
}
var Temperature = getTemp();
function convertTemp(newTemp) {
    try {
        if (!newTemp.value || !newTemp.unit)
            throw new Error("Invalid Object size");
        if (newTemp.unit === "F") {
            return {
                unit: "C",
                value: (newTemp.value - 32) / 1.8
            };
        }
        else {
            return {
                unit: "F",
                value: (newTemp.value * 1.8) + 32
            };
        }
    }
    catch (e) {
        console.error(e);
        return {
            value: 0,
            unit: ""
        };
    }
}
var convertefTemp = convertTemp(Temperature);
function rederTemp(temp, convertTemp) {
    document.write("<br> The temp that user enter is " + temp.value + temp.unit + " after converted the temp is " + convertTemp.value + convertTemp.unit);
}
rederTemp(Temperature, convertefTemp);
function getPerson() {
    try {
        var name = prompt("Please enter your name:") || "";
        var date = prompt("Please enter your birth date: (in this template year-month-date") || "2024-09-04";
        if (!name || !date)
            throw new Error("Invalid Person details");
        var person_1 = {
            name: name,
            birthDate: new Date(date)
        };
        return person_1;
    }
    catch (e) {
        console.error(e);
        return {
            name: "",
            birthDate: new Date("2024-09-16")
        };
    }
}
var person = getPerson();
var todayDate = new Date(Date.now());
function age(info, todayDate) {
    try {
        if (!info || !todayDate)
            throw new Error("the person info is empty:");
        return todayDate.getFullYear() - info.birthDate.getFullYear();
    }
    catch (e) {
        console.error(e);
        return 0;
    }
}
var Age = age(person, todayDate);
function rederAge(info, age) {
    document.write("<br> Person info: <br> Name: " + info.name + ". <br> Birth date: " + info.birthDate.toISOString().slice(0, 10) + " <br> Age: " + age);
}
rederAge(person, Age);
function getCar() {
    try {
        var manufacturer = prompt("Enter car manufacturer:");
        var model = prompt("Enter car model:");
        var fueleffect = prompt("Enter car fuel effect:") || "High";
        fueleffect = fueleffect === null || fueleffect === void 0 ? void 0 : fueleffect.toLowerCase();
        if (!manufacturer || !model || (fueleffect !== "low" && fueleffect !== "high" && fueleffect !== "med"))
            throw new Error("Invalid inputs");
        var car_1 = {
            manufacturer: manufacturer,
            model: model,
            fuelEffect: fueleffect
        };
        return car_1;
    }
    catch (e) {
        console.error(e);
        return {
            manufacturer: "Ibiza",
            model: "Seat",
            fuelEffect: "High"
        };
    }
}
var car = getCar();
function getTrip() {
    try {
        var distance = Number(prompt("Enter your car distance:"));
        var fuelprice = Number(prompt("Enter your car fuel price:"));
        if (!distance || !fuelprice)
            throw new Error("Invalid input");
        var trip_1 = {
            distance: distance,
            fuelprice: fuelprice
        };
        return trip_1;
    }
    catch (e) {
        console.error(e);
        return {
            distance: 0,
            fuelprice: 0
        };
    }
}
var trip = getTrip();
function fuelExpenses(fuelInfo) {
    return fuelInfo.distance * fuelInfo.fuelprice;
}
var fuelexpenses = fuelExpenses(trip);
function rederFuel(carInfo, fuelInfo, expenses) {
    document.write("<br> <b>Car info : </b> <br> Make: " + carInfo.manufacturer + " <br> Model: " + carInfo.model + "\n        <br> Fuel efficiency: " + carInfo.fuelEffect + " <br>\n        <b> Car Trip Info:</b><br> Distance: " + fuelInfo.distance + " <br> Fuel Price: " + fuelInfo.fuelprice + "\n        <br> Base on the car info and car trip your fuel cost is " + expenses);
}
rederFuel(car, trip, fuelexpenses);
