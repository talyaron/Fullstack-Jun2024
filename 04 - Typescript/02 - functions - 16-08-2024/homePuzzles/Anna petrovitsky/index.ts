
let userName: string = prompt("Please enter your name:") ;
let firstColor: string  = prompt("Please enter your preferred color:");
let secondColor: string = prompt("Please enter your second color:");


colorPreferred(userName,firstColor,secondColor);
console.log(firstColor);

function colorPreferred (name: string,firstColor: string, secondColor: string) :void{
  if(firstColor == ""){
    firstColor =  'black';
  }
  if(secondColor == ""){
    secondColor =  'white';
  }
  document.body.style.backgroundColor = firstColor;
  document.body.style.color = secondColor;
  document.write(`Hello, ${userName} ! Your favorite color is ${firstColor} !`);
}
