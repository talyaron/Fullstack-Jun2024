// view
// create login form
function createLoginForm() {
    var formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    var formElement = document.createElement("form");
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Password";
    passwordInput.required = true;
    var keepLoggedInCheckbox = document.createElement("input");
    keepLoggedInCheckbox.type = "checkbox";
    var label = document.createElement("label");
    label.textContent = "Keep me logged in";
    label.insertBefore(keepLoggedInCheckbox, label.firstChild);
    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Login";
    formElement.appendChild(emailInput);
    formElement.appendChild(passwordInput);
    formElement.appendChild(label);
    formElement.appendChild(submitButton);
    formContainer.appendChild(formElement);
    document.body.appendChild(formContainer);
    return formElement;
}
// function to save logs to local storage
function saveLog(message) {
    var currentLogs = localStorage.getItem("logs") || "[]";
    var logs = JSON.parse(currentLogs);
    logs.push(message);
    localStorage.setItem("logs", JSON.stringify(logs));
}
// function to log to console and local storage
function logToConsoleAndLocalStorage(message) {
    console.log(message);
    saveLog(message);
}
// controller
function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var email = form.querySelector('input[type="email"]')
        .value;
    var password = form.querySelector('input[type="password"]').value;
    var keepLoggedIn = form.querySelector('input[type="checkbox"]').checked;
    // save logs to console and local storage 
    logToConsoleAndLocalStorage("Email: " + email);
    logToConsoleAndLocalStorage("Password: " + password);
    logToConsoleAndLocalStorage("Keep me logged in: " + keepLoggedIn);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("keepLoggedIn", JSON.stringify(keepLoggedIn));
    window.location.href = "../home/home.html";
}
// entry point
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = createLoginForm();
    loginForm.addEventListener("submit", handleFormSubmit);
});
