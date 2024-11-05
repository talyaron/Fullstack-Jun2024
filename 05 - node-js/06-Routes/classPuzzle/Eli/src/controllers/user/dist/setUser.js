"use strict";
exports.__esModule = true;
exports.setUser = void 0;
var userModel_1 = require("../../models/users/userModel");
var userModel_2 = require("../../models/users/userModel");
function setUser(req, res) {
    var _a = req.body, id = _a.id, name = _a.name, email = _a.email, password = _a.password;
    console.log('Received POST request:', req.body);
    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields (name, email, password) are required" });
    }
    var newUSer = new userModel_2.User(id, name, email, password);
    userModel_1.users.push(newUSer);
    console.log('Current posts:', userModel_1.users);
    res.status(201).json({ message: "Post added successfully" });
}
exports.setUser = setUser;
