"use strict";
exports.__esModule = true;
exports.removeUser = void 0;
var userModel_1 = require("../../models/userModel");
function removeUser(req, res) {
    var id = req.body.id;
    userModel_1.userModel.deleteOne({ id: id })["catch"](function (err) {
        console.error('Error deleting user:', err);
    });
    return res.json({ message: 'User deleted successfully', users: userModel_1.users });
}
exports.removeUser = removeUser;
;
