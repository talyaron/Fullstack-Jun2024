// interface BankAccount{
//   iban: number,
//   balance: number,
//   oldbalance: number,
//   deposited: number,
// }

// Deposit Money System / Working With Randomly  Iban Number, and starting with 5000$ balance, and you can deposit how much you want . 

// function DepositMoney(): BankAccount | undefined {
//   try {
//       const oldbalance = 5000;
//       const deposit = prompt(`Please enter the amount of money you want to deposit: Balance: ${oldbalance}$:`);
//       const amount = Number(deposit);

//       if (isNaN(amount)) {
//           return undefined;
//       }

//       if (amount <= 0) {
//           return undefined;
//       }

//       const iban = Math.floor(Math.random() * 99999999);
//       const newbalance = amount + oldbalance;

//       const bankAccount: BankAccount = {
//           iban: iban,
//           balance: newbalance,
//           oldbalance: oldbalance,
//           deposited: amount
//       };

//       return bankAccount;
//   } catch (e) {
//       console.log(e);
//       return undefined;
//   }
// }

// const result = DepositMoney();

// if (result) {
//   console.log(`Hi Noam, Iban Number IL${result.iban}, you have deposited: ${result.deposited}$ , Updated Balance: ${result.balance}$`)
// } else {
//   console.log("Invalid amount entered.");
// }

// interface BankAccount {
//   iban: number,
//   balance: number,
//   oldbalance: number,
//   whitdraw: number,
// }

// Whitdraw Money System / Working With Randomly  Iban Number, and starting with 5000$ balance, and you can whitdraw how much you want . 

// function whitdrawMoney(): BankAccount | undefined {
//   try {
//     const oldbalance = 5000;
//       const deposit = prompt(`Please enter the amount of money you want to whitrdaw Balance: ${oldbalance}$: `);
//       const amount = Number(deposit);

//       if (isNaN(amount) || amount <= 0) {
//         console.log("Invalid amount entered.");
//         return undefined;
//     }

//     if (amount > oldbalance) {
//         console.log("Insufficient balance.");
//         return undefined;
//     }

//       const iban = Math.floor(Math.random() * 99999999);
//       const newbalance = oldbalance - amount;

//       const bankAccount: BankAccount = {
//           iban: iban,
//           balance: newbalance,
//           oldbalance: oldbalance,
//           whitdraw: amount
//       };

//       return bankAccount;
//   } catch (e) {
//       console.log(e);
//       return undefined;
//   }
// }

// const result = whitdrawMoney();

// if (result) {
//   console.log(`Hi Noam, Iban Number IL${result.iban}, you have whitdraw: ${result.whitdraw}$ , Updated Balance: ${result.balance}$`)
// } else {
//   console.log("Invalid amount entered.");
// }

// interface BankAccount {
//   iban: number,
//   iban2: number,
//   transfermoney: number,
//   ibanmoney: number,
//   iban2money: number,
// }

  // Transfer Money System / Working With Randomly  Iban Number, and starting with 5000$ balance, and you can transfer how much you want and it will transfer to second iban. 

// function transferMoney(): BankAccount | undefined {
//   try {
//     const oldbalance = 5000;
//       const deposit = prompt(`Please enter the amount of money you want to Transfer, You have in balance: ${oldbalance}$: `);
//       const amount = Number(deposit);

//       if (isNaN(amount) || amount <= 0) {
//         console.log("Invalid amount entered.");
//         return undefined;
//     }

//     if (amount > oldbalance) {
//         console.log("Insufficient balance.");
//         return undefined;
//     }

//       const iban = Math.floor(Math.random() * 99999999);
//       const iban2 = Math.floor(Math.random()* 99999998);
//       const ibanmoney = oldbalance - amount
//       const iban2money = oldbalance + amount

//       const bankAccount: BankAccount = {
//           iban: iban,
//           iban2: iban2,
//           transfermoney: amount,
//           ibanmoney: ibanmoney,
//           iban2money: iban2money,
//       };

//       return bankAccount;
//   } catch (e) {
//       console.log(e);
//       return undefined;
//   }
// }

// const result = transferMoney();

// if (result) {
//   console.log(`Hi Noam, Iban Number IL${result.iban}, You Transfer Money To Iban: IL${result.iban2}, Money: ${result.transfermoney}$, Updated Balance ${result.ibanmoney}`)
//   console.log(`Hi Noam2, Iban Number IL${result.iban2}, You got money from Iban: IL${result.iban}, The Money: ${result.transfermoney}$ Your Currently Balance is: ${result.iban2money}.`)
// } else {
//   console.log("Invalid amount entered.");
// }