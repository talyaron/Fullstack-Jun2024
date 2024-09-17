//Loops
//  1. initialize the variable
//  2. condition (if the condition is true, the loop will continue)
// 3. increment the variable

// const x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];


// for (let i = 0; i < x.length; i++) {
//   console.log(x[i]);
// }
// console.log("done");

// //PYTHON loops

// // of: element of array
// for (let elm of x) {
//   console.log(elm);
// }
// console.log("done");

// // in: index of array
// for (let i in x) {
//     console.log(x[i]);
// }

const obj = {
    a: 1,
    b: 2,
    c: 3,
    yosef: 55
}

for (let key in obj) {
    console.log("hey "+key, obj[key]*10);
}


console.log("done");

const x = document.createElement("div");
x.style.color = "blue";
x.innerHTML = "hey";
x.innerHTML = "<br>";

for (let i = 0; i < 30; i++) {
    x.style.fontSize += "${i}px";
    x.innerHTML += "hey<br>";
    
}
document.body.append(x);



