const x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}
console.log("done");

const y = "hello!";
for (const el of y) {
  console.log(el);
}
console.log("done");

const obj = { one: 1, two: 2, three: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}
console.log("done");

