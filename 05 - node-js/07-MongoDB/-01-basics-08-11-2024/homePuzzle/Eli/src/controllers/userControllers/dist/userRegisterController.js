"use strict";
exports.__esModule = true;
exports.registerUser = void 0;
var formValidatorModel_1 = require("../../models/formValidatorModel");
var userModel_1 = require("../../models/userModel");
function registerUser(req, res) {
    try {
        var _a = req.body, name = _a.name, email = _a.email, password = _a.password, rePassword = _a.rePassword;
        var isNameInValid = formValidatorModel_1.infoValidation.isNameValid(name);
        var isEmailInValid = formValidatorModel_1.infoValidation.isEmailValid(email);
        var isPasswordInValid = formValidatorModel_1.infoValidation.isPasswordValid(password);
        var isRepassWordInValid = formValidatorModel_1.infoValidation.isRePasswordValid(rePassword, password);
        if (!isNameInValid &&
            !isEmailInValid &&
            !isPasswordInValid &&
            !isRepassWordInValid) {
            var newUser = new userModel_1.User(email, name, password);
            userModel_1.users.push(newUser);
            newUser.remember = false;
            res.json({ message: "user info valid on server creating user!", users: userModel_1.users });
        }
        else {
            if (isEmailInValid) {
                res.json({
                    error: "" + isEmailInValid
                });
            }
            else
                res.json({
                    error: "Some discrepancies occurred",
                    isNameInValid: isNameInValid,
                    isPasswordInValid: isPasswordInValid,
                    isRepassWordInValid: isRepassWordInValid
                });
        }
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
exports.registerUser = registerUser;
