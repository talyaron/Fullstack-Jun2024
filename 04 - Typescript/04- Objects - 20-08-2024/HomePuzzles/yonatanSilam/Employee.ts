interface Employee{
    name:string,
    baseSalary:number,
    department:Department;
}
interface Department{
    name:string|null,
    salaryMultiplier:number;
}
const department1:Department={
    name:"fitness",
    salaryMultiplier:1.2
}
const department2:Department={
    name:"data",
    salaryMultiplier:1.5
}
const worker1= new Employee("yonatan",10000,department1);
const worker2:Employee={
    name: "noy",
    baseSalary: 12000,
    department:department2
}

function Employee(name:string,baseSalary:number,department:object){
    this.name= name;
    this.baseSalary= baseSalary;
    this.department= department;
}
function Employee1():Employee{
    const name=prompt("pls enter a name");
    const baseSalary= Number(prompt("pls enter a salary"));
    const departmant={
        name: prompt("pls enter a departmant name"),
        salaryMultiplier:Number(prompt("pls enter a salaryM"))
    }
    if(name!= null && departmant!= null){
    const worker3:Employee={
        name: name,
        baseSalary: baseSalary,
        department:departmant
    }
    return worker3;
}
else{
const worker3:Employee={
    name: "",
    baseSalary: 0,
    department:department1
}
return worker3;

}
}

function finalSalary(worker:Employee):number{
    const {baseSalary,department}=worker;
    const sum:number=baseSalary * department.salaryMultiplier;
    return sum;
}
// debugger;
const worker3=Employee1();
document.write(`the finel salary of ${worker3.name} is ${finalSalary(worker3)}|||`)
document.write(`the finel salary of ${worker2.name} is ${finalSalary(worker2)}|||`)
document.write(`the finel salary of ${worker1.name} is ${finalSalary(worker1)}`)

