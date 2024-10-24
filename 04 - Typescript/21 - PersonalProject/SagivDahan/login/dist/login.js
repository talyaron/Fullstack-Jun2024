//Modle
//View
//login h1 element
var logintxt = document.createElement("h1");
logintxt.innerHTML = "Login";
document.body.appendChild(logintxt);
logintxt.classList.add("login__inputs__p");
var loginpage = document.getElementById("login");
//function to create input fields
function createInput(type, placeholder, className) {
    var input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.className = className;
    document.body.appendChild(input);
    return input;
}
//email input
var emailInput = createInput("text", "Email", "login__inputs login__inputs__email");
//password input
var passInput = createInput("password", "Password", "login__inputs login__inputs__password");
//checkbox
var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.classList.add("login__checkbox");
document.body.appendChild(checkbox);
//save my login paragraph
var checkboxtxt = document.createElement("p");
checkboxtxt.innerHTML = "Save My Login";
checkboxtxt.classList.add("login__save");
document.body.appendChild(checkboxtxt);
//login button
var loginBtn = document.createElement("button");
loginBtn.innerHTML = "Login";
loginBtn.classList.add("login__btn");
loginBtn.setAttribute('id', 'login-btn');
document.body.appendChild(loginBtn);
//Controller
loginBtn.addEventListener('click', function () {
    var email = emailInput.value;
    var password = passInput.value;
    var storedUser = localStorage.getItem("user");
    if (storedUser) {
        var user = JSON.parse(storedUser);
        if (email === user.email && password === user.password) {
            window.location.href = '../home/home.html';
        }
        else {
            alert("Invalid email or password");
        }
    }
    else {
        alert("No user found. Please register first.");
    }
});
