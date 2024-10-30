"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
console.log("Hi from typescript");
var User = /** @class */ (function () {
    function User(pos) {
        this.id = "id=" + crypto.randomUUID();
        this.pos = pos;
    }
    return User;
}());
setInterval(updateServer, 300);
function updateServer() {
    // if(users[0])
    //  users[0].pos.y +=15;
}
app.use(express_1["default"].static("public")); //middleware
//get = a method of http
//route '/'
//req = request
//res = response
//event handler of get method
var users = [];
var x = 100;
//route
app.get("/api/getNewUser", function (req, res) {
    try {
        // setTimeout(() => {
        // }, 3000);
        if (users.length < 2) {
            var newUser = new User({ x: x, y: 100 });
            x = 1600;
            users.push(newUser);
            res.send({ message: "created new user", newUser: newUser });
        }
        else
            res.send({ message: "only 2 players !" });
    }
    catch (error) {
        console.error(error);
    }
});
app.post("/api/moveDown", function (req, res) {
    try {
        res.send({ message: "created new user", users: users });
    }
    catch (error) {
        console.error(error);
    }
});
app.get("/api/getUsers", function (req, res) {
    try {
        res.send({ message: "here are the users", users: users });
    }
    catch (error) {
        console.error(error);
    }
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
