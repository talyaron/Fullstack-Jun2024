// === Model  ===
// Check if the functions are already loaded to avoid re-declaring
if (!window.hasOwnProperty("logToConsoleAndLocalStorage") ||
    !window.hasOwnProperty("getRegisteredUserData")) {
    // Loading functions from LocalStorage
    var logFunctionString = localStorage.getItem("logFunction");
    var getUserFunctionString = localStorage.getItem("getUserFunction");
    if (logFunctionString) {
        eval(logFunctionString); // Restore logToConsoleAndLocalStorage function
    }
    if (getUserFunctionString) {
        eval(getUserFunctionString); // Restore getRegisteredUserData function
    }
}
// === View  ===
// Function to create the login form
function createLoginForm() {
    var formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    var formElement = document.createElement("form");
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;
    emailInput.classList.add("form-container__input");
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Password";
    passwordInput.required = true;
    passwordInput.classList.add("form-container__input");
    var keepLoggedInCheckbox = document.createElement("input");
    keepLoggedInCheckbox.type = "checkbox";
    keepLoggedInCheckbox.classList.add("form-container__checkbox");
    var label = document.createElement("label");
    label.textContent = "Keep me logged in";
    label.classList.add("form-container__checkbox-label");
    label.insertBefore(keepLoggedInCheckbox, label.firstChild);
    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Login";
    submitButton.classList.add("form-container__button");
    formElement.appendChild(emailInput);
    formElement.appendChild(passwordInput);
    formElement.appendChild(label);
    formElement.appendChild(submitButton);
    // Create "Go to Register" button and append it to the form
    var goToRegisterButton = document.createElement("button");
    goToRegisterButton.textContent = "Go to Register";
    goToRegisterButton.classList.add("form-container__button");
    goToRegisterButton.onclick = function () {
        return (window.location.href = "../registration/registration.html");
    };
    formElement.appendChild(goToRegisterButton);
    formContainer.appendChild(formElement);
    document.body.appendChild(formContainer);
    return formElement;
}
// === Controller  ===
// Function to handle login form submission
function handleLoginFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var email = form.querySelector('input[type="email"]')
        .value;
    var password = form.querySelector('input[type="password"]').value;
    // Log entered data
    logToConsoleAndLocalStorage("Email entered: " + email);
    logToConsoleAndLocalStorage("Password entered: " + password);
    // Retrieve registered user data from LocalStorage
    var registeredUser = getRegisteredUserData();
    // Check if the entered email and password match the registered data
    if (registeredUser &&
        registeredUser.email === email &&
        registeredUser.password === password) {
        logToConsoleAndLocalStorage("Login successful!");
        window.location.href = "../home/home.html";
    }
    else {
        alert("Invalid email or password. Please try again.");
        logToConsoleAndLocalStorage("Login failed: Invalid email or password.");
    }
}
// === Entry point  ===
// Initialize the login form and attach the submit event listener
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = createLoginForm();
    loginForm.addEventListener("submit", handleLoginFormSubmit);
    // Display stored logs from LocalStorage when the form loads
    var storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
    storedLogs.forEach(function (log) { return console.log(log); });
});
