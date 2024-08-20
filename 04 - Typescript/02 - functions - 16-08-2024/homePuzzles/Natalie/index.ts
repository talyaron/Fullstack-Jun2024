let FirstName: string | null = "Natalie";
let FavoriteColor: string | null = "black";

FirstName = prompt("Please enter your name");
FavoriteColor = prompt("Please enter your favorite color");
paintScreen(FavoriteColor);

document.write(`Hello, ${FirstName}! Your favorite color is ${FavoriteColor}`);
function paintScreen(color: string): void {
    document.body.style.backgroundColor = color;
}
