"use strict";

var username = prompt("Hi! Please enter your name");
var userColor = prompt("Please enter a color");
var secondColor = prompt("Please enter a fonts favorite color");
Boolean;

if (username === null) {
  username = "name";
}

if (userColor === null) {
  userColor = "black";
}

if (secondColor === null) {
  secondColor = "white";
}

favoriteColor(username, userColor);
fontfavoriteColor(username, secondColor);

function fontfavoriteColor(name, color) {
  document.write(" and Your favorite font color is " + color);
  document.body.style.color = color;
}

function favoriteColor(name, color) {
  document.write("Hello " + name + "! Your favorite color is " + color);
  document.body.style.backgroundColor = color;
}