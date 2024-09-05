function getBankAccount() {
    try {
        var accountNum = Number(prompt("Enter your bank account number:"));
        var balance = Number(prompt("Enter your bank bakance:"));
        if (accountNum < 0)
            throw new Error("Invalid input!!!");
        var account = {
            accountNumber: accountNum,
            balance: balance
        };
        return account;
    }
    catch (e) {
        console.error(e);
        return {
            accountNumber: 0,
            balance: 0
        };
    }
}
var bankAccount = getBankAccount();
// Deposit Function
function deposit(bankAccount, amount) {
    try {
        if (amount < 0)
            throw new Error("The amount is negative!!!");
        var depositAccount = {
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance + amount
        };
        return depositAccount;
    }
    catch (e) {
        console.error(e);
        return {
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance
        };
    }
}
var depositAmount = Number(prompt("Which amount you want to deposit:"));
var newBalance = deposit(bankAccount, depositAmount);
function withDraw(bankAccount, amount) {
    try {
        if (amount > bankAccount.balance)
            throw new Error("Invalid Amount");
        var withdrawAccount = {
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance - amount
        };
        return withdrawAccount;
    }
    catch (e) {
        console.error(e);
        return {
            accountNumber: bankAccount.accountNumber,
            balance: bankAccount.balance
        };
    }
}
var withdrawAmount = Number(prompt("Which amount you want to withdraw:"));
var withDrawBank = withDraw(bankAccount, withdrawAmount);
var secondBankAccount = getBankAccount();
function transfer(firstAcount, secondAcount, amount) {
    try {
        if (amount < 0 || !firstAcount || !secondAcount)
            throw new Error("Invalid input!!!");
        var updatedFirst = {
            accountNumber: firstAcount.accountNumber,
            balance: firstAcount.balance - amount
        };
        var updateSecond = {
            accountNumber: secondAcount.accountNumber,
            balance: secondAcount.balance + amount
        };
        return { updatedFirst: updatedFirst, updateSecond: updateSecond };
    }
    catch (e) {
        console.error(e);
        amount = 0;
        return { updatedFirst: firstAcount, updateSecond: secondAcount };
    }
}
var transferAmount = Number(prompt("Which amount you want to transfer:"));
var transferAction = transfer(bankAccount, secondBankAccount, transferAmount);
function rederBank(mainAccount, secondAccount, deposit, withDraw, depositAmount, withdrawAmount, transferAmount, updatedFirstAccount, updateSecondAccount) {
    document.write("<b> Your main bank account info is: </b> Account Number: " + mainAccount.accountNumber + " and your balance is: " + mainAccount.balance + " <br>\n       <b> Deposit action: </b> The amount to deposit is " + depositAmount + " , bank info after deposit Account num: " + deposit.accountNumber + " new balance " + deposit.balance + ". <br>\n       <b> With Draw action: </b> The amount to with draw is " + withdrawAmount + ", bank info after deposit Account num: " + withDraw.accountNumber + " new balance " + withDraw.balance + ". <br>\n       <b> Transfer action : Transfer from acount num " + mainAccount.accountNumber + " acount balance: " + mainAccount.balance + " to accoun num: " + secondAccount.accountNumber + " acount num: " + secondAccount.balance + ", <br>\n       Amount to transfer " + transferAmount + " < br> <b> BANK ACCOUNT DETAILS AFTER TRANSFER: </b> <br> \n       Main account num " + updatedFirstAccount.accountNumber + " new balance " + updatedFirstAccount.balance + ". <br>\n       Destination account num " + updateSecondAccount.accountNumber + " new balance " + updateSecondAccount.balance);
}
rederBank(bankAccount, secondBankAccount, newBalance, withDrawBank, depositAmount, withdrawAmount, transferAmount, transferAction === null || transferAction === void 0 ? void 0 : transferAction.updatedFirst, transferAction === null || transferAction === void 0 ? void 0 : transferAction.updateSecond);
