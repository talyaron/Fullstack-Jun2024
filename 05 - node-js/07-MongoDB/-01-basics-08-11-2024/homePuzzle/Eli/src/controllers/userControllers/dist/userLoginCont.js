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
exports.accountLogin = void 0;
var userModel_1 = require("../../models/userModel");
exports.accountLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, keepLogin, user, loggedUser, key, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 8, , 9]);
                _a = req.body, email = _a.email, password = _a.password, keepLogin = _a.keepLogin;
                return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email, password: password })];
            case 1:
                user = _b.sent();
                if (!user) return [3 /*break*/, 6];
                if (!user) return [3 /*break*/, 4];
                user.key = crypto.randomUUID();
                if (keepLogin) {
                    user.remember = true;
                }
                else {
                    user.remember = false;
                }
                loggedUser = {
                    userID: user.id,
                    date: new Date(),
                    remember: keepLogin
                };
                userModel_1.loggedUsers.push(loggedUser);
                key = user.key;
                return [4 /*yield*/, user.updateOne({ email: email }, { key: key })];
            case 2:
                _b.sent();
                return [4 /*yield*/, user.save()];
            case 3:
                _b.sent();
                console.log(user.key);
                res.json({ message: "logging success! --" + keepLogin, key: key });
                console.log(user.name, "was given this key:", key);
                return [2 /*return*/];
            case 4:
                res.json({
                    error: "wrong password",
                    email: email,
                    message: "wrong email or password"
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.json({
                    error: "no such email",
                    email: email,
                    message: "wrong email or password"
                });
                _b.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    res.status(500).json({ error: error_1.message });
                }
                else {
                    res.status(500).json({ error: "An unknown error occurred." });
                }
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
