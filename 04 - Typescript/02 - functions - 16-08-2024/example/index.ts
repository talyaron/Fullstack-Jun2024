

// function invocation
debugger; // breakpoint
console.log(add(1, 2)); 
console.log(add(3, 4));

console.log(multiply(1, 2));

let multiplicationOfTwoNumbers: number = multiply(3, 4);
console.log(multiplicationOfTwoNumbers);


// function declaration
//function gets ARGUMENTS and RETURNS a value

function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}
