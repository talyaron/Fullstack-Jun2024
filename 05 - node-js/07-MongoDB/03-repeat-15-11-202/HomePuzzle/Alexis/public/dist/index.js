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
exports.handleAddClient = void 0;
function handleAddClient(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, firstName, lastName, email, phone, date, yearOfBirth, password, response, data, info, infoUser, userInfo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    ev.preventDefault();
                    formData = new FormData(ev.target);
                    firstName = formData.get("firstName");
                    lastName = formData.get("lastName");
                    email = formData.get("email");
                    phone = formData.get("phone");
                    date = formData.get("date");
                    yearOfBirth = new Date(date).getFullYear();
                    password = formData.get("password");
                    return [4 /*yield*/, fetch("/api/users/add-client", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                phone: phone,
                                yearOfBirth: yearOfBirth,
                                password: password
                            })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    console.log({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        yearOfBirth: yearOfBirth,
                        password: password
                    });
                    _a.label = 3;
                case 3: return [4 /*yield*/, fetch("/api/users/get-user-details?firstName=" + firstName + "&lastName=" + lastName + "&email=" + email + "&phone=" + phone + "&yearOfBirth=" + yearOfBirth, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    })];
                case 4:
                    info = _a.sent();
                    if (!info.ok) return [3 /*break*/, 6];
                    return [4 /*yield*/, info.json()];
                case 5:
                    infoUser = _a.sent();
                    userInfo = document.querySelector("#result");
                    userInfo.innerHTML = "\n        <strong>Full Name:</strong> " + infoUser.user.firstName + " " + infoUser.user.lastName + "<br>\n        <strong>Email:</strong> " + infoUser.user.email + "<br>\n        <strong>Phone:</strong> " + infoUser.user.phone + "<br>\n        <strong>Year of Birth:</strong> " + infoUser.user.yearOfBirth + "\n      ";
                    console.log("User details fetched successfully.");
                    return [3 /*break*/, 7];
                case 6:
                    console.error("Failed to fetch user details:", info.statusText);
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    console.error("error", error_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.handleAddClient = handleAddClient;
