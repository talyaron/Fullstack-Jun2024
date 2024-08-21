// const totalCharacters = input.length;
function howMachCharcters(password) {
    var totalCharacters = password ? password.length : 0;
    if (totalCharacters < 8)
        return "its to short";
    else if (totalCharacters > 20)
        return "its to long";
    else
        return "its OK";
}
document.write(howMachCharcters(prompt("enter password")));
