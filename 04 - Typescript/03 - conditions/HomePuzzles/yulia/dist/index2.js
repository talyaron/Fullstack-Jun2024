// Make a calculator that asks the user for two numbers and an operation (+, -, *, /). 
// Use if statements to perform the correct operation and display the result.
// Remember to handle division by zero!
function calculate(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2;
    }
    else if (operation === '-') {
        return num1 - num2;
    }
    else if (operation === '*') {
        return num1 * num2;
    }
    else if (operation === '/') {
        if (num2 === 0) {
            return 'Error: Division by zero';
        }
        else {
            return num1 / num2;
        }
    }
    else {
        return 'Invalid operation';
    }
}
function Calculator() {
    var input1 = prompt('Enter the first number:');
    var num1 = parseFloat(input1 || '0');
    var input2 = prompt('Enter the second number:');
    var num2 = parseFloat(input2 || '0');
    var operation = prompt('Enter an operation (+, -, *, /):');
    var result = calculate(num1, num2, operation || '');
    console.log('The result is: ' + result);
}
Calculator();
