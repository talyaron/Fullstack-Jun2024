var defBgColor = "black";
var defTextColor = "white";
var usrName;
var favColor = defBgColor;
var HasFavColor = false;
var otherFavColor = defTextColor;
function getInp() {
    usrName = (prompt("What is your name?"));
    var color = prompt("Whats your favorite color?");
    setBgColorName(color);
    if (HasFavColor) {
        color = prompt("Whats your other favorite color?");
        setTextColorName(color);
    }
}
function setBgColorName(color) {
    if (color) // if not null
     {
        HasFavColor = true;
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
    if (HasFavColor) {
        document.write("Hello, " + usrName + "! Your favorite color is " + favColor + "!");
    }
    else {
        document.write("Hello, " + usrName + "!");
    }
}
function paintScreen() {
    document.body.style.backgroundColor = favColor;
    document.body.style.color = otherFavColor;
}
getInp();
renderMesssage();
paintScreen();
