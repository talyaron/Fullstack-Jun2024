let firstName:string |null = "Tohar";
let lastName:string | null = "Kenin";
let phoneNumber:string | null = "0558820156";
let email:string | null = "tohar@gmail.com";




firstName = prompt("Please enter your first name");
lastName = prompt("Please enter your last name");
firstName = prompt("Please enter your phone number");
firstName = prompt("Please enter your Email address");


document.write(`Hi ${firstName} + ${lastName}, your phone number is ${phoneNumber}, and your Email is ${email}`  );

