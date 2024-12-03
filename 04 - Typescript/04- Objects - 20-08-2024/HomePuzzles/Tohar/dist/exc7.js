document.write("Bank Dashbord /n");
document.write("What action would you like to create ?");
// function createAction():string {
//     switch():string {
//         case "deposit": 
//     }
// }
var userLogin = {
    accountNumber: Number(prompt("please enter your account number: ")),
    balance: getRandomFloat(-10000, 100000)
};
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
function withdraw() {
    var amount = Number(prompt("What is the amount you would like to withdraw ?"));
    return userLogin.balance - amount;
}
console.log("account balance: " + userLogin.balance);
var accountBalance = withdraw();
document.write("Bank Account Balance is " + accountBalance);
