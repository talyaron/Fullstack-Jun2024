// Make a calculator that asks the user for two numbers and an operation (+, -, *, /). 
// Use if statements to perform the correct operation and display the result.
// Remember to handle division by zero!

function calculate(num1: number, num2: number, operation: string): number | string {
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            return 'Error: Division by zero'; 
        } else {
            return num1 / num2;
        }
    } else {
        return 'Invalid operation'; 
    }
}

function Calculator() {
    const input1 = prompt('Enter the first number:');
    const num1 = parseFloat(input1 || '0');

    const input2 = prompt('Enter the second number:');
    const num2 = parseFloat(input2 || '0');

    const operation = prompt('Enter an operation (+, -, *, /):');

    const result = calculate(num1, num2, operation || '');
    console.log('The result is: ' + result);
}

Calculator();