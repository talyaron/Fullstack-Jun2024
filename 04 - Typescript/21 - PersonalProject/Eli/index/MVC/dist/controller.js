function addListeners() {
    var regBtn = document.getElementById("register");
    var loginBtn = document.getElementById("login");
    if (!regBtn || !loginBtn) {
        console.log("login/register button does not exist");
    }
    regBtn.addEventListener('click', function (event) { window.location.href = '../register/register.html'; });
    loginBtn.addEventListener('click', function (event) { window.location.href = '../login/login.html'; });
}
