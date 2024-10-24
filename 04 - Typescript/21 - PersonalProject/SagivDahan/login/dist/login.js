//Modle
//View
//login h1 element
var logintxt = document.createElement("h1");
logintxt.innerHTML = "Login";
document.body.appendChild(logintxt);
logintxt.classList.add("login__inputs__p");
var loginpage = document.getElementById("login");
//login inputs
//email
var emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.placeholder = "Email";
emailInput.classList.add("login__inputs");
emailInput.classList.add("login__inputs__email");
document.body.appendChild(emailInput);
//password
var passInput = document.createElement("input");
passInput.type = "number";
passInput.placeholder = "Password";
passInput.classList.add("login__inputs");
passInput.classList.add("login__inputs__password");
document.body.appendChild(passInput);
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
