"use strict";
exports.__esModule = true;
exports.updateUser = void 0;
var userModel_1 = require("../../models/userModel");
function updateUser(req, res) {
    try {
        var _a = req.body, email = _a.email, info = _a.info, editedInfo = _a.editedInfo;
        var userEmail_1 = email;
        var user = userModel_1.users.find(function (email) { return email === userEmail_1; });
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (info === 'name') {
            user.userName = editedInfo;
        }
        else if (info === 'email') {
            user.email = editedInfo;
        }
        else {
            user.phoneNumber = editedInfo;
        }
        return res.json({ message: 'Info updated successfully', user: user });
    }
    catch (error) {
        console.error("Error in /api/edit-user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    ;
}
exports.updateUser = updateUser;
;
