var age = Number(prompt('How old are you?'));
console.log(age);
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function tellUserIfLegalToDrink(isLegal) {
    if (isLegal) {
        return 'You are allowed to drink alcohol';
    }
    else {
        return 'You are not allowed to drink alcohol';
    }
}
var isLegalToDrink = isLegal(age);
var message = tellUserIfLegalToDrink(isLegalToDrink);
document.write(message);
