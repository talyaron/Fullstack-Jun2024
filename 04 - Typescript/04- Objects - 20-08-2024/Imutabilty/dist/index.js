var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var obj1 = {
    name: 'John',
    age: 30,
    country: 'USA'
};
function createNewUser(obj, name, age, country) {
    //immutability
    var _obj = __assign({}, obj); //shallow copy || spread operator
    _obj.country = country;
    _obj.age = age;
    _obj.name = name;
    return _obj;
}
var obj2 = createNewUser(obj1, "David", 40, 'UK');
console.log(obj1);
console.log(obj2);
