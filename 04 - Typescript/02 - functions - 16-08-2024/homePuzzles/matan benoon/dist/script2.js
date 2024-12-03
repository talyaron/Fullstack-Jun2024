var firstName = prompt("Please enter your name");
var colorBackground = prompt("Please enter your background color");
var colorFont = prompt("Please enter your font color");
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}
function changeFontColor(fontColor) {
    document.body.style.color = fontColor;
}
document.write("Hey " + firstName + ", your background color is " + colorBackground + " and your font color is " + colorFont + ". Thanks!");
if (!colorBackground) {
    changeBackground("black");
}
else {
    changeBackground(colorBackground);
}
if (!colorFont) {
    changeFontColor("white");
}
else {
    changeFontColor(colorFont);
}
