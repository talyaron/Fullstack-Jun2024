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
function renderSignupPage() {
    var signupForm = "\n        <div class=\"container\">\n            <h1>Register</h1>\n            <form onsubmit=\"handleFormRegister(event)\">\n                <input type=\"text\" class=\"input\" id=\"userName\" name=\"userName\" required placeholder=\"User Name\">\n                <input type=\"email\" class=\"input\" id=\"email\" name=\"email\" required placeholder=\"Email\">\n                <input type=\"text\" class=\"input\" id=\"phone\" name=\"phone\" required placeholder=\"Phone Number\">\n                <input type=\"password\" class=\"input\" id=\"password\" name=\"password\" required placeholder=\"Password\"> \n                <input type=\"password\" class=\"input\" id=\"pswConfirm\" name=\"pswConfirm\" required placeholder=\"Confirm Password\">\n                <div class=\"termsWrapper\">\n                    <input type=\"checkbox\" id=\"agreeTerms\" name=\"agreeTerms\" required>\n                    <h3 class=\"agreeTerms\">I agree to the Terms and Conditions</h3>\n                </div>\n                <button class=\"signupBtn\" id=\"registerButton\" type=\"submit\">Register</button>\n                <a href=\"../index.html\" class=\"loginNavBtn\" id=\"backToLogin\" type=\"button\">Back to Login Page</a>\n            </form>\n        </div>\n    ";
    document.querySelector('#signupPage').innerHTML = signupForm;
}
;
function handleFormRegister(event) {
    return __awaiter(this, void 0, void 0, function () {
        var form, userName, email, password, phoneNumber, pswConfirm;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    form = event.target;
                    userName = form.elements.namedItem('userName').value;
                    email = form.elements.namedItem('email').value;
                    password = form.elements.namedItem('password').value;
                    phoneNumber = form.elements.namedItem('phone').value;
                    pswConfirm = form.elements.namedItem('pswConfirm').value;
                    console.log('Register', userName, email, password, phoneNumber, pswConfirm);
                    if (!(password !== pswConfirm)) return [3 /*break*/, 1];
                    alert('Passwords do not match! Please try again');
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, userExists(email)];
                case 2:
                    if (_a.sent()) {
                        alert('Email already registered!');
                    }
                    else {
                        addUser(userName, phoneNumber, email, password);
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function userExists(email) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/user/userExists?email=" + encodeURIComponent(email))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.exists];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error checking user existence:", error_1);
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function addUser(userName, phoneNumber, email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/user/signupUser', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ userName: userName, phoneNumber: phoneNumber, email: email, password: password })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to add user');
                    console.log('User added successfully!');
                    window.location.href = "../postsPage/postsPage.html";
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error sending post:', error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
renderSignupPage();
