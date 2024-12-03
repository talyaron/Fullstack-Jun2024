interface Employee {
    name : string;
    baseSalary: number;
    department : string;
}

interface Department{
    name: string;
    salaryMultiplier : number;
}

function getEmployee() : Employee{
    try{
        const name = prompt("Enter employee name:");
        const salary = Number(prompt("Enter employee base salary:"));
        const department = prompt("Enter employee department");

        if(!name || !department || salary<0) throw new Error("Invalidinput!!!");

        const employee : Employee = {
            name: name,
            baseSalary: salary,
            department: department,
        }

        return employee;
    }catch(e){
        console.error(e);
        return{
            name: "",
            baseSalary: 0,
            department: "",
        }
    }
}

function getDepartment() : Department{
    try{
        const name = prompt("Please enter your department:");
        const salaryMultiplier = Number(prompt("Enter departent salary multiplier"));

        if(!name || salaryMultiplier<0) throw new Error("Invalid input!!!");

        const department : Department = {
            name: name,
            salaryMultiplier: salaryMultiplier,
        }

        return department;
    }catch(e){
        console.error(e);
        return{
            name: "",
            salaryMultiplier: 0,
        }
        
    }
}

const employeeDetails : Employee = getEmployee();
const departmentDetails : Department = getDepartment();

function calcSalary(employeeInfo : Employee , departentInfo : Department) : number {
    try{
        if(!employeeInfo || !departentInfo) throw new Error("Invalid input !!!");

        if(employeeInfo.department === departentInfo.name){
            return employeeInfo.baseSalary * departentInfo.salaryMultiplier;
        }
        else{
            return employeeInfo.baseSalary + 0;
        }
    }catch(e){
        console.error(e);
        return 0;
    }
}

const newSalary = calcSalary(employeeDetails,departmentDetails);

function renderSalary(employeeInfo : Employee, departentInfo : Department, newSalary : number){
    document.write(`<b> Employee details: </b> <br> Employee name: ${employeeInfo.name} <br> Base salary: ${employeeInfo.baseSalary} <br> Department: ${employeeInfo.department}
        <br> <b> Department details: </b> <br> Department: ${departentInfo.name} <br> Salary Multiplier: ${departentInfo.salaryMultiplier} <br>
        <b> Calculate salary: </b> ${newSalary}`);
}

renderSalary(employeeDetails,departmentDetails,newSalary);