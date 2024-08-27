function diviadFour(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        else
            return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else
        return false;
}
var year = Number(prompt("enter a year"));
document.write(isItLeap(diviadFour(year)));
function isItLeap(isIt) {
    if (isIt)
        return year + " is a leap year";
    else
        return year + " is not a leap year";
}
