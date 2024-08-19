let firstName:string | null = "Tohar";
let favColor:string | null = "black";

firstName = prompt('Please enter a your first name');
favColor = prompt('Please enter a your favorate color');

function paintScreen(color: string): void {
    if(!color) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.write(`Hello ${firstName}, you didn't choose a favorite color`);
    }
    else {
        document.body.style.backgroundColor = color;
        document.write(`Hello ${firstName}, your favorate color is ${favColor}`);
    }   
}

paintScreen(favColor);


