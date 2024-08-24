var exercise_number:number = Number(prompt("What exercise do you want to try 7-10") || alert("you dont chose number exercise"));

switch (exercise_number) {
    case 7:
        ex7();
        break;
    case 8:
        ex8();
        break;
    case 9:
        ex9();
        break;
    case 10:
        ex10();
        break;
    default:
        alert("Invalid exercise number");
}


function ex7() {

    interface BankAccount {
        accountNumber: Number;
        balance: Number;
    }
    alert('lets create a new bank account');

    var new_use : BankAccount = creat_Account();

    function creat_Account(): BankAccount {
        var accountNumber = Number(prompt("enter account number"));
        var balance = Number(prompt("enter initial balance"));
        var new_member: BankAccount = {
            accountNumber: accountNumber,
            balance: balance
        }
        return new_member;
    }

    var action_number : string = String(prompt("What action do you want to: Deposit / Attraction / Transfer") || null);

    switch (action_number) {
        case "deposit":
            {
                deposit();
                break;
            }
        case "attraction":
            {
                attraction();
                break;
            }
        default:
            alert("Invalid action number");
            break;
    }            
    

    function deposit() : void7
     {
        var deposit_amount = Number(prompt("enter deposit amount"));
        new_use.balance += deposit_amount;
        alert(`your new balance is ${new_use.balance}`);
    }

    function attraction() : void
    {
        var attraction_amount = Number(prompt("enter attraction amount"));
        if (attraction_amount <= new_use.balance)
            {
                new_use.balance -= attraction_amount;
                alert(`your new balance is ${new_use.balance}`);
            } else {
                alert("Not enough money in your account");
                document.write(`your bank number ${new_use.accountNumber} have ${new_use.balance
                } shekel , you cant attraction ${attraction_amount}`);
            }

    }

    document.write(`<br> your bank number ${new_use.accountNumber} have ${new_use.balance} shekel`);
    // function creat_Account(): {
    //     BankAccount.accountNumber = Number(prompt("enter account number"));
    //     BankAccount.balance = Number(prompt("enter initial balance"));

    // }

    // function deposit() {
    //     BankAccount.accountNumber = Number(prompt("Enter account number"));
    //     BankAccount.balance += Number(prompt("Enter deposit amount"));
       
    // }
}

    



