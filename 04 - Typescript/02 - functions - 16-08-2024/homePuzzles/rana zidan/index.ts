let username: string | null = prompt("Please Enter your name");
let usercolor: string | null = prompt("Please Enter your favorite color");
let secondcolor: string | null = prompt("Please Enter your favorite second color");

document.write(`Hello, ${username}! Your favorite color is ${usercolor}!, and the second favorite color is ${secondcolor}! `);




function paintScreen(color: string): void {
  document.body.style.backgroundColor = color;
}

function secondPaintScreen(color: string): void {
  document.body.style.color = color;
}


paintScreen(usercolor);

secondPaintScreen(secondcolor);