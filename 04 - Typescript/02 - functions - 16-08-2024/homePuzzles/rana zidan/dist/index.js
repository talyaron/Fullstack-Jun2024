var userName = prompt("Please Enter your name");
var fave = prompt("Please Enter your favorite color") || 'black';
var secondColor = prompt("Please Enter your favorite second color") || 'white';
if (!userName) {
    userName = 'User';
}
document.write("Hello, " + userName + "! Your favorite color is " + fave + "! ");
function paint(color1) {
    document.body.style.backgroundColor = color1;
}
function paintText(color2) {
    document.body.style.color = color2;
}
paint(fave);
paintText(secondColor);
