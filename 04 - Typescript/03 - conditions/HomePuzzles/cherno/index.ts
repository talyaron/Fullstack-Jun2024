/* GLOBAL FUNCTIONS */
function rnd(range: number): number
{
    return Math.floor(Math.random() * range) + 1;
}

/* EXERCISE 5 */

function leapCalculator(year: number): boolean 
{
    if (0 === year % 400 ||
        (0 === year % 4 && !(0 === year % 100))) 
    {
        return true;
    }
    return false;
}

function leapHandler(): void
{
    const year: number = Number(prompt("enter year to check if leap"));

    if (leapCalculator(year))
    {
        document.write(`${year} is a leap year`);
    } 
    else
    {
        document.write(`${year} is NOT a leap year`);
    }
}

/* EXERCISE 6 */

function RPSPicker(): string 
{
    switch (rnd(3)) 
    {
        case 1:
        {
            return "rock";
        }
        case 2:
        {
            return "paper";
        }
        case 3:
        {
            return "scisors";
        }
    }
    return "invalid";
}

function RPSDecider(player: string | null, website: string): string 
{
    if ("rock" != player && 
        "paper" != player && 
        "scissors" != player) 
    {
        return "but you didnt pick, not fair!";
    } 

    else if (player === website) 
    {
        return "its a draw!";
    } 

    else if (("rock" === player && "paper" === website) ||
            ("paper" === player && "scissors" === website) ||
            ("scissors" === player && "rock" === website)) 
    {
        return "I win! better luck next time...";
    }

    else 
    {
        return "You win!";
    }
}

function RPSHandler(): void 
{
    const choice: string | null = prompt("Lets play rock, paper, scissors!");
    const pick: string = RPSPicker();
    const result: string = RPSDecider(choice, pick);

    document.write(`I picked ${pick}, ${result}`);
}

/* EXERCISE 7 */

function calculator(numA: number, numB: number, operation: string): string {
    switch (operation) 
    {
        case "+": 
        {
            return String(numA + numB);
        }
        case "-": 
        {
            return String(numA - numB);
        }
        case "*": 
        {
            return String(numA * numB);
        }
        case "/": 
        {
            if (numB) 
            {
                return String(numA / numB);
            }
        }
    }
    return "Invalid";
}

function calcHandler(): void 
{
    const numA: number = Number(prompt("Give a number"));
    const operation: string = String(prompt("Now an operation"));
    const numB: number = Number(prompt("And a second number"));

    document.write(`${numA} ${operation} ${numB} = ${calculator(numA, numB, operation)}`);
}

/* EXERCISE 8 */

function passChecker(password: string): string 
{
    if (20 < password.length) 
    {
        return "too long";
    }
    else if (8 > password.length) 
    {
        return "too short";
    }
    return "OK";
}

function passHandler(): void 
{
    const password: string = String(prompt("enter your password"));

    document.write(`your password is ${passChecker(password)}`);
}

/* EXERCISE 9 */
function tempRecomend(temprature: number, unit: string): string 
{
    let converted: number;
    let ans: string;
    if ("F" === unit) 
    {
        converted = temprature;
        ans = `${fToC(temprature)}°C:`;
    }
    else 
    {
        converted = cToF(temprature);
        ans = `${converted}°F:`;
    }

    if (32 > converted) 
    {
        return `${ans} It's freezing! Wear a heavy coat.`;
    } 
    else if (50 > converted) 
    {
        return `${ans} It's cold. Bring a jacket.`;
    } 
    else if (68 > converted) 
    {
        return `${ans} It's cool. A light sweater should be fine.`;
    } 
    else if (86 > converted) 
    {
        return `${ans} It's warm. T-shirt weather!`;
    } 
    else 
    {
        return `${ans} It's hot! Stay cool and hydrated.`;
    }
}

function cToF(temp: number): number 
{
    return (temp * 1.8) + 32;
}

function fToC(temp: number): number 
{
    return (temp - 32) / 1.8;
}

function tempHandler(): void {
    const temprature: number = Number(prompt("enter the temprature"));
    const unit: string = String(prompt("what unit?"));

    document.write(`${tempRecomend(temprature, unit)}`);
}

/* MAIN */

function runEx(): void
{
    const ex: number= Number(prompt("enter exercise number"));

    switch (ex)
    {
        case (5):
        {
            leapHandler();
            break;
        }
        case(6):
        {
            RPSHandler();
            break;
        }
        case(7):
        {
            calcHandler();
            break;
        }
        case(8):
        {
            passHandler();
            break;
        }
        case(9):
        {
            tempHandler();
            break;
        }
    }
}

runEx();