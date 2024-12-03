function deposit(bank, amount) {
    bank.balance = bank.balance + amount;
    return bank;
}
function withdraw(bank, amount) {
    if (bank.balance >= amount) {
        bank.balance = bank.balance - amount;
        return { bankAccount: bank, error: "withdraw succeeded" };
    }
    else {
        return { bankAccount: bank, error: "you dont have enough money!!" };
    }
}
function transfer(bankGive, bankGet, amount) {
    if (bankGive.balance >= amount) {
        var x = withdraw(bankGive, amount);
        var newBankGive = x.bankAccount;
        var newBankGet = deposit(bankGet, amount);
        return { bankGive: newBankGive, bankGet: newBankGet, error: "transfer complete" };
    }
    else {
        return { bankGive: bankGive, bankGet: bankGet, error: "cant do the transfer" };
    }
}
var yonatanB = {
    accountNumber: 12345,
    balance: 250
};
var noyB = {
    accountNumber: 54321,
    balance: 2000
};
// const bank:BankAccount=deposit(yonatanB,1000);
// document.write(`${bank.balance}  ||||| `)
// const bankGet=withdraw(yonatanB,50);
// document.write(`${bankGet.bankAccount.balance} ${bankGet.error} |||`)
transfer(noyB, yonatanB, 2000);
document.write("now noy has " + noyB.balance + " and yonatan has " + yonatanB.balance);
