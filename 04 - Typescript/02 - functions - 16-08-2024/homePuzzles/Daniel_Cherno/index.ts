const defBgColor: string = "black";
const defTextColor: string = "white";
let usrName: string;
let favColor: string = defBgColor;
let otherFavColor: string =  defTextColor;

function getInp(): void
{
    usrName = (prompt("What is your name?")) as string;

    let color: string | null = prompt("Whats your favorite color?");
    setBgColorName(color);

    color = prompt("Whats your other favorite color?");
    setTextColorName(color);

}

function setBgColorName(color: string | null):void
{
    if (color) // if not null
    {
        favColor = color;
    }
}

function setTextColorName(color: string | null):void
{
    if (color) // if not null
    {
        otherFavColor = color;
    }
}

function renderMesssage(): void
{
    document.write(`Hello, ${usrName}! Your favorite color is ${favColor}!`)
}

function paintScreen(): void
{
    document.body.style.backgroundColor = favColor;
    document.body.style.color = otherFavColor;
}

getInp();
renderMesssage();
paintScreen();
