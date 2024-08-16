let firstname:string | null = "Noam";
let lastname:string | null = "Bramy";
let phonenumber:string | null = "0527506076";
let email:string | null = "noambaramy@gmail.com";

firstname = prompt("enter you first name please!")
lastname = prompt("enter you last name please!")
phonenumber = prompt("enter your phone number please!")
email = prompt("enter you email please!")
document.write(`Hi, ${firstname} ${lastname}, your phone number is ${phonenumber}, and your email ${email}, thank you about your registeration. `)