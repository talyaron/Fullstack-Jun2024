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
exports.checkedLoggedUsers = void 0;
var userModel_1 = require("../../models/userModel");
function checkedLoggedUsers() {
    var timeNow = new Date();
    if (userModel_1.loggedUsers.length === 0)
        return;
    userModel_1.loggedUsers.forEach(function (user) {
        if (user.remember)
            return;
        var userTimeLeft = user.date.getTime() - timeNow.getTime();
        if (isNaN(userTimeLeft)) {
            console.error("Invalid date calculation");
        }
        else {
            //  console.log(`User time left in milliseconds: ${userTimeLeft}`);
            if (userTimeLeft > 300000) {
                console.log("5 minutes have passed for this user.");
                timeLogOut(user.userID);
            }
            else {
                //   console.log("Less than 5 minutes have passed for this user.");
            }
        }
    });
}
exports.checkedLoggedUsers = checkedLoggedUsers;
var timeLogOut = function (userID) { return __awaiter(void 0, void 0, void 0, function () {
    var foundUser, foundUserIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userModel_1.UserModel.findById({ userID: userID })];
            case 1:
                foundUser = _a.sent();
                foundUserIndex = userModel_1.loggedUsers.findIndex(function (user) { return (user.userID = userID); });
                if (!foundUser) {
                    console.log("no such user");
                    return [2 /*return*/];
                }
                if (foundUserIndex !== -1) {
                    foundUser.key = "";
                    userModel_1.loggedUsers.splice(foundUserIndex, 1);
                }
                return [2 /*return*/];
        }
    });
}); };
