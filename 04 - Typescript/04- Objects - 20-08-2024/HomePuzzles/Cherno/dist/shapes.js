function cubeArea(cube) {
    return cube.width * cube.length * cube.height;
}
function sphereArea(sphere) {
    return 4 * Math.PI * sphere.radius * sphere.radius;
}
function cylinderArea(cylinder) {
    return Math.PI * cylinder.height * cylinder.radius * cylinder.radius;
}
function shapeTester() {
    var shape = String(prompt("enter shape"));
    switch (shape) {
        case ("cube"):
            {
                var cube = { width: 0, length: 0, height: 0 };
                cube.width = Number(prompt("enter cube's width"));
                cube.length = Number(prompt("enter cube's length"));
                cube.height = Number(prompt("enter cube's height"));
                document.write("cube's volume is " + cubeArea(cube) + " units");
                break;
            }
        case ("sphere"):
            {
                var sphere = { radius: 0 };
                sphere.radius = Number(prompt("enter sphere's radius"));
                document.write("sphere's volume is " + sphereArea(sphere) + " units");
                break;
            }
        case ("cylinder"):
            {
                var cylinder = { radius: 0, height: 0 };
                cylinder.radius = Number(prompt("enter cylinder's radius"));
                cylinder.height = Number(prompt("enter cylinder's height"));
                document.write("cylinder's volume is " + cylinderArea(cylinder) + " units");
                break;
            }
    }
}
shapeTester();
