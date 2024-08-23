var inputValue = prompt("Please enter the number of your password characters for strength test");
function passChecker(length) {
    if (length <= 8) {
        return 'password is short';
    }
    else if (length > 20) {
        return "password is too long";
    }
    else {
        return "password is ok.";
    }
}
if (inputValue !== null) {
    var passwordLength = parseInt(inputValue);
    if (!isNaN(passwordLength)) {
        console.log(passChecker(passwordLength));
    }
    else {
        console.log("Please enter a valid number.");
    }
}
else {
    console.log("Input was cancelled.");
}
