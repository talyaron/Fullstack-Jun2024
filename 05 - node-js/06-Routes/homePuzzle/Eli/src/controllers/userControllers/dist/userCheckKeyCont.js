"use strict";
exports.__esModule = true;
exports.checkKey = void 0;
var userModel_1 = require("../../models/userModel");
function checkKey(req, res) {
    try {
        var key_1 = req.body.key;
        var foundEmail = userModel_1.users.find(function (user) { return key_1 === user.key; });
        if (foundEmail) {
            res.json({ message: "logging success!", key: key_1, name: foundEmail.name });
            console.log("Valid Key");
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
exports.checkKey = checkKey;
///check-key
