var username = prompt("Please Enter your Name");
var usercolor = prompt("Please enter your favorite color");
var secondcolor = prompt("Please Enter Second Favorite Color");
document.write("Hello, " + username + "! Your favorite color is " + usercolor + ", and the second favorite color is " + secondcolor + "!");
function paint(color) {
    document.body.style.backgroundColor = color;
}
function secondpaint(color) {
    document.body.style.color = color;
}
if (!usercolor) {
    paint("black");
}
else {
    paint(usercolor);
}
if (!secondcolor) {
    secondpaint("black");
}
else {
    secondpaint(secondcolor);
}
