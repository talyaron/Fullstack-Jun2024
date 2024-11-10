"use strict";
exports.__esModule = true;
exports.userLogOut = void 0;
var userModel_1 = require("../../models/userModel");
function userLogOut(req, res) {
    try {
        var key_1 = req.body.key;
        var foundUserByKey = userModel_1.users.find(function (user) { return key_1 === user.key; });
        if (foundUserByKey) {
            foundUserByKey.key = "";
            res.json({ message: "out success!", key: key_1 });
            console.log("Deleted User Key");
            return;
        }
        else
            res.json({ error: "Invalid Key" });
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
exports.userLogOut = userLogOut;
