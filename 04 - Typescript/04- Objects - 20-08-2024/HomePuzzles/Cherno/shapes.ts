interface Cube
{
    width: number;
    length: number;
    height: number;
}

interface Sphere
{
    radius: number;
}

interface Cylinder
{
    radius: number;
    height: number;
}

function cubeArea(cube: Cube): number
{
    return cube.width * cube.length * cube.height;
}

function sphereArea(sphere: Sphere): number
{
    return 4 * Math.PI * sphere.radius * sphere.radius;
}

function cylinderArea(cylinder: Cylinder): number
{
    return Math.PI * cylinder.height * cylinder.radius * cylinder.radius;
}

function shapeTester(): void
{
    const shape: string = String(prompt("enter shape"));

    switch(shape)
    {
        case("cube"):
        {
            const cube: Cube = {width:0, length:0, height:0};

            cube.width = Number(prompt("enter cube's width"));
            cube.length = Number(prompt("enter cube's length"));
            cube.height = Number(prompt("enter cube's height"));

            document.write(`cube's volume is ${cubeArea(cube)} units`);
            break;
        }

        case("sphere"):
        {
            const sphere: Sphere = {radius: 0};

            sphere.radius = Number(prompt("enter sphere's radius"));

            document.write(`sphere's volume is ${sphereArea(sphere)} units`);
            break;
        }

        case("cylinder"):
        {
            const cylinder: Cylinder = {radius: 0, height: 0};

            cylinder.radius = Number(prompt("enter cylinder's radius"));
            cylinder.height = Number(prompt("enter cylinder's height"));

            document.write(`cylinder's volume is ${cylinderArea(cylinder)} units`);
            break;
        }
    }
}

shapeTester();