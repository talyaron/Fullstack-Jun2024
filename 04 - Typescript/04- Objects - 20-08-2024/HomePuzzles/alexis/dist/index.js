// // ### 1. Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
function getValue() {
    try {
        var value = Number(prompt("enter a temperature value"));
        var unit = prompt("enter a temperature value");
        var temp = {
            value: value,
            unit: unit
        };
        if (isNaN(value) || (unit !== "c" || unit !== "C" || unit !== "f" || unit !== "F")) {
            throw new Error("Invalid input.");
        }
        else
            return temp;
    }
    catch (error) {
        console.error(error);
        return {
            value: 0,
            unit: ""
        };
    }
}
var result = getValue();
function convertTemp(result) {
    try {
        if (result.unit === "c" || result.unit === "C") {
            var value = (result.value - 32) * 5 / 9;
            var temperature_1 = {
                value: value,
                unit: result.unit
            };
            console.log(temperature_1);
        }
        else if (result.unit === "f" || result.unit === "F") {
            var value = (result.value * 9 / 5) + 32;
            console.log(temperature);
        }
        var temperature = {
            value: value,
            unit: result.unit
        };
        return temperature;
    }
    catch (error) {
        console.error(error);
        return {
            value: 0,
            unit: ""
        };
    }
}
convertTemp(result);
