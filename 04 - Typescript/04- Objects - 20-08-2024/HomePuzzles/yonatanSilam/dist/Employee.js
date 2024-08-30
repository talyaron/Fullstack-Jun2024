var department1 = {
    name: "fitness",
    salaryMultiplier: 1.2
};
var department2 = {
    name: "data",
    salaryMultiplier: 1.5
};
var worker1 = new Employee("yonatan", 10000, department1);
var worker2 = {
    name: "noy",
    baseSalary: 12000,
    department: department2
};
function Employee(name, baseSalary, department) {
    this.name = name;
    this.baseSalary = baseSalary;
    this.department = department;
}
function Employee1() {
    var name = prompt("pls enter a name");
    var baseSalary = Number(prompt("pls enter a salary"));
    var departmant = {
        name: prompt("pls enter a departmant name"),
        salaryMultiplier: Number(prompt("pls enter a salaryM"))
    };
    if (name != null && departmant != null) {
        var worker3_1 = {
            name: name,
            baseSalary: baseSalary,
            department: departmant
        };
        return worker3_1;
    }
    else {
        var worker3_2 = {
            name: "",
            baseSalary: 0,
            department: department1
        };
        return worker3_2;
    }
}
function finalSalary(worker) {
    var baseSalary = worker.baseSalary, department = worker.department;
    var sum = baseSalary * department.salaryMultiplier;
    return sum;
}
// debugger;
var worker3 = Employee1();
document.write("the finel salary of " + worker3.name + " is " + finalSalary(worker3) + "|||");
document.write("the finel salary of " + worker2.name + " is " + finalSalary(worker2) + "|||");
document.write("the finel salary of " + worker1.name + " is " + finalSalary(worker1));
