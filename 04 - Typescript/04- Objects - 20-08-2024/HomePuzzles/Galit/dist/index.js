//// 1. Book Information ////
function getEmployeeInfo() {
    try {
        var name = prompt("Enter Employee name");
        if (!name) {
            throw new Error("Invalid input: name is null.");
        }
        var baseSalary = Number(prompt("Enter base salary"));
        if (isNaN(baseSalary) || baseSalary <= 0) {
            throw new Error("Invalid input: base salary must be a positive number.");
        }
        var department = prompt("Enter department");
        if (!department) {
            throw new Error("Invalid input: department is null.");
        }
        return {
            name: name,
            baseSalary: baseSalary,
            department: department
        };
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to get employee info.');
    }
}
function getDepartmentInfo() {
    try {
        var department = prompt("Enter department name");
        if (!department) {
            throw new Error("Invalid input: department is null.");
        }
        var salaryMultiplier = Number(prompt("Enter salary multiplier"));
        if (isNaN(salaryMultiplier) || salaryMultiplier <= 0) {
            throw new Error("Invalid input: salary multiplier must be a positive number.");
        }
        return {
            department: department,
            salaryMultiplier: salaryMultiplier
        };
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to get department info.');
    }
}
function calculateFinalSalary(employee, department) {
    if (employee.department !== department.department) {
        throw new Error("Mismatch: The employee does not belong to the " + department.department + " department.");
    }
    var finalSalary = employee.baseSalary * department.salaryMultiplier;
    return finalSalary;
}
try {
    var employee = getEmployeeInfo();
    var department = getDepartmentInfo();
    var finalSalary = calculateFinalSalary(employee, department);
    console.log("Final salary for " + employee.name + " is: " + finalSalary);
    document.write("Final salary for " + employee.name + " is: " + finalSalary);
}
catch (error) {
    console.error(error);
    document.write("Error: " + error.message);
}
function calculateVolume(shape) {
    try {
        switch (shape.type) {
            case 'cube':
                return Math.pow(shape.sideLength, 3);
            case 'sphere':
                return (4 / 3) * Math.PI * Math.pow(shape.radius, 3);
            case 'cylinder':
                return Math.PI * Math.pow(shape.radius, 2) * shape.height;
            default:
                throw new Error("Invalid shape type.");
        }
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to calculate volume.');
    }
}
function getShapeInfo() {
    try {
        var shapeType = prompt("Enter shape type (cube, sphere, cylinder)");
        if (!shapeType || !['cube', 'sphere', 'cylinder'].includes(shapeType)) {
            throw new Error("Invalid input: shape type is not recognized.");
        }
        switch (shapeType) {
            case 'cube':
                var sideLength = Number(prompt("Enter side length"));
                if (isNaN(sideLength) || sideLength <= 0) {
                    throw new Error("Invalid input: side length must be a positive number.");
                }
                return { type: 'cube', sideLength: sideLength };
            case 'sphere':
                var radiusSphere = Number(prompt("Enter radius"));
                if (isNaN(radiusSphere) || radiusSphere <= 0) {
                    throw new Error("Invalid input: radius must be a positive number.");
                }
                return { type: 'sphere', radius: radiusSphere };
            case 'cylinder':
                var radiusCylinder = Number(prompt("Enter radius"));
                var heightCylinder = Number(prompt("Enter height"));
                if (isNaN(radiusCylinder) || radiusCylinder <= 0 || isNaN(heightCylinder) || heightCylinder <= 0) {
                    throw new Error("Invalid input: radius and height must be positive numbers.");
                }
                return { type: 'cylinder', radius: radiusCylinder, height: heightCylinder };
            default:
                throw new Error("Invalid shape type.");
        }
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to get shape information.');
    }
}
// Get shape info from user
var shape = getShapeInfo();
// Calculate volume
var volume = calculateVolume(shape);
// Output results
console.log("The size of the " + shape.type + " is: " + volume);
document.write("The size of the " + shape.type + " is: " + volume + "<br>");
// //// 10. Online Order System ////
// Define interfaces for Product (with id, name, and price), Customer 
// (with name and address), and Order (with customer, product, and quantity). Implement functions to:
// - createOrder: Takes a Customer, Product, and quantity, returns an Order.
// - calculateTotal: Takes an Order and returns the total price.
// - generateInvoice: Takes an Order and returns a formatted invoice string.
