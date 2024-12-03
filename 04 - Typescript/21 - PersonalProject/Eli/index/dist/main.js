var viewElemant = document.getElementById("content");
var localStorageUser = localStorage.getItem("loggedUser");
var loggedUser = localStorageUser ? JSON.parse(localStorageUser) : "";
function renderWelcome() {
    if (!loggedUser) {
        viewElemant.innerHTML = "\n    <div class=\"container\">\n    <h1>Welcome to Pedago!</h1>\n    <div class= \"btnContainer\">\n    <button class=\"btn\" id=\"login\">Login</button>\n    <button class=\"btn\"id=\"register\">Register</button>\n    <div>\n    </div>";
    }
    else {
        viewElemant.innerHTML = "<div class=\"container\">\n        <h1>Welcome back " + loggedUser.name + "</h1>\n        <h3>you are redirected to main</h3>\n    </div>";
        setTimeout(function () {
            window.location.href = '../main/main.html';
        }, 3000);
    }
}
function addListeners() {
    var regBtn = document.getElementById("register");
    var loginBtn = document.getElementById("login");
    if (!regBtn || !loginBtn) {
        console.log("login/register button does not exist");
    }
    regBtn.addEventListener('click', function (event) { window.location.href = '../register/register.html'; });
    loginBtn.addEventListener('click', function (event) { window.location.href = '../login/login.html'; });
}
renderWelcome();
addListeners();
