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
exports.addUser = exports.secret = void 0;
var userModel_1 = require("../../models/userModel");
var bcrypt_1 = require("bcrypt");
var saltRounds = process.env.SALT_BCRYPT;
exports.secret = String(process.env.SECRET_JWT);
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, password, email, phone, imageUrl, yearOfBirth, hashPassword, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    if (!saltRounds)
                        throw new Error('add salt');
                    _a = req.body, name = _a.name, password = _a.password, email = _a.email, phone = _a.phone, imageUrl = _a.imageUrl, yearOfBirth = _a.yearOfBirth;
                    return [4 /*yield*/, bcrypt_1["default"].hash(password, saltRounds)];
                case 1:
                    hashPassword = _b.sent();
                    return [4 /*yield*/, userModel_1.UserModel.create({
                            name: name,
                            password: hashPassword,
                            email: email,
                            phone: phone,
                            imageUrl: imageUrl,
                            yearOfBirth: yearOfBirth
                        })];
                case 2:
                    result = _b.sent();
                    console.log(result);
                    if (!result) {
                        return [2 /*return*/, res.status(400).send({ error: "Couldn't create new user!" })];
                    }
                    return [2 /*return*/, res.status(201).send({ message: "user was created successfully!" })];
                case 3:
                    error_1 = _b.sent();
                    console.error("error");
                    console.log('here');
                    return [2 /*return*/, res.status(500).send({ error: error_1 })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.addUser = addUser;
