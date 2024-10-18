///////////////model
var User = /** @class */ (function () {
    function User(name, email, phone, password) {
        this.id = "id=" + crypto.randomUUID;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
    return User;
}());
var FormValidator = /** @class */ (function () {
    function FormValidator(name, email, phoneNum, password, rePassword) {
        this.name = name;
        this.email = email;
        this.phoneNum = phoneNum;
        this.password = password;
        this.rePassword = rePassword;
        this.regN = /^[a-zA-Z\s'-]+$/;
        this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regPn = /^(?:05\d{1})\d{7}$/;
        this.regP =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    FormValidator.prototype.isNameValid = function () {
        if (this.regN.test(this.name) == false)
            return "invalid name";
        return null;
    };
    FormValidator.prototype.isEmailValid = function () {
        if (this.regE.test(this.email) == false)
            return "invalid email : email needs @ and a .com ending";
        return null;
    };
    FormValidator.prototype.isPhoneNumValid = function () {
        if (this.regPn.test(this.phoneNum) == false)
            return "invalid phone number : use numbers only with the right length";
        return null;
    };
    FormValidator.prototype.isPasswordValid = function () {
        if (this.regP.test(this.password) == false)
            return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
        return null;
    };
    FormValidator.prototype.isRePasswordValid = function () {
        if (this.rePassword !== this.password)
            return "invalid repeat password: required to be the same as password";
        return null;
    };
    return FormValidator;
}());
var localStorageDetail = localStorage.getItem("users");
var users = localStorageDetail ? JSON.parse(localStorageDetail) : [];
var regElement = document.getElementById("content");
var localStorageUser = localStorage.getItem("loggedUser");
var loggedUser = localStorageUser ? JSON.parse(localStorageUser) : "";
//////////view
function renderRegister() {
    if (loggedUser) {
        redirectMain(loggedUser);
    }
    else {
        regElement.innerHTML = "<div class=\"container\">\n    <h1>Create your account</h1>\n    <div id=\"formContainer\">\n    <Form id=\"form\" onsubmit=\"checkForm(event)\">\n\n      <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\">\n      <p id=\"nameDesc\"></p>\n\n      <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"email\">\n      <p id=\"emailDesc\"></p>\n\n      <input type=\"text\" name=\"phoneNum\" id=\"phoneNum\" placeholder=\"phone number\">\n      <p id=\"phoneNumDesc\"></p>\n\n      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"password\">\n      <p id=\"passwordDesc\"></p>\n      \n      <input type=\"password\" name=\"RePassword\" id=\"RePassword\" placeholder=\"repeat password\">\n      <p id=\"RePasswordDesc\"></p>\n\n     <br>\n     <label for=\"agree\"  >\n     <input type=\"checkbox\" id=\"agree\" name=\"agree\" class=\"checkbox\">\n     I agree to the terms and conditions\n    </label>\n        <br>\n\n      <input type=\"submit\" value=\"Register\" class=\"btn\">\n      <br>\n\n    </Form>\n    <button class=\"btn\" onclick=\"window.location.href='../login/login.html';\">Login</button>    \n\n    </div>";
    }
}
///controllers
function checkForm(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var email = formData.get("email");
    var phoneNum = formData.get("phoneNum");
    var password = formData.get("password");
    var RePassword = formData.get("RePassword");
    var agree = formData.get("agree");
    var formValidator = new FormValidator(name, email, phoneNum, password, RePassword);
    var resultN = formValidator.isNameValid();
    var resultE = formValidator.isEmailValid();
    var resultPN = formValidator.isPhoneNumValid();
    var resultP = formValidator.isPasswordValid();
    var resultRP = formValidator.isRePasswordValid();
    updateNameStatus(resultN);
    updateEmailStatus(resultE);
    updatePhoneNumStatus(resultPN);
    updatePasswordStatus(resultP);
    updateRePasswordStatus(resultRP);
    if (!resultN && !resultE && !resultPN && !resultP && !resultRP && agree) {
        addUser(name, email, phoneNum, password);
    }
}
function addUser(name, email, phoneNum, password) {
    var newUser = new User(name, email, phoneNum, password);
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    reDirectLogin();
}
function reDirectLogin() {
    regElement.innerHTML = "<div class=\"container\">\n    <h1>Register success! </h1>\n    <h3>you are redirected to login</h3>\n</div>";
    setTimeout(function () {
        window.location.href = '../login/login.html';
    }, 3000);
}
function redirectMain(loggedUser) {
    regElement.innerHTML = "<div class=\"container\">\n    <h1>Welcome back " + loggedUser.name + "</h1>\n    <h3>you are redirected to main</h3>\n</div>";
    setTimeout(function () {
        window.location.href = '../main/main.html';
    }, 3000);
}
function updateNameStatus(result) {
    var namePrint = document.getElementById("nameDesc");
    if (result) {
        namePrint.innerHTML = result;
        console.log(result);
    }
    else {
        namePrint.innerHTML = "";
    }
}
function updateEmailStatus(result) {
    var emailPrint = document.getElementById("emailDesc");
    if (result) {
        emailPrint.innerHTML = result;
        console.log(result);
    }
    else {
        emailPrint.innerHTML = "";
    }
}
function updatePhoneNumStatus(result) {
    var phoneNumPrint = document.getElementById("phoneNumDesc");
    if (result) {
        phoneNumPrint.innerHTML = result;
        console.log(result);
    }
    else {
        phoneNumPrint.innerHTML = "";
    }
}
function updatePasswordStatus(result) {
    var passwordPrint = document.getElementById("passwordDesc");
    if (result) {
        passwordPrint.innerHTML = result;
        console.log(result);
    }
    else {
        passwordPrint.innerHTML = "";
    }
}
function updateRePasswordStatus(result) {
    var rePasswordPrint = document.getElementById("RePasswordDesc");
    if (result) {
        rePasswordPrint.innerHTML = result;
        console.log(result);
    }
    else {
        rePasswordPrint.innerHTML = "";
    }
}
renderRegister();
