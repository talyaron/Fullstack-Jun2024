let firstName:string |null;
let LastName:string |null;
let PhoneNumber:number;
let Email:string |null;




firstName = prompt("Please enter your first name");
LastName = prompt("Please enter your last name");
PhoneNumber = Number (prompt("Please enter your phone number"));
Email = prompt("Please enter your email");

document.write(`hello, my name is ${firstName} ${LastName}.  You can call me at ${PhoneNumber} or email me at ${Email} .` );
console.log (firstName, LastName, PhoneNumber, Email);
