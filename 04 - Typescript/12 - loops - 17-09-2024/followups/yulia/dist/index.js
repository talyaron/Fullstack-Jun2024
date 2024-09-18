var x = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
console.log("done");
var y = "hello!";
for (var _i = 0, y_1 = y; _i < y_1.length; _i++) {
    var el = y_1[_i];
    console.log(el);
}
console.log("done");
var obj = { one: 1, two: 2, three: 3 };
for (var key in obj) {
    console.log(key, obj[key]);
}
console.log("done");
