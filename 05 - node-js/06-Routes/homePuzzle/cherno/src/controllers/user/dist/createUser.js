"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var users_1 = require("../../models/users");
function registerUser(req, res) {
    try {
        var data = req.body.data;
        if (!createUser(data.username, data.password))
            res.send({ ifCreated: false });
        else
            res.send({ ifCreated: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering user: " + error });
    }
}
exports.registerUser = registerUser;
function createUser(username, password) {
    if (users_1.users.find(function (u) { return u.username === username; }))
        return false;
    var newUser = { id: crypto.randomUUID(), username: username, password: password };
    users_1.users.push(newUser);
    return true;
}
