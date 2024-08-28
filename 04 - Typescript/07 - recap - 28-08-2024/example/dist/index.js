//function declaration
function add(a, b) {
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
var add2 = function (a, b) { return a + b; };
var addNadMultiply = function (a, b) {
    a = a * b;
    return a + b;
};
//invoking the function
console.log(addNadMultiply(1, 2)); //4
console.log(add2(1, 2));
var x = [1, 2, 3, 4, 5, 6];
var y = x.map(function (item) { return item * 2; });
console.log(y);
