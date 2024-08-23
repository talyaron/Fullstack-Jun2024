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
var isLegalToDrink = isLegal(age);
document.write("Is it legal to drink alcohol? " + isLegalToDrink);
