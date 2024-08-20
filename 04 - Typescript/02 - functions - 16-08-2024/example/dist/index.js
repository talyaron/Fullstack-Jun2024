// function invocation
debugger; // breakpoint
console.log(add(1, 2));
console.log(add(3, 4));
console.log(multiply(1, 2));
var multiplicationOfTwoNumbers = multiply(3, 4);
console.log(multiplicationOfTwoNumbers);
// function declaration
//function gets ARGUMENTS and RETURNS a value
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
