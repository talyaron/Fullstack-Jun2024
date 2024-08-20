const x: number = 15;

if (x == 10) {
    console.log('x is 10');
} else {
    console.log('x is not 10');
}

if (x <= 10) {
    console.log('x is equal to 10 or less than 10');
} else {
    console.log('x is greater than 10');
}

if (x >= 10) {
    console.log('x is equal to 10 or greater than 10');
}

// != means not equal to
if (x != 10) {
    console.log('x is not 10');
}

// create MVC that will tell the user if she is allowed to drink alcohol

const age =Number( prompt('How old are you?'));
console.log(age);

function isLegal(age: number): boolean {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

const isLegalToDrink = isLegal(age);
document.write(`Is it legal to drink alcohol? ${isLegalToDrink}`);