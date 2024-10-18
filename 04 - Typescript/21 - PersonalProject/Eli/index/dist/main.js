var viewElemant = document.getElementById("content");
function renderWelcome() {
    viewElemant.innerHTML = "\n    <div class=\"container\">\n    <h1>Wekcome to Pedago!</h1>\n    <div class= \"btnContainer\">\n    <button class=\"btn\" id=\"login\">Login</button>\n    <button class=\"btn\"id=\"register\">Register</button>\n    <div>\n    </div>";
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
