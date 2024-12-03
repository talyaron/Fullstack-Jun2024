var user = {
    name: "",
    city: ""
};
function GetUserInfo() {
    try {
        var name = prompt("pls enter your name");
        var city = prompt("pls enter your city");
        var user_1 = {
            name: name,
            city: city
        };
        return (user_1);
    }
    catch (error) {
        console.error(error);
    }
}
var results = GetUserInfo();
console.log(results);
document.write("your name is " + (results === null || results === void 0 ? void 0 : results.name) + ", you live in " + (results === null || results === void 0 ? void 0 : results.city));
