//Loops

const color = ["blue", "green", "pik", "orange", "red", "brown"];


for (let i = 0; i < color.length; i++) {
  console.log(color[i]);
}
console.log("done");

//PYTHON loops

// of: element of array
for (let elm of color) {
  console.log(elm);
}
console.log("done");

// in: index of array
for (let i in  color) {
    console.log( color[i]);
}

const obj = {
    a: 1,
    b: 2,
    c: 3
}

for (let key in obj) {
    console.log(key, obj[key]);
}


console.log("done");