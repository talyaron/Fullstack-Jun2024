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
document.addEventListener("DOMContentLoaded", function (event) {
    getAllUsers();
});
function handleSendUser(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, formData, name, email, password, phone, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    form = event.target;
                    formData = new FormData(form);
                    name = formData.get('name');
                    email = formData.get('email');
                    password = formData.get('password');
                    phone = formData.get('phone');
                    return [4 /*yield*/, fetch('/api/users/send-user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ name: name, email: email, password: password, phone: phone })
                        })];
                case 1:
                    response = _a.sent();
                    // console.log(name, email, password, phone)
                    if (!response.ok)
                        throw new Error('Failed to create User data');
                    return [4 /*yield*/, getAllUsers()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, allUsers, userContainer_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/users/get-user')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    allUsers = _a.sent();
                    console.log(allUsers);
                    userContainer_1 = document.querySelector("#users");
                    if (!userContainer_1)
                        throw new Error('No Users container found');
                    userContainer_1.innerHTML = '';
                    allUsers.forEach(function (user) {
                        // console.log('User:', user); // Some Testing to check all users working well good.
                        // console.log("User ID:", user.id); // Some Testing to check what the id number of user.
                        var userElement = document.createElement("div");
                        userElement.setAttribute("data-id", user.id);
                        userElement.classList.add("user");
                        userElement.innerHTML = "\n                <h2 class=\"user-name\">" + user.name + "</h2>\n                <p class=\"user-email\">" + user.email + "</p>\n                <p class=\"user-password\">" + user.password + "</p>\n                <p class=\"user-phone\">" + user.phone + "</p>\n\n                <button class=\"update-button\" onclick=\"toggleUpdateUser('" + user.id + "')\">Update</button>\n                <button class=\"delete-button\" onclick=\"deleteUser('" + user.id + "')\">Delete</button>\n            ";
                        userContainer_1.appendChild(userElement);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteUser(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!_id)
                        throw new Error('User ID is missing');
                    return [4 /*yield*/, fetch('/api/users/delete-user', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ _id: _id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete user.');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data.message);
                    return [4 /*yield*/, getAllUsers()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateUser(id, name, email, password, phone) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/update-user", {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id, name: name, email: email, password: password, phone: phone })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to update User');
                    console.log("User updated successfully");
                    return [4 /*yield*/, getAllUsers()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function toggleUpdateUser(id) {
    return __awaiter(this, void 0, void 0, function () {
        var userElement, nameElement, emailElement, passwordElement, phoneElement, updatedName, updatedEmail, updatedPassword, updatedPhone, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    userElement = document.querySelector(".user[data-id='" + id + "']");
                    if (!userElement)
                        throw new Error("User Element Not Found");
                    nameElement = userElement.querySelector('.user-name');
                    emailElement = userElement.querySelector('.user-email');
                    passwordElement = userElement.querySelector('.user-password');
                    phoneElement = userElement.querySelector('.user-phone');
                    if (!nameElement || !emailElement || !passwordElement || !phoneElement)
                        throw new Error("One or more elements not found for the user");
                    if (!nameElement.isContentEditable) return [3 /*break*/, 2];
                    updatedName = nameElement.innerText;
                    updatedEmail = emailElement.innerText;
                    updatedPassword = passwordElement.innerText;
                    updatedPhone = phoneElement.innerText;
                    return [4 /*yield*/, updateUser(id, updatedName, updatedEmail, updatedPassword, updatedPhone)];
                case 1:
                    _a.sent();
                    nameElement.contentEditable = "false";
                    emailElement.contentEditable = "false";
                    passwordElement.contentEditable = "false";
                    phoneElement.contentEditable = "false";
                    return [3 /*break*/, 3];
                case 2:
                    nameElement.contentEditable = "true";
                    emailElement.contentEditable = "true";
                    passwordElement.contentEditable = "true";
                    phoneElement.contentEditable = "true";
                    nameElement.focus();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
