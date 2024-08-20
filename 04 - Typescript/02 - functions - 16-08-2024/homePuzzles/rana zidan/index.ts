let userName: string | null= prompt("Please Enter your name");
let userColor: string | null= prompt("Please Enter your favorite color");
let secondColor: string | null= prompt("Please Enter your favorite second color");

document.write(`Hello, ${userName}! Your favorite color is ${userColor}!, and the second favorite color is ${secondColor}! `);




function paintScreen(color: string): void {
  document.body.style.backgroundColor = color;
}

function SecondPaintScreen(color: string): void {
  document.body.style.color = color;
}


paintScreen(userColor);

SecondPaintScreen(secondColor);