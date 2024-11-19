var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function handleAddUser(event) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, firstName, lastName, email, phone, date, password, yearOfBirth, response, errorData, infoResponse, infoUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    formData = new FormData(event.target);
                    firstName = formData.get("firstName");
                    lastName = formData.get("lastName");
                    email = formData.get("email");
                    phone = formData.get("phone");
                    date = formData.get("date");
                    password = formData.get("password");
                    yearOfBirth = new Date(date).getFullYear();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, fetch("http://localhost:3002/api/users/add-user", {
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
                case 2:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    errorData = _a.sent();
                    console.error("Failed to add user:", errorData.error);
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, fetch("http://localhost:3002/api/users/get-user?firstName=" + firstName + "&lastName=" + lastName + "&email=" + email + "&phone=" + phone + "&yearOfBirth=" + yearOfBirth, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    })];
                case 5:
                    infoResponse = _a.sent();
                    if (!infoResponse.ok) {
                        console.error("Failed to fetch user details:", infoResponse.statusText);
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, infoResponse.json()];
                case 6:
                    infoUser = _a.sent();
                    appendUser(infoUser.user);
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.error("An error occurred:", error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function appendUser(user) {
    var userInfoDiv = document.querySelector("#userInfo");
    userInfoDiv.innerHTML += "\n      <div class=\"user-card\" id=\"" + user.email + "\">\n          <strong>Full Name:</strong> " + user.firstName + " " + user.lastName + "<br>\n          <strong>Email:</strong> " + user.email + "<br>\n          <strong>Phone:</strong> " + user.phone + "<br>\n          <strong>Year of Birth:</strong> " + user.yearOfBirth + "<br>\n          <button class=\"edit-btn\" data-email=\"" + user.email + "\">Edit</button>\n      </div>\n      <hr>\n    ";
}
function handleEditUser(event) {
    return __awaiter(this, void 0, void 0, function () {
        var target, email, newFirstName, newPhone, updates, response, errorData, updatedUser, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    target = event.target;
                    if (!target.classList.contains("edit-btn")) return [3 /*break*/, 7];
                    email = target.getAttribute("data-email");
                    newFirstName = prompt("Enter new first name:") || undefined;
                    newPhone = prompt("Enter new phone number:") || undefined;
                    if (!newFirstName && !newPhone) {
                        alert("No changes made.");
                        return [2 /*return*/];
                    }
                    updates = __assign(__assign({}, (newFirstName && { firstName: newFirstName })), (newPhone && { phone: newPhone }));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("http://localhost:3002/api/users/update-user", {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email: email, updates: updates })
                        })];
                case 2:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    return [4 /*yield*/, response.json()];
                case 3:
                    errorData = _a.sent();
                    console.error("Failed to update user:", errorData.error);
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, response.json()];
                case 5:
                    updatedUser = _a.sent();
                    updateUserCard(email, updatedUser.user);
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error("An error occurred:", error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function updateUserCard(email, user) {
    var userCard = document.getElementById(email);
    userCard.innerHTML = "\n      <strong>Full Name:</strong> " + user.firstName + " " + user.lastName + "<br>\n      <strong>Email:</strong> " + user.email + "<br>\n      <strong>Phone:</strong> " + user.phone + "<br>\n      <strong>Year of Birth:</strong> " + user.yearOfBirth + "<br>\n      <button class=\"edit-btn\" data-email=\"" + user.email + "\">Edit</button>\n    ";
}
var userForm = document.querySelector("#userForm");
userForm.addEventListener("submit", handleAddUser);
var userInfoDiv = document.querySelector("#userInfo");
userInfoDiv.addEventListener("click", handleEditUser);
