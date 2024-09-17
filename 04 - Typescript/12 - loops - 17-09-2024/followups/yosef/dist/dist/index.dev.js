"use strict";

//Loops
//  1. initialize the variable
//  2. condition (if the condition is true, the loop will continue)
// 3. increment the variable
var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (var i = 0; i < x.length; i++) {
  console.log(x[i]);
}

console.log("done"); //PYTHON loops
// of: element of array

for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
  var elm = x_1[_i];
  console.log(elm);
}

console.log("done"); // in: index of array

for (var i in x) {
  console.log(x[i]);
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var key in obj) {
  console.log(key, obj[key]);
}

console.log("done");