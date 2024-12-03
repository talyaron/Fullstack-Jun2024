let username = prompt("Hi! Please enter your name");
let userColor = prompt("Please enter a color");
let secondColor = prompt("Please enter a fonts favorite color");
let ourchoise: boolean = false;
if (username === null) {
    username = "name";
    ourchoise = true;
}
if (userColor === null) {
    userColor = "black";
    ourchoise = true;
}
if (secondColor === null) {
    secondColor = "white";
    ourchoise = true;
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
if (ourchoise) {
    document.write(" ( We have made some choices for you :) ");
}