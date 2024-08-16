//primitive variables

let firstName:string | null = "Tal";
let cartIemCount:number = 3;

firstName = prompt("Please enter your name");
cartIemCount = Number(prompt("Please enter the number of items in your cart"));

document.write(`Hi ${firstName}, you have ${cartIemCount} Items in your cart` );

