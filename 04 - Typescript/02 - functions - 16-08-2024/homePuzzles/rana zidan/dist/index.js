var userName = prompt("Please Enter your name");
var userColor = prompt("Please Enter your favorite color");
var secondColor = prompt("Please Enter your favorite second color");
document.write("Hello, " + userName + "! Your favorite color is " + userColor + "!, and the second favorite color is " + secondColor + "! ");
function paintScreen(color) {
    document.body.style.backgroundColor = color;
}
function SecondPaintScreen(color) {
    document.body.style.color = color;
}
paintScreen(userColor);
SecondPaintScreen(secondColor);
