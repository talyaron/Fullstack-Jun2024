var userName = prompt('Please enter your name');
var userColor = prompt('Please enter favorite color');
function greetUser(name, color) {
    var text = document.createTextNode("your name is " + name + " and your favorite color is " + color);
    var paragraph = document.createElement('p');
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}
function paintScreen(color) {
    //render color to screen
    if (color != null) {
        document.body.style.backgroundColor = color;
    }
    else {
        document.body.style.backgroundColor = "black";
    }
}
paintScreen(userColor);
greetUser(userName, userColor);
