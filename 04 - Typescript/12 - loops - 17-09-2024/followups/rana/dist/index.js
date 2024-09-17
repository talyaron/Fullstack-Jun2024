for (var i = 0; i < 10; i++) {
    console.log(i);
}
var x = ["a", "b", "c", "e", "f"];
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log("done");
for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
    var elm = x_1[_i];
    console.log(elm);
}
console.log("done");
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
