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
var FormValidator = /** @class */ (function () {
    function FormValidator(name, email, password, rePassword) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.rePassword = rePassword;
        this.regN = /^[a-zA-Z\s'-]+$/;
        this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regP =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    FormValidator.prototype.isNameValid = function () {
        if (this.regN.test(this.name) == false)
            return "invalid name";
        return "";
    };
    FormValidator.prototype.isEmailValid = function () {
        if (this.regE.test(this.email) == false)
            return "invalid email : email needs @ and a .com ending";
        return "";
    };
    FormValidator.prototype.isPasswordValid = function () {
        if (this.regP.test(this.password) == false)
            return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
        return "";
    };
    FormValidator.prototype.isRePasswordValid = function () {
        if (this.rePassword !== this.password)
            return "invalid repeat password: required to be the same as password";
        return "";
    };
    return FormValidator;
}());
var firstTime = 0;
function toLogin(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (firstTime > 0)
                return [2 /*return*/];
            document.body.innerHTML = " <div class=\"redirect-container\">\n        <div class=\"redirect-message\">\n          <h2>Redirecting...</h2>\n          <p>Please wait while we take you to the login page.</p>\n        </div>\n        <div class=\"spinner-container\">\n          <div class=\"spinner\"></div>\n        </div>\n      </div>";
            setTimeout(function () {
                window.location.href = "http://localhost:3000/login";
            }, 2000);
            firstTime = 1;
            return [2 /*return*/];
        });
    });
}
function checkForm(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var email = formData.get("email");
    var password = formData.get("password");
    var RePassword = formData.get("rePassword");
    var agree = formData.get("agree");
    var formValidator = new FormValidator(name, email, password, RePassword);
    var resultN = formValidator.isNameValid();
    var resultE = formValidator.isEmailValid();
    var resultP = formValidator.isPasswordValid();
    var resultRP = formValidator.isRePasswordValid();
    updateStatus(resultN, resultE, resultP, resultRP, agree);
    if (!resultN && !resultE && !resultP && !resultRP && agree) {
        console.log("User is valid on client checking on server....");
        checkFormInServer(formData);
    }
}
function updateStatus(resultN, resultE, resultP, resultRP, agree) {
    var namePrint = document.getElementById("nameDesc");
    var emailPrint = document.getElementById("emailDesc");
    var passwordPrint = document.getElementById("passwordDesc");
    var rePasswordPrint = document.getElementById("rePasswordDesc");
    var agreePrint = document.getElementById("agreeDesc");
    agreePrint.style.color = "black";
    if (!agree) {
        agreePrint.style.color = "red";
    }
    namePrint.innerHTML = resultN;
    console.log(resultN);
    emailPrint.innerHTML = resultE;
    console.log(resultE);
    passwordPrint.innerHTML = resultP;
    console.log(resultP);
    rePasswordPrint.innerHTML = resultRP;
    console.log(resultRP);
}
function checkFormInServer(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email, password, rePassword, response, data, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    name = formData.get("name");
                    email = formData.get("email");
                    password = formData.get("password");
                    rePassword = formData.get("rePassword");
                    return [4 /*yield*/, fetch("http://localhost:3000/api/register-user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ name: name, email: email, password: password, rePassword: rePassword })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    error = data.error;
                    if (error) {
                        alert(error);
                    }
                    else {
                        userCreatedDirectToLogin();
                    }
                    console.log(data);
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
function userCreatedDirectToLogin() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (firstTime > 0)
                return [2 /*return*/];
            document.body.innerHTML = " <div class=\"redirect-container\">\n          <div class=\"redirect-message\">\n           <h1>Register Success!</h1>\n            <h2>Redirecting...</h2>\n            <p>Please wait while we take you to the login page.</p>\n          </div>\n          <div class=\"spinner-container\">\n            <div class=\"spinner\"></div>\n          </div>\n        </div>";
            setTimeout(function () {
                window.location.href = "http://localhost:3000/login";
            }, 2000);
            firstTime = 1;
            return [2 /*return*/];
        });
    });
}
