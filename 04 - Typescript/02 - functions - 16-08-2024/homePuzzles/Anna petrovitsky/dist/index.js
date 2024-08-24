var userName = prompt("Please enter your name:");
var firstColor = prompt("Please enter your preferred color:");
var secondColor = prompt("Please enter your second color:");
colorPreferred(userName, firstColor, secondColor);
console.log(firstColor);
function colorPreferred(name, firstColor, secondColor) {
    if (firstColor == "") {
        firstColor = 'black';
    }
    if (secondColor == "") {
        secondColor = 'white';
    }
    document.body.style.backgroundColor = firstColor;
    document.body.style.color = secondColor;
    document.write("Hello, " + userName + " ! Your favorite color is " + firstColor + " !");
}
