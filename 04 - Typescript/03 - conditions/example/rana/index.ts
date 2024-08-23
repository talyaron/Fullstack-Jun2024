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