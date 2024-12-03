const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lastNumber: number | undefined = numbers.pop();

console.log(lastNumber); 
console.log(numbers); 
document.write (`the last number is ${lastNumber}, the other numbers are ${numbers}`)