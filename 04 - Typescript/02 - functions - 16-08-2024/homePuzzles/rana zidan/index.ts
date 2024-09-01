let userName: string | null= prompt("Please Enter your name");
let fave: string | null= prompt("Please Enter your favorite color")||'black';
let secondColor: string | null= prompt("Please Enter your favorite second color") ||'white';

if(!userName){
  userName='User';
}

document.write(`Hello, ${userName}! Your favorite color is ${fave}! `);



function paint(color1: string): void {
  document.body.style.backgroundColor = color1;
}

function paintText(color2: string): void {
  document.body.style.color = color2;
}


paint(fave);

paintText(secondColor);