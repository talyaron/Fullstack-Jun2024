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
exports.login = exports.register = exports.addClient = void 0;
var ClientModel_1 = require("../../model/clients/ClientModel");
function addClient(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, password, lastName, email, phone, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, firstName = _a.firstName, password = _a.password, lastName = _a.lastName, email = _a.email, phone = _a.phone;
                    console.log(phone);
                    return [4 /*yield*/, ClientModel_1.ClientModel.create({
                            firstName: firstName,
                            password: password,
                            lastName: lastName,
                            email: email,
                            phone: phone
                        })];
                case 1:
                    result = _b.sent();
                    console.log(result);
                    if (!result) {
                        return [2 /*return*/, res.status(400).send({ error: "Couldn't create new user" })];
                    }
                    return [2 /*return*/, res.status(201).send({ message: "Client created successfully" })];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [2 /*return*/, res.status(500).send({ error: error_1.message })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addClient = addClient;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, email, password, phone, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, phone = _a.phone;
                    if (!firstName || !lastName || !email || !password || !phone) {
                        throw new Error('Please fill all fields');
                    }
                    //send request to DB
                    return [4 /*yield*/, ClientModel_1.ClientModel.create({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                            phone: phone
                        })];
                case 1:
                    //send request to DB
                    _b.sent();
                    console.log("Register successful");
                    console.log("the user registration is : " + firstName, lastName, email, password, phone);
                    return [2 /*return*/, res.status(201).send({ message: "User registered successfully" })];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [2 /*return*/, res.status(500).send({ error: error_2.message })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, user, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!email || !password)
                        throw new Error("Please fill all fields");
                    return [4 /*yield*/, ClientModel_1.ClientModel.findOne({ email: email, password: password })];
                case 1:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, res.status(400).send({ error: "Invalid email or password" })];
                    }
                    //send cookie to client
                    res.cookie('user', user._id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
                    return [2 /*return*/, res.status(200).send({ message: "Login successful" })];
                case 2:
                    error_3 = _b.sent();
                    if (error_3.code = "11000") {
                        res.status(400).send({ error: "user already exists" });
                    }
                    console.error(error_3);
                    return [2 /*return*/, res.status(500).send({ error: error_3.message })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
