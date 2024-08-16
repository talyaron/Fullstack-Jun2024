// Task: to take a color from the user and paint the screen in this color
//get with prompt the color from user
var userColor = prompt('Please enter a color');
// function that get color and paint the screen
paintScreen(userColor);
//declare function 
function paintScreen(color) {
    //render color to screen
    document.body.style.backgroundColor = color;
}
