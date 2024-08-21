//Create a program that asks the user to type in a number. Then, tell the user if the number is positive, negative, or zero.
//Request a number from the user in the prompt
var number = Number(prompt('Enter a number'));
//Create a function that can determine if the number is negative, positive, or zero
function numberType(number) {
    if (number > 0) {
        return 'Positive';
    }
    else if (number < 0) {
        return 'Negative';
    }
    else {
        return 'Zero';
    }
}
//Create a const that receives the answer
var answer = numberType(number);
//Write the answer in the document
document.write("The number is " + answer);
