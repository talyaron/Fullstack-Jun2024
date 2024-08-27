interface Employee
{
    name: string;
    baseSalary: number;
    department: Department;
}

interface Department
{
    name: string;
    salaryMultiplier: number;
}

function calcSalary(employee: Employee): number
{
    return employee.baseSalary * employee.department.salaryMultiplier
}

function salaryTester(): void
{
    const mult: number = Number(prompt("give department multiplier"));
    const department: Department = {name:"", salaryMultiplier: mult}

    const base: number = Number(prompt("give employee salary"));
    const employee: Employee = {name:"", baseSalary: base, department: department};


    document.write(`employee's salary is ${calcSalary(employee)}`);
}

salaryTester();