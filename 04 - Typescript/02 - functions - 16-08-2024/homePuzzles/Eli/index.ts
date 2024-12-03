let userName: string | null;
let bGColor: string | null;
let fontColor: string | null;

userName = prompt("give me your name!");
bGColor = prompt("give me your favorite color");
fontColor = prompt("give me your 2nd favorite color");

paint(fontColor,bGColor, userName);

function paint(
  bcolor: string | null,
  fcolor: string | null,
  name: string | null
) : void{
  if (name != null) {
    document.write(`Hello, ${name}!`);
  }
  if (fcolor != null) {
    document.body.style.color = fcolor;
  }
  if (bcolor != null) {
    document.body.style.backgroundColor = bcolor;
    document.write(` Your favorite color is ${fcolor}!`);
  }
}
