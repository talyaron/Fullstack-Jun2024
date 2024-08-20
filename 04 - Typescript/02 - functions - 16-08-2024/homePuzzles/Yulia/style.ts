function getUserColor(promptMessage: string, defaultColor: string): string {
    let color = prompt(promptMessage);
    return color ? color : defaultColor;
}

function main(): void {
    let name = prompt("What is your name?");
    let favoriteColor = getUserColor("What is your favorite color?", "black"); 
    let fontColor = getUserColor("What is your second favorite color?", "white"); 

    document.body.style.backgroundColor = favoriteColor;
    
    document.body.style.color = fontColor;

    document.write(`Hello, ${name}! Your favorite color is ${favoriteColor}!`);
    }


main();