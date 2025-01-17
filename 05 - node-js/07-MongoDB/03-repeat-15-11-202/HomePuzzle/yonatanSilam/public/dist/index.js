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
function main() {
    try {
        var getUsersBtn = document.querySelector("#getUsers");
        if (!getUsersBtn)
            throw new Error("not find getUsers");
        getUsersBtn.addEventListener("click", getUsers);
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddClient(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var form, formData, name, email, phone, imageUrl, date, yearOfBirth, response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    form = ev.target;
                    formData = new FormData(form);
                    name = formData.get("name");
                    email = formData.get("email");
                    phone = formData.get("phone");
                    imageUrl = formData.get("imageUrl");
                    date = formData.get("date");
                    yearOfBirth = new Date(date).getFullYear();
                    form.reset();
                    return [4 /*yield*/, fetch("/api/users/add-user", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name: name,
                                email: email,
                                phone: phone,
                                imageUrl: imageUrl,
                                yearOfBirth: yearOfBirth
                            })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/get-users")];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to fetch USERS");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/users/get-user?userId=" + id)];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to fetch USER");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getUserByEmail(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var form, formData, email, response, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    form = ev.target;
                    formData = new FormData(form);
                    email = formData.get("email");
                    form.reset();
                    return [4 /*yield*/, fetch("/api/users/get-user-by-email?email=" + email)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    renderUser(data.user);
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function renderUser(user) {
    try {
        var userCard = document.querySelector("#userCard");
        if (!userCard)
            throw new Error("not find userCard");
        userCard.innerHTML = "\n<div class=\"user-card\">\n  <div class=\"user-avatar\">\n    <img src=\"" + user.imageUrl + "\" alt=\"User Avatar\" />\n  </div>\n  <div class=\"user-info\">\n    <h1 class=\"user-name\" id=\"name-" + user._id + "\" onclick=\"handleEditName('" + user._id + "')\">" + user.name + " </h1>\n    <h2 class=\"user-phone\">P-Number: " + user.phone + "</h2>\n    <p class=\"user-birth\">Born in: " + user.yearOfBirth + "</p>\n  </div>\n   <button id=\"" + user._id + "\" class=\"delete-btn\" onclick=\"deleteUser('" + user._id + "')\">Delete</button>\n</div>\n    ";
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditName(id) {
    try {
        console.log("Edit name:", id);
        var nameElement_1 = document.getElementById("name-" + id);
        if (!nameElement_1)
            throw new Error("name element not found");
        nameElement_1.contentEditable = "true";
        nameElement_1.focus();
        nameElement_1.addEventListener("blur", function (event) {
            var title = nameElement_1.innerText;
            console.log("New title:", title);
            updateNameOnServer(title, id);
            nameElement_1.contentEditable = "false";
            //how to update the title in the server
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function updateNameOnServer(title, id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/users/updateName", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ title: title, id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to update name");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("name update:", data.message);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteUser(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        deleteUserOnServer(id);
    }
}
function deleteUserOnServer(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/users/delete-user", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to delete user");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("user delete:", data.message);
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
