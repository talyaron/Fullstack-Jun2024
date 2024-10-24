var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var localStorageDetail = localStorage.getItem("users");
var users = localStorageDetail ? JSON.parse(localStorageDetail) : [];
var regElement = document.getElementById("content");
var localStorageUser = localStorage.getItem("loggedUser");
var loggedUser = localStorageUser ? JSON.parse(localStorageUser) : "";
function renderRegister() {
    if (loggedUser) {
        redirect(loggedUser);
    }
    else {
        regElement.innerHTML = "<div class=\"container\">\n      <h1>Login</h1>\n      <div id=\"formContainer\">\n      <Form id=\"form\" onsubmit=\"checkForm(event)\">\n  \n        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\">\n        <p id=\"nameDesc\"></p>\n\n        <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"password\">\n        <p id=\"passwordDesc\"></p>\n  \n        <br>\n        <label for=\"agree\"  >\n        <input type=\"checkbox\" id=\"agree\" name=\"agree\" class=\"checkbox\">\n        Keep me logged in\n        </label>\n\n        <br>\n  \n        <input type=\"submit\" value=\"Login\" class=\"btn\">\n        <br>\n  \n      </Form>\n      <button class=\"btn\" onclick=\"window.location.href='../register/register.html';\">Register</button>    \n  \n      </div>";
    }
}
function checkForm(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get("name");
    var password = formData.get("password");
    var agree = formData.get("agree");
    var sameNameUsers = users.filter(function (user) {
        return user.name == name;
    });
    var foundUser = sameNameUsers.find(function (user) {
        return user.password == password;
    });
    if (foundUser) {
        console.log("userFound!" + foundUser.name);
        var loggedUser_1 = foundUser;
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser_1));
        redirect(loggedUser_1);
    }
}
function redirect(loggedUser) {
    regElement.innerHTML = "<div class=\"container\">\n    <h1>Welcome back " + loggedUser.name + "</h1>\n    <h3>you are redirected to main</h3>\n</div>";
    setTimeout(function () {
        window.location.href = '../main/main.html';
    }, 3000);
}
renderRegister();
