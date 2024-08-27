function deposit(account, amount) {
    account.balance += amount;
    return account;
}
function withdraw(account, amount) {
    try {
        if (amount > account.balance)
            throw new Error("not enough funds");
    }
    catch (e) {
        console.error(e);
        return account;
    }
    account.balance -= amount;
    return account;
}
function transfer(getAccount, sendAccount, amount) {
    try {
        if (amount > sendAccount.balance)
            throw new Error("not enough funds");
    }
    catch (e) {
        console.error(e);
        return { getAccount: getAccount, sendAccount: sendAccount };
    }
    sendAccount.balance -= amount;
    getAccount.balance += amount;
    return { getAccount: getAccount, sendAccount: sendAccount };
}
function bankTester() {
    var action = String(prompt("choose an action to test"));
    switch (action) {
        case ("deposit"):
            {
                var balance = Number(prompt("enter account's balance"));
                var account = { accountNumber: 0, balance: balance };
                var amount = Number(prompt("enter amount to deposit"));
                deposit(account, amount);
                document.write("the account has now " + account.balance);
                break;
            }
        case ("withdraw"):
            {
                var balance = Number(prompt("enter account's balance"));
                var account = { accountNumber: 0, balance: balance };
                var amount = Number(prompt("enter amount to withdraw"));
                withdraw(account, amount);
                document.write("the account has now " + account.balance);
                break;
            }
        case ("transfer"):
            {
                var getBalance = Number(prompt("enter getter account's balance"));
                var getAccount = { accountNumber: 0, balance: getBalance };
                var sendBalance = Number(prompt("enter account's balance"));
                var sendAccount = { accountNumber: 0, balance: sendBalance };
                var amount = Number(prompt("enter amount to withdraw"));
                transfer(getAccount, sendAccount, amount);
                document.write("the getter account has now " + getAccount.balance + ", and the sender has " + sendAccount.balance);
                break;
            }
    }
}
bankTester();
