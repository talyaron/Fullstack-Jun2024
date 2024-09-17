//Loops
//  1. initialize the variable
//  2. condition (if the condition is true, the loop will continue)
// 3. increment the variable

const fruits = ["apple", "banana", "cherry", "orange", "pepper", "grape"];


for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("======done======");

//PYTHONIC loops

// of: element of array
for (let fruit of fruits) {
  console.log(fruit);
  if (fruit === "banana") break;
}

console.log("======done======");

// in: index of array
for (let i in fruits) {
    if (Number(i) % 2 === 0) continue;
    console.log(fruits[i]);
}

console.log("======done======");
