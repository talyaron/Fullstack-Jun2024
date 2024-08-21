var yearInput = Number(prompt("Give me a year"));
function calcLeapYear(year) {
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
var yearAnswer = calcLeapYear(yearInput);
document.write("your year " + yearInput + " being a leap year is : " + yearAnswer);
