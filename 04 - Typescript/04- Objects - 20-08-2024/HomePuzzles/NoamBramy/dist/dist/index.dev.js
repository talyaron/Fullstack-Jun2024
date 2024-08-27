"use strict";

function DepositMoney() {
  setTimeout(1000);

  try {
    var deposit = prompt("Please enter the amount of money you want to deposit: ");
    var amount = Number(deposit);

    if (isNaN(amount)) {
      return undefined;
    }

    if (amount === 0) {
      return undefined;
    }

    var oldbalance = 5000;
    var iban = Math.floor(Math.random() * 99999999);
    var newbalance = amount + oldbalance;
    var bankAccount = {
      iban: iban,
      balance: newbalance,
      oldbalance: oldbalance,
      deposited: amount
    };
    return bankAccount;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

var result = DepositMoney();

if (result) {
  console.log("Hi, Iban Number: " + result.iban + ", You have Deposited: " + result.deposited + ", Updated Balance: " + result.balance);
} else {
  console.log("Invalid amount entered.");
}