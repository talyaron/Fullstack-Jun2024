let firstName: string | null =  prompt("Please enter your name") 

let colorBackground: string | null  =  prompt("Please enter your background color") 

let colorFont: string | null =  prompt("Please enter your font color"); 

function changeBackground(color: string): void {
    document.body.style.backgroundColor = color;
}

function changeFontColor(fontColor: string): void {
    document.body.style.color = fontColor;
}



document.write(`Hey ${firstName}, your background color is ${colorBackground} and your font color is ${colorFont}. Thanks!`);

if(!colorBackground){
    changeBackground("black");
} else{
    changeBackground(colorBackground);
}

if(!colorFont){
    changeFontColor("white");
    
}
else{
    changeFontColor(colorFont);
}