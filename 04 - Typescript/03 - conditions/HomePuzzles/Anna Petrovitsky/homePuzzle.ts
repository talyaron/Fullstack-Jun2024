//Exercises 5:
const year : number = Number(prompt("Please enter a year:"));

document.write(`Exercises 5 : <br>`);
leapYear(year);

function leapYear (year : number) : void{
    if(year % 100 == 0){
        if(year % 400 == 0){
            document.write(`${year} is a leap year.`);
        }
    }
    else if(year % 4 == 0){
        document.write(`${year} is a leap year.`);
    }
    else{
        document.write(`${year} is not a leap year.`);
    }
}

//Exercises 6:
const user1 : string | null= prompt("Please choose rock,paper,scissors:") || "null" ;
const user2 : string | null = randomChoice() || "null";
const Result : string = game(user1,user2);

document.write(`<br> Exercises 6 : <br>  User1 choose: ${user1} <br> User2 choose: ${user2} <br> ${Result}`);
//game(user1,user2);
function randomChoice () : string {
    let choice : number= Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "";
    }
}

function game (user1 : string , user2 : string) : string{
    if(user1 === "rock"){
        switch(user2){
            case 'rock':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} none of the user win !!!`;
            case 'paper':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} User 2 WIN THE GAME !!!`;
            case 'scissors':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} User 1 WIN THE GAME !!!`;
            default:
                return "";
        }
    }
    else if(user1 === 'paper'){
        switch(user2){
            case 'rock':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} User 1 WIN THE GAME !!!`;
            case 'paper':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} none of the user win !!!`;
            case 'scissors':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} User 2 WIN THE GAME !!!`;
            default:
                return "";
        }
    }
    else{
        switch(user2){
            case 'rock':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} User 2 WIN THE GAME !!!`;
            case 'paper':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} User 1 WIN THE GAME !!!`;
            case 'scissors':
                return `User 1 choice a ${user1} and User 2 choice a ${user2} none of the user win!!!`;
            default:
                return "";
        }
    }
}

//Exercises 7:

const firstNum :number = Number(prompt('Please enter first number:'));
const secondNum :number = Number(prompt('Please enter second number:'));
const operator : string = prompt('Please enter the operator: + or - or * or /') || 'null';

const result : number = calculator(firstNum,secondNum,operator);
document.write(`<br> Exercises 7 <br> Calculator result is ${firstNum} ${operator} ${secondNum} = ${result}`);


function calculator (num1 : number, num2 : number, operator : string) : number{
    switch (operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}

//Exercises 8:
const password : string = prompt("Please enter a password:") || 'null';

const testPassword : string =checkPassword(password);
document.write(`<br> Exercises 8: <br> The password that you entered is ${testPassword}`);

function checkPassword (password : string) : string{
    if(password.length <8){
        return "Too Short";
    }
    else if(password.length <=20){
        return "OK";
    }
    else{
        return "Too long";
    }
}

//Exercises 9:
const temp : number = Number(prompt("Please enter the temperature:"));
const unit : string = prompt("Please enter the unit:") || "null";
const converted :string = convertUnit(temp,unit);
const recommend : string = clothingRec(temp,unit);
document.write(`<br> Exercises 9: <br> your temp is ${temp}${unit} and converted ${converted} 
    <br> Base on the temperature that you insert the clothing recommendations is: ${recommend}`);

function convertUnit(temp : number,unit : string) : string{
    if(unit == "F")
        return ((temp - 32) / 1.8) + "C";
    else 
        return ((temp * 1.8) + 32) + "F";
}

function clothingRec (temp : number, unit : string) : string{
    if(unit == "F"){
        if(temp < 32)
            return "It's freezing! Wear a heavy coat.";
        else if(temp <= 50)
            return "It's cold. Bring a jacket.";
        else if(temp <= 68)
            return "It's cool. A light sweater should be fine.";
        else if(temp <= 86)
            return "It's warm. T-shirt weather!";
        else
            return "It's hot! Stay cool and hydrated.";
    }
    else{
        if(temp < 0)
            return "It's freezing! Wear a heavy coat.";
        else if(temp <= 10)
            return "It's cold. Bring a jacket.";
        else if(temp <= 20)
            return "It's cool. A light sweater should be fine.";
        else if(temp <= 30)
            return "It's warm. T-shirt weather!";
        else
            return "It's hot! Stay cool and hydrated.";
    }
}