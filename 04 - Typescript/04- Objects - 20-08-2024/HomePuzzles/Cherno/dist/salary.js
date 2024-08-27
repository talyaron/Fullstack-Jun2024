function calcSalary(employee) {
    return employee.baseSalary * employee.department.salaryMultiplier;
}
function salaryTester() {
    var mult = Number(prompt("give department multiplier"));
    var department = { name: "", salaryMultiplier: mult };
    var base = Number(prompt("give employee salary"));
    var employee = { name: "", baseSalary: base, department: department };
    document.write("employee's salary is " + calcSalary(employee));
}
salaryTester();
