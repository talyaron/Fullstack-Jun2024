"use strict";

var userName = prompt("Please enter your name:");
var firstColor = prompt("Please enter your preferred color:");
var secondColor = prompt("Please enter your second color:");
colorPreferred(userName, firstColor, secondColor);

function colorPreferred(name, color, secondColor) {
  document.write("Hello, " + userName + " ! Your favorite color is " + firstColor + " !");

  if (color == null) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = color;
  }

  if (secondColor === null) {
    document.body.style.color = "white";
  } else {
    document.body.style.color = secondColor;
  }
}