var Name;
var Color;
var FontColor;
Name = prompt("Please enter your name");
Color = prompt('Please enter a color');
if (!Color) {
    Color = 'black';
}
paintScreen(Color);
FontColor = prompt('Please enter a second color for the font');
if (!FontColor) {
    FontColor = 'white';
}
paintFont(FontColor);
function paintScreen(color) {
    document.body.style.backgroundColor = color;
}
function paintFont(color) {
    document.body.style.color = color;
}
// Render the message
document.write("Hello, " + Name + "! Your favorite color is " + Color + "!");
console.log(Name, Color, FontColor);
