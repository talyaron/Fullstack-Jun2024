"use strict";
exports.__esModule = true;
exports.loginUser = void 0;
var users_1 = require("../../models/users");
function loginUser(req, res) {
    try {
        var data = req.body.data;
        res.send(checkUser(data.username, data.password));
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering user: " + error });
    }
}
exports.loginUser = loginUser;
function checkUser(username, password) {
    var user = users_1.users.find(function (u) { return u.username === username && u.password === password; });
    if (user)
        return { isLoggedIn: true, userId: user.id };
    return { isLoggedIn: false };
}
