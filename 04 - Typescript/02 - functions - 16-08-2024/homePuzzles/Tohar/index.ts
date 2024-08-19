let firstName:string | null = "Tohar";
let favColor:string | null= "Black";



function paintScreen(color: string): void {
    document.body.style.backgroundColor = color;
}
firstName = prompt('Please enter a your first name');

favColor = prompt('Please enter a your favorate color');

document.write(`Hello ${firstName}, your favorate color is ${favColor}`);
if (favColor === null) {
    paintScreen("black");
}
else {
    paintScreen(favColor);
}


// let secondColor:string | null = "white";
// secondColor = prompt("Please enter a scond color");

// function paintSeconsScreen(color: string): void {
//     document.body.style.backgroundColor = color;
// }

// if(secondColor === null) {
//     paintSeconsScreen("white");
// }
// else {
//     paintSeconsScreen(secondColor);
// }
