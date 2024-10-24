//model

//view
//register h1 element
const registertxt = document.createElement("h1");
registertxt.innerHTML = "Create Your Account";
document.body.appendChild(registertxt);
registertxt.classList.add("register__inputs__p")
const registerpage = document.getElementById("register");

//register inputs
//name input
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Enter Your Name";
nameInput.classList.add("register__inputs");
nameInput.classList.add("register__inputs__name")
document.body.appendChild(nameInput);

//phone input
const phoneInput = document.createElement("input");
phoneInput.type = "number";
phoneInput.placeholder = "Enter Your Phone Number";
phoneInput.classList.add("register__inputs");
phoneInput.classList.add("register__inputs__phone")
document.body.appendChild(phoneInput);

//email input
const regemailInput = document.createElement("input");
regemailInput.type = "text";
regemailInput.placeholder = "Enter Your Email";
regemailInput.classList.add("register__inputs");
regemailInput.classList.add("register__inputs__email")
document.body.appendChild(regemailInput);

//password input
const regpass = document.createElement("input");
regpass.type = "number";
regpass.placeholder = "Enter Your Password";
regpass.classList.add("register__inputs");
regpass.classList.add("register__inputs__password")
document.body.appendChild(regpass);

//repeat password
const regpass2 = document.createElement("input");
regpass2.type = "number";
regpass2.placeholder = "Repeat Password";
regpass2.classList.add("register__inputs");
regpass2.classList.add("register__inputs__password2")
document.body.appendChild(regpass2);

//checkbox
const regcheckbox = document.createElement("input");
regcheckbox.type = "checkbox";
regcheckbox.classList.add("register__checkbox");
document.body.appendChild(regcheckbox);

//accept the terms text
const regcheckboxtxt = document.createElement("p");
regcheckboxtxt.innerHTML = "Accept The Terms";
regcheckboxtxt.classList.add("register__accept")
document.body.appendChild(regcheckboxtxt);

//register button
const registerBtn = document.createElement("button");
registerBtn.innerHTML = "Register";
registerBtn.classList.add("login__btn")
registerBtn.setAttribute('id', 'register-btn');
document.body.appendChild(registerBtn);

//controller