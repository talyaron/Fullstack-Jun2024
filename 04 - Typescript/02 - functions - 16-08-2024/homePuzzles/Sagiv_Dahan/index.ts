let userName :string | null = prompt('Please enter your name');
let userColor :string | null = prompt('Please enter favorite color');

function greetUser(name, color): void{
    let text :any = document.createTextNode(`your name is ${name} and your favorite color is ${color}`);
    let paragraph: HTMLParagraphElement = document.createElement('p');
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
}

function paintScreen(color: string | null): void {
    //render color to screen
    if (color != null){
        document.body.style.backgroundColor = color;
    } else {
        document.body.style.backgroundColor = "black";
    }
}

paintScreen(userColor);
greetUser(userName, userColor);