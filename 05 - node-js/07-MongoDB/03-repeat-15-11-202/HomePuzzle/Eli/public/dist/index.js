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
var reg = true;
var formCElement = document.getElementById("formContainer");
var formChecker = /** @class */ (function () {
    function formChecker() {
        this.regN = /^[a-zA-Z\s'-]+$/;
        this.regPn = /^(?:05\d{1})\d{7}$/;
        this.regP =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    formChecker.prototype.checkName = function (name) {
        if (this.regN.test(name) == false)
            return "invalid name";
        return null;
    };
    formChecker.prototype.checkPhone = function (pn) {
        if (this.regPn.test(pn) == false)
            return "invalid phone number : use numbers only with the right length";
        return null;
    };
    formChecker.prototype.checkPassword = function (pass) {
        if (this.regP.test(pass) == false)
            return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
        return null;
    };
    return formChecker;
}());
var regLogBtn = document.getElementById("outerShell");
if (!regLogBtn)
    console.log("no regLogBtn ");
var regLogChild = document.getElementById("innerShell");
regLogBtn.addEventListener("click", handClick);
changeContent();
function handClick(event) {
    console.log("daada ");
    if (reg) {
        regLogChild.style.animation = "mov 0.3s forwards";
    }
    else {
        regLogChild.style.animation = "movBack 0.3s  forwards";
    }
    reg = !reg;
    changeContent();
}
function changeContent() {
    var localStorageDetail = localStorage.getItem("key");
    var key = localStorageDetail ? JSON.parse(localStorageDetail) : "";
    if (key) {
        getInfoFromServer(key);
        return;
    }
    if (reg) {
        formCElement.innerHTML = "  <form onsubmit=\"checkForm(event)\">\n        <input type=\"text\" name=\"fullName\" placeholder=\"Enter your full name\">\n        <input type=\"text\" name=\"phoneNumber\" placeholder=\"Enter your phone number\">\n        <input type=\"password\" name=\"password\" placeholder=\"Enter a password\">\n        <input type=\"submit\" name=\"submit\" id=\"submit\" value=\"Register\" >\n    </form>";
    }
    else {
        formCElement.innerHTML = "  <form onsubmit=\"checkForm(event)\">\n        <input type=\"text\" name=\"phoneNumber\" placeholder=\"Enter your phone number\">\n        <input type=\"password\" name=\"password\" placeholder=\"Enter your password\">\n        <input type=\"submit\" name=\"submit\" id=\"submit\" value=\"Log in\">\n    </form>";
    }
}
var formTester = new formChecker();
function checkForm(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var phoneNumber = formData.get("phoneNumber");
    var password = formData.get("password");
    //console.log(name, phoneNumber, password);
    if (reg) {
        var name = formData.get("fullName");
        var InvalidName = formTester.checkName(name);
        var InvalidPN = formTester.checkPhone(phoneNumber);
        var InvalidPassword = formTester.checkPassword(password);
        if (!InvalidName && !InvalidPN && !InvalidPassword) {
            console.log(InvalidName, InvalidPN, InvalidPassword);
            console.log("Account valid on client checking on server:");
            serverRegClient(name, phoneNumber, password);
        }
    }
    else {
        serverLogInClient(phoneNumber, password);
    }
}
function getInfoFromServer(key) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, name, phoneNumber, password, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log(key);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/client/info-client", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ key: key })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    name = data.name;
                    phoneNumber = data.phoneNumber;
                    password = data.password;
                    console.log(name, phoneNumber, password);
                    if (!data.error) {
                        console.log(data, "time to render your items!");
                        renderInfo(key, name, phoneNumber, password);
                    }
                    else {
                        localStorage.removeItem("key");
                        changeContent();
                    }
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
function renderInfo(key, name, phoneNumber, password) {
    formCElement.innerHTML = "  <div id=\"clientInfo\" >\n <div class=\"row\"> <h1> your name is :</h1><h1 id=\"cName\"> " + name + "<h1> </div>\n  <div class=\"row\"> <h1> phone number :</h1> <h1 id=\"cPn\">  " + phoneNumber + "</h1> </div>\n <div class=\"row\"> <h1> password :</h1> <h1 id=\"cPass\">  " + "*".repeat(password) + " </h1></div>\n   <button id=\"update\" onclick=\"editDetails()\">update details</button> <button id=\"delete\" onclick=\"deleteClient()\">delete user</button>\n</div>";
}
function deleteClient() {
    return __awaiter(this, void 0, void 0, function () {
        var localStorageDetail, key, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    localStorageDetail = localStorage.getItem("key");
                    key = localStorageDetail ? JSON.parse(localStorageDetail) : "";
                    return [4 /*yield*/, fetch("http://localhost:3000/api/client/delete-client", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ key: key })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!data.error) {
                        console.log("user deleted");
                        localStorage.removeItem("key");
                        changeContent();
                    }
                    console.log(data);
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
function serverLogInClient(phoneNumber, password) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, key, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/client/login-client", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ phoneNumber: phoneNumber, password: password })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    key = data.key;
                    if (key) {
                        console.log(data, "and your key is :", key);
                        localStorage.setItem("key", JSON.stringify(key));
                        getInfoFromServer(key);
                    }
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
function serverRegClient(name, phoneNumber, password) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/client/register-client", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ name: name, phoneNumber: phoneNumber, password: password })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    handClick();
                    console.log(data);
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
function editDetails() {
    try {
        var localStorageDetail = localStorage.getItem("key");
        var key = localStorageDetail ? JSON.parse(localStorageDetail) : "";
        if (!key)
            throw new Error("no key?!");
        var upDateButton = document.getElementById("update");
        if (!upDateButton)
            throw new Error("no edit button found");
        var name = document.getElementById("cName");
        var phone = document.getElementById("cPn");
        var pass = document.getElementById("cPass");
        var oldName = name.innerText;
        var oldPhone = phone.innerText;
        var oldPass = pass.innerText;
        if (upDateButton.innerText !== "save") {
            upDateButton.innerText = "save";
            name.contentEditable = "true";
            phone.contentEditable = "true";
            pass.contentEditable = "true";
        }
        else {
            upDateButton.innerText = "update details";
            name.contentEditable = "false";
            phone.contentEditable = "false";
            pass.contentEditable = "false";
            var newName = name.innerText;
            var newPhone = phone.innerText;
            var newPass = pass.innerText;
            console.log(newName, newPhone, newPass);
            var inValidNewName = formTester.checkName(newName);
            var inValidPhone = formTester.checkPhone(newPhone);
            var inValidNewPass = formTester.checkPassword(newPass);
            console.log(inValidNewName, inValidPhone);
            if (!inValidNewName && !inValidPhone && !inValidNewPass) {
                updateClient(key, newName, newPhone, newPass);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function updateClient(key, name, phoneNumber, password) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/client/update-client", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ key: key, name: name, phoneNumber: phoneNumber, password: password })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (key) {
                        // console.log(data, "and your key is :", key);
                        // localStorage.setItem("key", JSON.stringify(key));
                        //  getInfoFromServer(key);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
