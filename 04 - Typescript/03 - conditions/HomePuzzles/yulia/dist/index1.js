/* Write a program that asks the user to enter a year,
then tells them if it's a leap year or not.
A leap year is divisible by 4, except for century years
(years ending with 00). The century years are leap years only
if they are perfectly divisible by 400.
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
;
function checkLeapYear() {
    var input = prompt("Enter a year:");
    var year = parseInt(input || "0");
    if (isNaN(year)) {
        console.log("Please enter a valid number.");
    }
    else {
        if (isLeapYear(year)) {
            console.log(year + " is a leap year.");
        }
        else {
            console.log(year + " is not a leap year.");
        }
    }
}
checkLeapYear();
