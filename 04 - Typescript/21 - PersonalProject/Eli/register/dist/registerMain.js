var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var FormValidator = /** @class */ (function () {
    function FormValidator(email, phoneNum, password) {
        this.email = email;
        this.phoneNum = phoneNum;
        this.password = password;
        this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regPn = /^(?:05\d{1})\d{7}$/;
        this.regP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
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
            return "invalid password : password requires one Uppercase letter and one special letter(@#!$%#^&*)";
        return null;
    };
    return FormValidator;
}());
var regElement = document.getElementById("content");
function renderRegister() {
    regElement.innerHTML =
        "<div id=\"formContainer\">\n    <Form id=\"form\" onsubmit=\"main(event)\">\n      <h3>enter your email address</h3>\n      <input type=\"text\" name=\"email\" id=\"email\">\n      <p id=\"emailDesc\"></p>\n      <h3>enter your phone number </h3>\n      <input type=\"text\" name=\"phoneNum\" id=\"phoneNum\">\n      <p id=\"phoneNumDesc\"></p>\n\n      <h3>enter a password</h3>\n      <input type=\"password\" name=\"password\" id=\"password\">\n      <p id=\"passwordDesc\"></p>\n\n      <h3></h3>\n      <input type=\"submit\" value=\"submit\" >\n    </Form>";
}
renderRegister();
