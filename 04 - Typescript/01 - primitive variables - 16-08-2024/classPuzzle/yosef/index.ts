let FirstName:string | null="yosef";
let LastName:sting | null="ibrahimi";
let Email:string | null="yosefib88@gmail.com";
let Phone:number:0545732050;

FirstName = prompt("Please enter your first name");
LastName = prompt("Please enter your last name");
Email = prompt("Please enter your email");
Phone = Number(prompt("Please enter your phone number"));

document.write(`Hello ${FirstName} ${LastName}! Your email is ${Email} and your phone number is ${Phone}.`);

