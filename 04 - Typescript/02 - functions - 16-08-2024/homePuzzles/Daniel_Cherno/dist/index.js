var defBgColor = "black";
var defTextColor = "white";
var usrName;
var favColor = defBgColor;
var otherFavColor = defTextColor;
function getInp() {
    usrName = (prompt("What is your name?"));
    var color = prompt("Whats your favorite color?");
    setBgColorName(color);
    color = prompt("Whats your other favorite color?");
    setTextColorName(color);
}
function setBgColorName(color) {
    if (color) // if not null
     {
        favColor = color;
    }
}
function setTextColorName(color) {
    if (color) // if not null
     {
        otherFavColor = color;
    }
}
function renderMesssage() {
    document.write("Hello, " + usrName + "! Your favorite color is " + favColor + "!");
}
function paintScreen() {
    document.body.style.backgroundColor = favColor;
    document.body.style.color = otherFavColor;
}
getInp();
renderMesssage();
paintScreen();
