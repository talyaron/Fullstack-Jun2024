let username:string | null = prompt("Please Enter your Name");
let usercolor:string | null = prompt("Please enter your favorite color");
let secondcolor:string | null = prompt("Please Enter Second Favorite Color")


document.write(`Hello, ${username}! Your favorite color is ${usercolor}, and the second favorite color is ${secondcolor}!`)

function paint(color: string): void{
  document.body.style.backgroundColor = color;
}
function secondpaint(color: string): void{
  document.body.style.color = color;
}

if (!usercolor) {
  paint("black");
} else {
  paint(usercolor);
}

if (!secondcolor) {
  secondpaint("black");
} else {
  secondpaint(secondcolor);
}