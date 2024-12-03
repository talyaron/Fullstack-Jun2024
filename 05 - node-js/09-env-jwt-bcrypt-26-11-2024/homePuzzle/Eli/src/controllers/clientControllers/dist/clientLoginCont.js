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
exports.loginClient = void 0;
var clientModel_1 = require("../../models/clientModel");
var jwt_simple_1 = require("jwt-simple");
var bcrypt_1 = require("bcrypt");
require("dotenv/config");
var clientRegCont_1 = require("./clientRegCont");
function loginClient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, phoneNumber, password, foundUser, match, token, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, phoneNumber = _a.phoneNumber, password = _a.password;
                    return [4 /*yield*/, clientModel_1.ClientModel.findOne({ phoneNumber: phoneNumber })];
                case 1:
                    foundUser = _b.sent();
                    if (!foundUser) {
                        res.json({ message: "wrong password or phone number" });
                        return [2 /*return*/];
                    }
                    if (!foundUser.password) {
                        res.json({ message: "wrong password or phone number" });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, bcrypt_1["default"].compare(password, foundUser.password)];
                case 2:
                    match = _b.sent();
                    if (!match) {
                        res.json({ message: "wrong password or phone number" });
                        return [2 /*return*/];
                    }
                    token = jwt_simple_1["default"].encode({ id: foundUser._id, role: "user" }, clientRegCont_1.secret);
                    res.cookie('user', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
                    return [2 /*return*/, res.status(200).send({ message: "Login successful", ok: true })];
                case 3:
                    error_1 = _b.sent();
                    console.error("error");
                    return [2 /*return*/, res.status(500).send({ error: "something went Wrong!" })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.loginClient = loginClient;
