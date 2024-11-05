"use strict";
exports.__esModule = true;
exports.handleFormLogin = void 0;
function loginPage() {
    var loginForm = "\n     <div class=\"container\">\n            <h1>Login</h1>\n            <form id=\"loginForm\">\n                <input type=\"email\" class=\"input\" id=\"email\" name=\"email\" required placeholder=\"Email\">\n                <input type=\"password\" class=\"input\" id=\"password\" name=\"password\" required placeholder=\"Password\">\n                <a href=\"#forgotPassword\" class=\"forgotPsw\">Forgot Password?</a>                \n                <button class=\"loginBtn\" id=\"loginButton\" type=\"submit\">Login</button>\n                <a href=\"?registerParam=register\" class=\"signupBtn\" id=\"button\" type=\"button\">SIGN UP</a>\n            </form>\n        </div>\n    ";
    var loginPageElement = document.querySelector('#loginPage');
    if (!loginPageElement)
        throw new Error('Login page not found');
    loginPageElement.innerHTML = loginForm;
}
;
loginPage();
function handleFormLogin() {
    // Select the form element
    var form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(form);
            var email = formData.get('email');
            var password = formData.get('password');
            //Validation with localStorage
            if (localStorage.getItem('email') !== email) {
                alert('Email does not exist');
            }
            else if (localStorage.getItem('password') !== password) {
                alert('Password not valid');
            }
            else {
                console.log(email + ', ' + password);
                var newUrl = '?loginBtn=loginBtn';
                window.location.href = newUrl;
            }
        });
    }
    else {
        console.error('Login form not found in the DOM');
    }
}
exports.handleFormLogin = handleFormLogin;
;
