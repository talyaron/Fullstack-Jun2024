interface Rectangle {
    width: number;
    height: number;
}

function calculateArea(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
}

function getUserInput(): Rectangle {
    const widthInput = prompt("Please enter the width of the rectangle:");
    const heightInput = prompt("Please enter the height of the rectangle:");

    const width = parseFloat(widthInput || ''); 
    const height = parseFloat(heightInput || ''); 
    if (isNaN(width) || isNaN(height)) {
        throw new Error("Width and height must be valid numbers.");
    }

    if (width <= 0 || height <= 0) {
        throw new Error("Width and height must be positive numbers.");
    }

    return { width, height };
}

try {
    const myRectangle = getUserInput();
    const area = calculateArea(myRectangle);
    document.write(`Area of the rectangle: ${area}`);
} catch (error) {
    document.write(error.message);
}
