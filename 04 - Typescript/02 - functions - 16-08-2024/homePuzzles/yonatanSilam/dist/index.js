var Name = "yonatan";
var Color = "black";
var sColor = "pop";
Name = prompt("Please enter your name");
Color = prompt("Please enter your favorite color");
sColor = prompt("Please enter your second favorite color");
changeBackgroundColor(Color);
printNameColor();
changeContainerColor(sColor);
function printNameColor() {
    var n = document.getElementById("art");
    if (n) {
        if (Name !== null && Name !== '')
            n.innerText = "hi " + Name;
        else {
            n.innerText = "hi ploni";
        }
    }
    var display = document.getElementById("display");
    if (display) {
        if (Color !== null && Color !== '') {
            display.innerText = " Your favorite color is " + Color + "!";
        }
        else {
            display.innerText = "Your favorite color is black!";
        }
    }
}
function changeBackgroundColor(c) {
    if (c === null || c === "") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = c;
        document.body.style.color = c;
    }
}
function changeContainerColor(c) {
    var q = document.getElementById("con");
    if (q) {
        if (c === null || c === '') {
            q.style.backgroundColor = "black";
        }
        else {
            q.style.backgroundColor = c;
        }
    }
    else {
        console.error("Element with ID 'con' not found.");
    }
}
