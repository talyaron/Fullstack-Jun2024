// Exercise 4: Employees and Projects
// TODO: Implement a function getEmployeesOnProject that returns all employees working on a specific project
// Function signature: getEmployeesOnProject(projectId: number, employees: Employee[], employeeProjects: EmployeeProject[]): Employee[]
function getEmployeesOnProject(projectId, employees, employeeProjects) {
    // get all employee IDs that are working on the project
    var employeeIds = employeeProjects
        .filter(function (employeeProject) { return employeeProject.projectId === projectId; })
        .map(function (employeeProject) { return employeeProject.employeeId; });
    return employees.filter(function (employee) { return employeeIds.includes(employee.id); });
}
// Employees
var employees = [
    { id: 1, name: "Alice", department: "Engineering" },
    { id: 2, name: "Bob", department: "Engineering" },
    { id: 3, name: "Charlie", department: "Design" },
    { id: 4, name: "David", department: "Design" },
    { id: 5, name: "Eve", department: "Marketing" },
    { id: 6, name: "Frank", department: "Marketing" },
    { id: 7, name: "Grace", department: "HR" },
];
// Projects
var projects = [
    {
        id: 1,
        name: "Project A",
        startDate: new Date("2021-01-01"),
        endDate: new Date("2021-06-30")
    },
    {
        id: 2,
        name: "Project B",
        startDate: new Date("2021-02-01"),
        endDate: new Date("2021-07-31")
    },
    {
        id: 3,
        name: "Project C",
        startDate: new Date("2021-03-01"),
        endDate: new Date("2021-08-31")
    },
    {
        id: 4,
        name: "Project D",
        startDate: new Date("2021-04-01"),
        endDate: new Date("2021-09-30")
    },
];
// Employee Projects
var employeeProjects = [
    { employeeId: 1, projectId: 1, role: "Developer" },
    { employeeId: 2, projectId: 1, role: "Designer" },
    { employeeId: 3, projectId: 2, role: "Developer" },
    { employeeId: 4, projectId: 2, role: "Designer" },
    { employeeId: 5, projectId: 3, role: "Developer" },
    { employeeId: 6, projectId: 3, role: "Designer" },
    { employeeId: 7, projectId: 4, role: "Developer" },
];
// Test cases
console.log(getEmployeesOnProject(1, employees, employeeProjects));
console.log(getEmployeesOnProject(2, employees, employeeProjects));
console.log(getEmployeesOnProject(3, employees, employeeProjects));
// function fo print the result
function printEmployeesOnProject(projectId, employees, employeeProjects) {
    var employeesOnProject = getEmployeesOnProject(projectId, employees, employeeProjects);
    var project = projects.find(function (project) { return project.id === projectId; });
    console.log("Employees working on " + project.name + ":");
    employeesOnProject.forEach(function (employee) {
        console.log("- " + employee.name + ", ID: " + employee.id + " (" + employee.department + ")");
    });
}
// Test cases
printEmployeesOnProject(1, employees, employeeProjects);
printEmployeesOnProject(2, employees, employeeProjects);
printEmployeesOnProject(3, employees, employeeProjects);
printEmployeesOnProject(4, employees, employeeProjects);
