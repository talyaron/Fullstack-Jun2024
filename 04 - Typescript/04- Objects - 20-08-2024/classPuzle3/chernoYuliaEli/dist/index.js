function rectHandler() {
    var width = Number(prompt("enter rectangle width"));
    var height = Number(prompt("enter rectangle height"));
    try {
        if (!width || !height) {
            throw new Error("invalid rectangle");
        }
        return { width: width, height: height };
    }
    catch (e) {
        console.error(e);
        return { width: width, height: height, error: e };
    }
}
function areaCalculator(rect) {
    return rect.width * rect.height;
}
var rect = rectHandler();
document.write("Your rectangle's area is " + areaCalculator(rect) + " units");
