let firstName:string | null = "Sagiv";
let lastName:string | null = "Dahan";
let phoneNum:string | null = "0522127818"
let email:string | null = "sagivdahanbusiness@gmail.com";

firstName = prompt("Please enter your first name");
lastName = prompt("Please enter your last name");
phoneNum = prompt("Please enter your phone number");
email = prompt("Please enter your email");

document.write(`First Name: ${firstName}`);
document.write(`Last Name: ${lastName}`);
document.write(`Phone Number: ${phoneNum}`);
document.write(`Email: ${email}`);