// exercise 1- Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
function calculateArea(circle) {
    try {
        if (circle.radius < 0) {
            throw new Error("הרדיוס לא יכול להיות שלילי.");
        }
        var area = Math.PI * Math.pow(circle.radius, 2);
        return area;
    }
    catch (error) {
        console.error("שגיאה בחישוב השטח:", error.message);
        return document.write("The circle area cannot be negative");
    }
}
var radiusInput = prompt("הזן את הרדיוס של העיגול:");
var radius = Number(radiusInput);
if (isNaN(radius)) {
    console.error("הרדיוס שהוזן אינו מספר תקין.");
}
else {
    var myCircle = { radius: radius };
    var area = calculateArea(myCircle);
    document.write("The circle area is: " + area);
    console.log("The circle area is:", area);
}
