"use strict";

var Name = "yonatan";
var Color = "black";
var sColor = "pop";
Name = prompt("Please enter your name");
Color = prompt("Please enter your favorite color");
sColor = prompt("Please enter your second favorite color"); // if(Name !==null)
// print(Name);
// else
// document.write(`Hello, johndou! Your favorite color is ${Color}!`)

changeBackgroungColor(Color, sColor);
printNameColor();

function printNameColor() {
  var _a;

  var n = document.getElementById("art");

  if (n) {
    if (Name !== null && Name !== '') n.innerText = "hi " + Name;else {
      n.innerText = "hi ploni";
    }
  }

  var display = document.getElementById("display");

  if (display) {
    if (Color !== null && Color !== '') display.innerText = " Your favorite color is " + Color + "!";
    display.innerText = (_a = " Your favorite color is black!") !== null && _a !== void 0 ? _a : '';
  }
}

function changeBackgroungColor(c, x) {
  if (c == null || c == "") document.body.style.backgroundColor = "black";else {
    document.body.style.backgroundColor = c;
  }
  if (x == null || x == "") document.body.style.color = "white";else {
    document.body.style.color = x;
  }
} // function changeSecondColor(c: string): void{
// }
// function changeContinerColor(c: string): void{
//     document.body.style.backgroundColor = c ;
//     let seColor = document.getElementsByClassName("continer");
//     if(sColor == null || sColor == "")
//          seColor
//     else{
//         document.body.style.color = sColor ;    }
// }
// function print(x:string):void{
// document.write(`Hello, ${x}! Your favorite color is ${Color}!`)
// }
// changeColor(Name, Color);
// function changeColor(name: string|null, color: string|null) :void{
//     console.log("hi");
//     let art= document.getElementById('art');
//     console.log(art);
//     if(Name == null)
//         return
//     else{
//     art= art+Name;
//     console.log(art);
//     }