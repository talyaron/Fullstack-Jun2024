var exercise_number:number = Number(prompt("What exercise do you want to try 7 or 10") || alert("you dont chose number exercise"));

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
        document.write("the result in console");
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
        document.write(`<br> A bank account has now been created with a bank account number ${accountNumber} with balance ${balance}`);
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

        case "transfer":
            {
                alert("בוא ניצור קודם חשבון בנק שברצינינו להעביר אליו")
                var new_user_transfer : BankAccount = creat_Account();
                var money_transfer : Number = Number(prompt("how money you want to send"));
                [new_use,new_user_transfer] = Transfer(new_use,new_user_transfer,money_transfer);
                console.log(new_use);
                console.log(new_user_transfer);
                break
            }
        default:
            alert("Invalid action number");
            break;
    }            
    

    function deposit() : void
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

    function Transfer(sender: BankAccount, reciver: BankAccount, money_send: Number)  : [BankAccount,BankAccount]
    {
        if (sender.balance>money_send)
        {
            reciver.balance += money_send;
            sender.balance -= money_send;
            document.write(`<br> Hello, bank account number: ${sender.accountNumber} After the transfer ${money_send} your balance stands at ${sender.balance}`);
            document.write(`<br> Hello, bank account number: ${reciver.accountNumber} After the recived the money ${money_send} your balance stands at ${reciver.balance}`);
        }
        else
        {
            alert("sorry you dont have money to send -- go to work");
        }
        return [sender,reciver]
    
    } 
}

function ex10()
{
    interface Product
    {
        id : number;
        name : string;
        price : number;
    }

    interface Customer
    {
        name : string;
        address : string;
    }

    interface Order   /* ממשק בתוך ממשק */
    {
        customer : Customer
        product : Product
        quantity : number;
    }

    const Alice: Customer = { name: "Alice", address: "123 Main St" };
    const Laptop: Product = { id: 1, name: "Laptop", price: 1000 };

    const Yosef: Customer = { name: "Yosef", address: "Al Rashid 9" };
    const Iphone: Product = { id: 2, name: "Iphone A15 plus", price: 7000 };

    var new_order : Order = CreateOrder(Alice,Laptop,2);
    var how_much : Number = CalucateTotal(new_order);

    console.log(new_order);
    console.log(how_much);

    var new_order : Order = CreateOrder(Alice,Laptop,3);
    var how_much : Number = CalucateTotal(new_order);
    var invoce : string = GenerateInvoice(new_order);

    console.log(new_order);
    console.log(how_much);
    console.log(invoce);



    function CreateOrder (client: Customer, item: Product, number_item : number) : Order
    {
        const order : Order = {
        customer : client,
        product : item,
        quantity : number_item
        }

        return order;

}

    function CalucateTotal (order : Order) : Number
    {

        return order.quantity * order.product.price
    }

    function GenerateInvoice (order : Order) : string
    {
        var text : string = (`
                              hey ${order.customer.name}
                              from ${order.customer.address}
                              you have buy ${order.product.name}
                              your quantity ${order.quantity}
                              price per unit ${order.product.price}
                              total in shekel is ${CalucateTotal(order)}
                                `);
        return text;
        }

}

    


