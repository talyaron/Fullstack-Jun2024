let firstname:string | null;
let lastname:string | null;
let phonenumber:number | null;
let email:string | null;

firstname = prompt("enter you first name please!")
lastname = prompt("enter you last name please!")
phonenumber = Number(prompt("enter your phone number please!"));
email = prompt("enter you email please!")
document.write(`Hi, ${firstname} ${lastname}, your phone number is ${phonenumber}, and your email ${email}, thank you about your registeration. `)