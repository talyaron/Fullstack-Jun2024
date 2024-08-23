function getRectangleArea() {
    try {
        var height = Number(prompt('Please enter a height'));
        var width = Number(prompt('Please enter a width'));
        var rectangle_1 = {
            height: height,
            width: width
        };
        return rectangle_1.height * rectangle_1.width;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
var rectangle = getRectangleArea();
document.write("The rectangle area is " + rectangle);
