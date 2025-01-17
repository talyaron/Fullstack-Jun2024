"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.registerUser = void 0;
var formValidatorModel_1 = require("../../models/formValidatorModel");
var userModel_1 = require("../../models/userModel");
exports.registerUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, rePassword, isNameInValid, isEmailInValid, isPasswordInValid, isRepassWordInValid, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, name = _a.name, email = _a.email, password = _a.password, rePassword = _a.rePassword;
                isNameInValid = formValidatorModel_1.infoValidation.isNameValid(name);
                isEmailInValid = formValidatorModel_1.infoValidation.isEmailValid(email);
                isPasswordInValid = formValidatorModel_1.infoValidation.isPasswordValid(password);
                isRepassWordInValid = formValidatorModel_1.infoValidation.isRePasswordValid(rePassword, password);
                if (!(!isNameInValid &&
                    !isEmailInValid &&
                    !isPasswordInValid &&
                    !isRepassWordInValid)) return [3 /*break*/, 2];
                newUser = new userModel_1.UserModel({ email: email, name: name, password: password });
                //   users.push(newUser);
                //  newUser.remember = false;
                return [4 /*yield*/, newUser.save()];
            case 1:
                //   users.push(newUser);
                //  newUser.remember = false;
                _b.sent();
                res.json({ message: "user info valid on server creating user!", newUser: newUser });
                return [3 /*break*/, 3];
            case 2:
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
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    res.status(500).json({ error: error_1.message });
                }
                else {
                    res.status(500).json({ error: "An unknown error occurred." });
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
