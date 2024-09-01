const age =Number( prompt('How old are you?'));
console.log(age);

function isLegal(age: number): boolean {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

function tellUserIfLegalToDrink(isLegal:boolean): string {
    if(isLegal) {
        return 'You are allowed to drink alcohol';
    } else {
        return 'You are not allowed to drink alcohol';
    }
   
}

const isLegalToDrink = isLegal(age);
const message: string = tellUserIfLegalToDrink(isLegalToDrink); 
document.write(message);