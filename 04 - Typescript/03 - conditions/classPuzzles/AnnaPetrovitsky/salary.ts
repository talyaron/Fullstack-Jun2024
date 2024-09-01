const salary: number = Number(prompt("Please enter your salary:"));

calculatTax(salary);

function calculatTax (salary : number) : void{
    let restAmount : number = 0;
    let taxPrecent : number = 0;
    if(salary < 10001){
        restAmount = 0;
        taxPrecent = 0;
    }
    else if (salary < 50001){
        restAmount = salary * 0.9;
        taxPrecent = 10;
    }
    else if(salary < 100001){
        restAmount = salary * 0.8;
        taxPrecent = 20;
    }
    else{
        restAmount = salary * 0.7;
        taxPrecent = 30;
    }
    let Tax : number = salary - restAmount;
    document.write('Base on salary ${salary} , The tax rate is ${taxPrecent} the amount is ${Tax} the salary after ${restAmount} ');
}