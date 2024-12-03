// let FirstName:string | null="yosef";
// let LastName:string | null="ibrahimi";
// let Email:string | null="yosefib88@gmail.com";
// let Phone:string | null="0545732050";

// FirstName = prompt("Please enter your first name");
// LastName = prompt("Please enter your last name");
// Email = prompt("Please enter your email");
// Phone = (prompt("Please enter your phone number"));

// document.write(`Hello ${FirstName} ${LastName}! Your email is ${Email} and your phone number is ${Phone}.`);

let color:string | null=prompt("Please enter a color");

document.body.style.backgroundColor = color || "red";
