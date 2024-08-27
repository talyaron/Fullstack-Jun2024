function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}
function getUserInput() {
    var widthInput = prompt("Please enter the width of the rectangle:");
    var heightInput = prompt("Please enter the height of the rectangle:");
    var width = parseFloat(widthInput || '');
    var height = parseFloat(heightInput || '');
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Width and height must be valid numbers.");
    }
    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be positive numbers.");
    }
    return { width: width, height: height };
}
try {
    var myRectangle = getUserInput();
    var area = calculateArea(myRectangle);
    document.write("Area of the rectangle: " + area);
}
catch (error) {
    document.write(error.message);
}
