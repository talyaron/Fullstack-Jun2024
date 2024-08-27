interface BankAccount{
    accountNumber:number;
    balance:number
}
function deposit(bank :BankAccount,amount:number):BankAccount{
    bank.balance=bank.balance+amount;
    return bank
}
function withdraw(bank :BankAccount,amount:number):{bankAccount:BankAccount,error?:string}{
    if(bank.balance>=amount){
    bank.balance=bank.balance-amount;
    return{bankAccount:bank,error:"withdraw succeeded"}
    }
    else{
        return{bankAccount:bank,error:"you dont have enough money!!"}
    }
}
function transfer(bankGive:BankAccount,bankGet:BankAccount,amount:number):{bankGive:BankAccount,bankGet:BankAccount,error?:string}{
    if(bankGive.balance>=amount){
        const x=withdraw(bankGive,amount);
        const newBankGive=x.bankAccount;
        const newBankGet =deposit(bankGet,amount);
        return {bankGive:newBankGive,bankGet:newBankGet,error:"transfer complete"}
    }
    else{
        return {bankGive:bankGive,bankGet:bankGet,error:"cant do the transfer"}
        }

    }



const yonatanB:BankAccount={
    accountNumber:12345,
    balance: 250
}
const noyB:BankAccount={
    accountNumber:54321,
    balance: 2000
}
// const bank:BankAccount=deposit(yonatanB,1000);
// document.write(`${bank.balance}  ||||| `)

// const bankGet=withdraw(yonatanB,50);
// document.write(`${bankGet.bankAccount.balance} ${bankGet.error} |||`)


transfer(noyB,yonatanB,2000);

document.write(`now noy has ${noyB.balance} and yonatan has ${yonatanB.balance}`)