//  ### 1. Book Information
// Create an interface for a Book with properties: title, author, and publicationYear. Write a function that takes a Book object and returns a formatted string with the book's information.
function getBookInfo() {
    try {
        var title = prompt("Enter book title") || "";
        var author = prompt("Enter author") || "";
        var publicationYear = Number(prompt("Enter publication year"));
        if (isNaN(publicationYear)) {
            throw new Error("Invalid input: publication year must be a number.");
        }
        var book_1 = {
            title: title,
            author: author,
            publicationYear: publicationYear
        };
        return book_1;
    }
    catch (error) {
        console.error(error);
        return {
            title: "",
            author: "",
            publicationYear: 0
        };
    }
}
var book = getBookInfo();
console.log(book);
document.write("The title of the book is \"" + book.title + "\", the author is " + book.author + ", and it was published in " + book.publicationYear + ".");
function getCircle() {
    try {
        var radiusInput = Number(prompt("Enter radius"));
        if (isNaN(radiusInput) || radiusInput <= 0) {
            throw new Error("Invalid input: radius must be a positive number.");
        }
        var circle_1 = {
            radius: radiusInput
        };
        return circle_1;
    }
    catch (error) {
        console.error(error);
        return {
            radius: 0
        };
    }
}
function calculateArea(circle) {
    try {
        return Math.PI * Math.pow(circle.radius, 2);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
var circle = getCircle();
var area = calculateArea(circle);
document.write("The area of the circle is " + area.toFixed(2));
function getTemperature() {
    try {
        var value = Number(prompt("Enter temperature"));
        var unit = prompt("Enter unit (C or F)");
        if (!unit) {
            throw new Error("Invalid input: unit cannot be empty.");
        }
        unit = unit.toUpperCase();
        if (unit !== "C" && unit !== "F") {
            throw new Error("Invalid input: unit must be 'C' or 'F'.");
        }
        if (isNaN(value)) {
            throw new Error("Invalid input: temperature must be a number.");
        }
        return { value: value, unit: unit };
    }
    catch (error) {
        console.error(error);
        return {
            value: 0,
            unit: "C"
        };
    }
}
function convertTemperature(temperature) {
    try {
        var convertedValue = void 0;
        var convertedUnit = void 0;
        if (temperature.unit === "C") {
            convertedValue = (temperature.value * 9) / 5 + 32;
            convertedUnit = "F";
        }
        else if (temperature.unit === "F") {
            convertedValue = ((temperature.value - 32) * 5) / 9;
            convertedUnit = "C";
        }
        else {
            throw new Error("Invalid unit: must be 'C' or 'F'.");
        }
        return {
            value: convertedValue,
            unit: convertedUnit
        };
    }
    catch (error) {
        console.error(error);
        return {
            value: 0,
            unit: temperature.unit
        };
    }
}
var temperature = getTemperature();
var convertedTemperature = convertTemperature(temperature);
document.write("The temperature in " + convertedTemperature.unit + " is " + convertedTemperature.value.toFixed(2));
