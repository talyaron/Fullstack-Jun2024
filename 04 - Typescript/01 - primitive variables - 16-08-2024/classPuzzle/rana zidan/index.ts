let firstName: string|null;
let lastName: string|null;
let phoneNumber: number;
let email: string|null;


firstName = prompt("Please anter your name");
lastName = prompt("Please anter your last name");
phoneNumber = Number(prompt("Please anter your phone number"));
email = prompt("Please anter your e-mail");

document.write(
  `Hello, my name is ${firstName} ${lastName}. You can call me at ${phoneNumber} or email me at ${email}.`
);
