// exercise 1- Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
function convertTemperature(temp) {
    try {
        var convertedValue = (temp.value * 9 / 5) + 32;
        return { value: convertedValue, unit: 'F' };
    }
    catch (_a) {
        try {
            var convertedValue = (temp.value - 32) * 5 / 9;
            return { value: convertedValue, unit: 'C' };
        }
        catch (_b) {
            throw new Error("Unit must be either 'C' or 'F'");
        }
    }
}
var valueInput = prompt("Enter the temperature value:");
var unitInput = prompt("Enter the temperature unit (C or F):");
var temp = { value: parseFloat(valueInput), unit: unitInput };
try {
    var convertedTemp = convertTemperature(temp);
    document.write("Converted temperature: " + convertedTemp.value + "\u00B0" + convertedTemp.unit);
    console.log("Converted temperature: " + convertedTemp.value + "\u00B0" + convertedTemp.unit);
}
catch (error) {
    console.error("An error occurred:", error.message);
}
