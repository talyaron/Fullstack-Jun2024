//primitive variables
var x = 10;
var y = "hello";
var z = true;
//object variables or reference variables
var obj1 = {
    name: "yonatan",
    age: 23,
    isStudent: true,
    address: {
        city: "Addis Ababa",
        country: "Ethiopia"
    }
};
// obj1 = {
//    key: value,
//    key: value,
//    key: value
// }
console.log(obj1.name);
console.log(obj1["name"]);
console.log(obj1.address.city);
obj1.address.country = "Kenya";
// obj1 = {name:"shewit", age: 23, isStudent: true, address: {city: "Addis Ababa", country: "Ethiopia"}};
console.log(obj1.address["country"]);
var obj2 = obj1;
console.log(obj2.name);
obj1.name = "shewit";
console.log(obj2.name);
