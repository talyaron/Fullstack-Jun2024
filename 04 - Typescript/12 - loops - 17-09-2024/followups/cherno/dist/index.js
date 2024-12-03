//Loops
//  1. initialize the variable
//  2. condition (if the condition is true, the loop will continue)
// 3. increment the variable
var fruits = ["apple", "banana", "cherry", "orange", "pepper", "grape"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log("======done======");
//PYTHONIC loops
// of: element of array
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
    if (fruit === "banana")
        break;
}
console.log("======done======");
// in: index of array
for (var i in fruits) {
    if (Number(i) % 2 === 0)
        continue;
    console.log(fruits[i]);
}
console.log("======done======");
