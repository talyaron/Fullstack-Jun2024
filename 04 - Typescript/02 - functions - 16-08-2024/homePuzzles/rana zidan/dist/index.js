var username = prompt("Please Enter your name");
var usercolor = prompt("Please Enter your favorite color");
var secondcolor = prompt("Please Enter your favorite second color");
document.write("Hello, " + username + "! Your favorite color is " + usercolor + "!, and the second favorite color is " + secondcolor + "! ");
function paintScreen(color) {
    document.body.style.backgroundColor = color;
}
function secondPaintScreen(color) {
    document.body.style.color = color;
}
if (!usercolor) {
    paintScreen("red");
}
else {
    paintScreen(usercolor);
}
if (!secondcolor) {
    secondPaintScreen("red");
}
else {
    secondPaintScreen(secondcolor);
}
