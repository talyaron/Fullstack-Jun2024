let userName: string|null = prompt('Please enter your name');
let fave: string | null = prompt('What is your favorite color')||'black';
let second: string|null = prompt('Please enter color')||'white';


document.write(`Hello, ${userName}! Your favorite color is color ${fave}!`);  

function paint(color1: string): void{
    document.body.style.backgroundColor = color1;
    
}
function paintText(color2: string): void{
    document.body.style.color = color2;
    
} 

paint(fave);
paintText(second);

