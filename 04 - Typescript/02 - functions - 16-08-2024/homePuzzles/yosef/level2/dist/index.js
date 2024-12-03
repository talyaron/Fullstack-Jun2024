var FullName = "Yosef Ibrahim";
var FontColor = "White";
var BackGroundColor = "Black";
FullName = prompt("What is your Full Name please");
FontColor = prompt("What is your fovorite Font Color");
BackGroundColor = prompt("What is your fovorite BackGround Color");
document.write("Hello, " + FullName + "! <br> Your favorite font color is " + FontColor + ", and your favorite background color is " + BackGroundColor);
print1(FontColor, BackGroundColor);
function print1(font_color, rekka) {
    document.body.style.color = font_color;
    document.body.style.background = rekka;
    if (font_color == "") {
        document.body.style.color = "white";
    }
    else {
        document.body.style.color = font_color;
    }
    if (rekka == "") {
        document.body.style.background = "black";
    }
    else {
        document.body.style.background = rekka;
    }
}
alert("bye bye");
