//ways to write functions in typescript
//1. regular function
function add(a:number, b:number): number {
    return a + b;
}
console.log(add(1, 2));

//anonymous function
const add2 = function (a:number, b:number): number {
    return a + b;
};
console.log(add2(1, 2));

//arrow function
const add3 = (a:number, b:number): number => {
    return a + b;
};
console.log(add3(1, 2));

const power = (a:number): number => {
    return a * a;
};

const power2 = (a:number): number => a * a;

const power3 = a => a * a;

