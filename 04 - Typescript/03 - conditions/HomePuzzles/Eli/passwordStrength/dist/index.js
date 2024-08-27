var userPassword = String(prompt("enter a passwprd with 8-12 characters in it "));
var minPassLength = 8;
var maxPassLength = 20;
function checkStrength(passcode) {
    if (passcode.length < minPassLength) {
        return "password is too weak";
    }
    else if (passcode.length > maxPassLength) {
        return "password is too long (longer than 20 characters)";
    }
    else if (passcode.length >= minPassLength && passcode.length <= maxPassLength) {
        return "password is good";
    }
    return "something went wrong try again later :/";
}
var passresualt = checkStrength(userPassword);
document.write(passresualt);
