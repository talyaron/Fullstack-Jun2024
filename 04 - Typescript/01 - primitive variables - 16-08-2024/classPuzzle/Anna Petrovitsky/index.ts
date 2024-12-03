let FirstName:string | null ;
let LastName:string | null;
let Email: string | null;
let PhoneNumber: number | null;

FirstName = prompt("Please enter your first name:");
LastName = prompt("Please enter your Last name:");
Email = prompt("Please enter your email:")
PhoneNumber = Number(prompt("Please enter your Phone Number:"));

document.write(`Hi ${FirstName} ${LastName}, Your email is: ${Email} and your phone number is ${PhoneNumber}`);