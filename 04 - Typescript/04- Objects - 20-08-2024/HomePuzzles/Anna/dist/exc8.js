function getEmployee() {
    try {
        var name = prompt("Enter employee name:");
        var salary = Number(prompt("Enter employee base salary:"));
        var department = prompt("Enter employee department");
        if (!name || !department || salary < 0)
            throw new Error("Invalidinput!!!");
        var employee = {
            name: name,
            baseSalary: salary,
            department: department
        };
        return employee;
    }
    catch (e) {
        console.error(e);
        return {
            name: "",
            baseSalary: 0,
            department: ""
        };
    }
}
function getDepartment() {
    try {
        var name = prompt("Please enter your department:");
        var salaryMultiplier = Number(prompt("Enter departent salary multiplier"));
        if (!name || salaryMultiplier < 0)
            throw new Error("Invalid input!!!");
        var department = {
            name: name,
            salaryMultiplier: salaryMultiplier
        };
        return department;
    }
    catch (e) {
        console.error(e);
        return {
            name: "",
            salaryMultiplier: 0
        };
    }
}
var employeeDetails = getEmployee();
var departmentDetails = getDepartment();
function calcSalary(employeeInfo, departentInfo) {
    try {
        if (!employeeInfo || !departentInfo)
            throw new Error("Invalid input !!!");
        if (employeeInfo.department === departentInfo.name) {
            return employeeInfo.baseSalary * departentInfo.salaryMultiplier;
        }
        else {
            return employeeInfo.baseSalary + 0;
        }
    }
    catch (e) {
        console.error(e);
        return 0;
    }
}
var newSalary = calcSalary(employeeDetails, departmentDetails);
function renderSalary(employeeInfo, departentInfo, newSalary) {
    document.write("<b> Employee details: </b> <br> Employee name: " + employeeInfo.name + " <br> Base salary: " + employeeInfo.baseSalary + " <br> Department: " + employeeInfo.department + "\n        <br> <b> Department details: </b> <br> Department: " + departentInfo.name + " <br> Salary Multiplier: " + departentInfo.salaryMultiplier + " <br>\n        <b> Calculate salary: </b> " + newSalary);
}
renderSalary(employeeDetails, departmentDetails, newSalary);
