//function declaration
function add(a: number, b: number): number {
    //block code -> the function doing something here
    return a + b;
}

// {
//block code
// }

// anonymous function
// const add2 = function (a: number, b: number): number {
//     return a + b;
// };

// arrow function
const add2 = (a: number, b: number): number => a + b;

const addNadMultiply = (a: number, b: number): number => {
    a = a * b;
    return a + b;
}



//invoking the function
console.log(addNadMultiply(1, 2)); //4

console.log(add2(1, 2));


const x:number[] = [1, 2, 3, 4, 5, 6]
const y:number[] = x.map(item => item * 2);
console.log(y);
