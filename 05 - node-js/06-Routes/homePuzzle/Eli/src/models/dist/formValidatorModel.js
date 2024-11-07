"use strict";
exports.__esModule = true;
exports.infoValidation = exports.infoValidator = void 0;
var userModel_1 = require("./userModel");
var infoValidator = /** @class */ (function () {
    function infoValidator() {
        this.regN = /^[a-zA-Z\s'-]+$/;
        this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regP =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    infoValidator.prototype.isNameValid = function (name) {
        if (this.regN.test(name) == false)
            return "invalid name";
        return "";
    };
    infoValidator.prototype.isEmailValid = function (email) {
        var emailExist = userModel_1.users.some(function (user) { return email === user.email; });
        if (this.regE.test(email) == false)
            return "invalid email : email needs @ and a .com ending";
        if (emailExist)
            return "invalid email : email already exists!";
        return "";
    };
    infoValidator.prototype.isPasswordValid = function (password) {
        if (this.regP.test(password) == false)
            return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
        return "";
    };
    infoValidator.prototype.isRePasswordValid = function (rePassword, password) {
        if (rePassword !== password)
            return "invalid repeat password: required to be the same as password";
        return "";
    };
    return infoValidator;
}());
exports.infoValidator = infoValidator;
exports.infoValidation = new infoValidator();
