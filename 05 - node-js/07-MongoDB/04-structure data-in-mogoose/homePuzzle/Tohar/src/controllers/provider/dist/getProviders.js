"use strict";
exports.__esModule = true;
exports.getProviders = void 0;
var userModel_1 = require("../../models/userModel");
function getProviders(req, res) {
    userModel_1.userModel.find({ isProvider: true }).then(function (users) {
        if (!users || users.length === 0) {
            return res.status(404).json({ error: "No providers found" });
        }
        res.json(users);
    })["catch"](function (error) {
        res.status(500).json({ error: "Internal Server Error" });
    });
}
exports.getProviders = getProviders;
