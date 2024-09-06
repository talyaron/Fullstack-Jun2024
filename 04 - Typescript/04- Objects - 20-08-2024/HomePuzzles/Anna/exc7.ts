interface BankAccount{
    accountNumber : number;
    balance : number;
}

function getBankAccount() : BankAccount{
    try{
        const accountNum = Number(prompt("Enter your bank account number:"));
        const balance = Number(prompt("Enter your bank bakance:"));

        if(accountNum < 0) throw new Error("Invalid input!!!");

        const account : BankAccount ={
            accountNumber: accountNum,
            balance: balance,
        }

        return account;
    }catch(e){
        console.error(e);
        return{
            accountNumber: 0 ,
            balance: 0,
        }
    }
}

const bankAccount : BankAccount = getBankAccount();

// Deposit Function

function deposit(bankAccount : BankAccount, amount : number) : BankAccount{
    try{
        if(amount<0) throw new Error("The amount is negative!!!")
        const depositAccount : BankAccount = {
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance + amount,
        }

        return depositAccount;
    }catch(e){
        console.error(e);
        return{
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance,
        }
    }
}

const depositAmount : number = Number(prompt("Which amount you want to deposit:"));
const newBalance : BankAccount = deposit(bankAccount,depositAmount);

function withDraw( bankAccount : BankAccount, amount : number) : BankAccount{
    try{
        if(amount > bankAccount.balance) throw new Error("Invalid Amount");

        const withdrawAccount : BankAccount ={
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance - amount,
        }

        return withdrawAccount;
    }catch(e){
        console.error(e);
        return{
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance,
        }
    }
}

const withdrawAmount : number = Number(prompt("Which amount you want to withdraw:"))
const withDrawBank : BankAccount = withDraw(bankAccount,withdrawAmount);

const secondBankAccount : BankAccount = getBankAccount();

function transfer (firstAcount: BankAccount, secondAcount : BankAccount, amount : number): {updatedFirst : BankAccount , updateSecond : BankAccount} {
    try{
        if(amount < 0 || !firstAcount || !secondAcount) throw new Error("Invalid input!!!");

        const updatedFirst : BankAccount = {
            accountNumber: firstAcount.accountNumber,
            balance: firstAcount.balance - amount,
        }

        const updateSecond : BankAccount = {
            accountNumber: secondAcount.accountNumber,
            balance: secondAcount.balance + amount,
        }

        return {updatedFirst,updateSecond};
    }catch(e){
        console.error(e);
        amount = 0;
        return { updatedFirst: firstAcount, updateSecond: secondAcount };
    }
}
const transferAmount : number = Number(prompt("Which amount you want to transfer:"));
const transferAction  = transfer(bankAccount,secondBankAccount,transferAmount);

function rederBank (mainAccount : BankAccount, secondAccount : BankAccount, deposit : BankAccount,withDraw :BankAccount, depositAmount: number , withdrawAmount : number, transferAmount : number , updatedFirstAccount: BankAccount, updateSecondAccount : BankAccount){
    document.write(`<b> Your main bank account info is: </b> Account Number: ${mainAccount.accountNumber} and your balance is: ${mainAccount.balance} <br>
       <b> Deposit action: </b> The amount to deposit is ${depositAmount} , bank info after deposit Account num: ${deposit.accountNumber} new balance ${deposit.balance}. <br>
       <b> With Draw action: </b> The amount to with draw is ${withdrawAmount}, bank info after deposit Account num: ${withDraw.accountNumber} new balance ${withDraw.balance}. <br>
       <b> Transfer action : Transfer from acount num ${mainAccount.accountNumber} acount balance: ${mainAccount.balance} to accoun num: ${secondAccount.accountNumber} acount num: ${secondAccount.balance}, <br>
       Amount to transfer ${transferAmount} < br> <b> BANK ACCOUNT DETAILS AFTER TRANSFER: </b> <br> 
       Main account num ${updatedFirstAccount.accountNumber} new balance ${updatedFirstAccount.balance}. <br>
       Destination account num ${updateSecondAccount.accountNumber} new balance ${updateSecondAccount.balance}`)
}

rederBank(bankAccount,secondBankAccount,newBalance,withDrawBank,depositAmount,withdrawAmount,transferAmount,transferAction?.updatedFirst,transferAction?.updateSecond)