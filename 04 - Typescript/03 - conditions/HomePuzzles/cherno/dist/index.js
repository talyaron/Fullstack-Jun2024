/* GLOBAL FUNCTIONS */
function rnd(range) {
    return Math.floor(Math.random() * range) + 1;
}
/* EXERCISE 5 */
function leapCalculator(year) {
    if (0 === year % 400 ||
        (0 === year % 4 && !(0 === year % 100))) {
        return true;
    }
    return false;
}
function leapHandler() {
    var year = Number(prompt("enter year to check if leap"));
    if (leapCalculator(year)) {
        document.write(year + " is a leap year");
    }
    else {
        document.write(year + " is NOT a leap year");
    }
}
/* EXERCISE 6 */
function RPSPicker() {
    switch (rnd(3)) {
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
function RPSDecider(player, website) {
    if ("rock" != player &&
        "paper" != player &&
        "scissors" != player) {
        return "but you didnt pick, not fair!";
    }
    else if (player === website) {
        return "its a draw!";
    }
    else if (("rock" === player && "paper" === website) ||
        ("paper" === player && "scissors" === website) ||
        ("scissors" === player && "rock" === website)) {
        return "I win! better luck next time...";
    }
    else {
        return "You win!";
    }
}
function RPSHandler() {
    var choice = prompt("Lets play rock, paper, scissors!");
    var pick = RPSPicker();
    var result = RPSDecider(choice, pick);
    document.write("I picked " + pick + ", " + result);
}
/* EXERCISE 7 */
function calculator(numA, numB, operation) {
    switch (operation) {
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
                if (numB) {
                    return String(numA / numB);
                }
            }
    }
    return "Invalid";
}
function calcHandler() {
    var numA = Number(prompt("Give a number"));
    var operation = String(prompt("Now an operation"));
    var numB = Number(prompt("And a second number"));
    document.write(numA + " " + operation + " " + numB + " = " + calculator(numA, numB, operation));
}
/* EXERCISE 8 */
function passChecker(password) {
    if (20 < password.length) {
        return "too long";
    }
    else if (8 > password.length) {
        return "too short";
    }
    return "OK";
}
function passHandler() {
    var password = String(prompt("enter your password"));
    document.write("your password is " + passChecker(password));
}
/* EXERCISE 9 */
function tempRecomend(temprature, unit) {
    var converted;
    var ans;
    if ("F" === unit) {
        converted = temprature;
        ans = fToC(temprature) + "\u00B0C:";
    }
    else {
        converted = cToF(temprature);
        ans = converted + "\u00B0F:";
    }
    if (32 > converted) {
        return ans + " It's freezing! Wear a heavy coat.";
    }
    else if (50 > converted) {
        return ans + " It's cold. Bring a jacket.";
    }
    else if (68 > converted) {
        return ans + " It's cool. A light sweater should be fine.";
    }
    else if (86 > converted) {
        return ans + " It's warm. T-shirt weather!";
    }
    else {
        return ans + " It's hot! Stay cool and hydrated.";
    }
}
function cToF(temp) {
    return (temp * 1.8) + 32;
}
function fToC(temp) {
    return (temp - 32) / 1.8;
}
function tempHandler() {
    var temprature = Number(prompt("enter the temprature"));
    var unit = String(prompt("what unit?"));
    document.write("" + tempRecomend(temprature, unit));
}
/* MAIN */
function runEx() {
    var ex = Number(prompt("enter exercise number"));
    switch (ex) {
        case (5):
            {
                leapHandler();
                break;
            }
        case (6):
            {
                RPSHandler();
                break;
            }
        case (7):
            {
                calcHandler();
                break;
            }
        case (8):
            {
                passHandler();
                break;
            }
        case (9):
            {
                tempHandler();
                break;
            }
    }
}
runEx();
