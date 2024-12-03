"use strict";
exports.__esModule = true;
exports.getUser = void 0;
var userModel_1 = require("../../models/userModel");
function getUser(req, res) {
    try {
        var email = req.body.email;
        userModel_1.userModel.findOne({ email: email }).then(function (user) {
            res.json(user);
            console.log(user);
        });
    }
    catch (error) {
        console.error("Error in /api/getUser:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
exports.getUser = getUser;
