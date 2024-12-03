interface BankAccount
{
    accountNumber: number;
    balance: number;
}

function deposit(account: BankAccount, amount: number): BankAccount
{
    account.balance += amount;
    return account;
}

function withdraw(account: BankAccount, amount: number): BankAccount
{
    try
    {
        if (amount > account.balance) throw new Error("not enough funds");
    }
    catch(e)
    {
        console.error(e);
        return account;
    }
            
    account.balance -= amount;
    return account;
}

function transfer(getAccount: BankAccount, sendAccount: BankAccount, amount): {getAccount: BankAccount, sendAccount: BankAccount}
{
    try
    {
        if (amount > sendAccount.balance) throw new Error("not enough funds");
    }
    catch(e)
    {
        console.error(e);
        return {getAccount, sendAccount};
    }

    sendAccount.balance -= amount;
    getAccount.balance += amount;

    return {getAccount, sendAccount};
}

function bankTester(): void
{
    const action: string = String(prompt("choose an action to test"));
    switch (action)
    {
        case ("deposit"):
        {
            const balance: number = Number(prompt("enter account's balance"));
            const account: BankAccount = {accountNumber: 0, balance: balance};

            const amount: number = Number(prompt("enter amount to deposit"));
            deposit(account, amount);

            document.write(`the account has now ${account.balance}`)

            break;
        }
        case ("withdraw"):
        {
            const balance: number = Number(prompt("enter account's balance"));
            const account: BankAccount = {accountNumber: 0, balance: balance};

            const amount: number = Number(prompt("enter amount to withdraw"));
            withdraw(account, amount);

            document.write(`the account has now ${account.balance}`)
            break;
        }
        case ("transfer"):
            {
                const getBalance: number = Number(prompt("enter getter account's balance"));
                const getAccount: BankAccount = {accountNumber: 0, balance: getBalance};
                const sendBalance: number = Number(prompt("enter account's balance"));
                const sendAccount: BankAccount = {accountNumber: 0, balance: sendBalance};
    
                const amount: number = Number(prompt("enter amount to withdraw"));
                transfer(getAccount, sendAccount, amount);
    
                document.write(`the getter account has now ${getAccount.balance}, and the sender has ${sendAccount.balance}`)
                break;
            }
    }
}

bankTester();