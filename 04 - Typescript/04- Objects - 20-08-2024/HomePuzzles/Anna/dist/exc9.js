function getCube() {
    try {
        var width = Number(prompt("Enter cube width:"));
        if (width < 0)
            throw new Error("Input invalid!!!");
        var cube = {
            width: width
        };
        return cube;
    }
    catch (e) {
        console.error(e);
        return {
            width: 1
        };
    }
}
function getSphere() {
    try {
        var radius = Number(prompt("Enter sphere radius:"));
        if (radius < 0)
            throw new Error("Input invalid!!!");
        return {
            radius: radius
        };
    }
    catch (e) {
        console.error(e);
        return {
            radius: 1
        };
    }
}
function getCylinder() {
    try {
        var baseRadius = Number(prompt("Enter cylinder base radius:"));
        var height = Number(prompt("Enter cylinder height"));
        if (baseRadius < 0 || height < 0)
            throw new Error("Invalid input");
        return {
            baseRadius: baseRadius,
            height: height
        };
    }
    catch (e) {
        console.error(e);
        return {
            baseRadius: 1,
            height: 1
        };
    }
}
