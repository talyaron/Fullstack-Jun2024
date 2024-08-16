var userName = prompt('Please enter your name');
var fave = prompt('What is your favorite color') || 'black';
var second = prompt('Please enter color') || 'white';
document.write("Hello, " + userName + "! Your favorite color is color " + fave + "!");
function paint(color1) {
    document.body.style.backgroundColor = color1;
}
function paintText(color2) {
    document.body.style.color = color2;
}
paint(fave);
paintText(second);
