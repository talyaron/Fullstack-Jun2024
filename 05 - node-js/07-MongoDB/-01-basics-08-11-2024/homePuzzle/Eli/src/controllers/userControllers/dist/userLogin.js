"use strict";
exports.__esModule = true;
exports.accountLogin = void 0;
var userModel_1 = require("../../models/userModel");
function accountLogin(req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password, keepLogin = _a.keepLogin;
        var foundEmail = userModel_1.users.find(function (user) { return email_1 === user.email; });
        if (foundEmail) {
            var foundPassword = foundEmail.password === password;
            if (foundPassword) {
                foundEmail.assignKey();
                if (keepLogin) {
                    foundEmail.remember = true;
                }
                else {
                    foundEmail.remember = false;
                }
                var loggedUser = {
                    userID: foundEmail.id,
                    date: new Date(),
                    remember: keepLogin
                };
                userModel_1.loggedUsers.push(loggedUser);
                var key = foundEmail.key;
                res.json({ message: "logging success! --" + keepLogin, key: key });
                console.log(foundEmail.name, "was given this key:", key);
                return;
            }
            else
                res.json({
                    error: "wrong password",
                    email: email_1,
                    message: "wrong email or password"
                });
        }
        else
            res.json({
                error: "no such email",
                email: email_1,
                message: "wrong email or password"
            });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "An unknown error occurred." });
        }
    }
}
exports.accountLogin = accountLogin;
