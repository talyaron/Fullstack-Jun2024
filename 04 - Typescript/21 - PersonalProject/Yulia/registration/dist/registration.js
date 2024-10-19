// === Model ===
// Check if the functions are already loaded to avoid re-declaring
if (!window.hasOwnProperty("logToConsoleAndLocalStorage") ||
    !window.hasOwnProperty("saveRegistrationData")) {
    // Loading functions from LocalStorage
    var logFunctionString = localStorage.getItem("logFunction");
    var saveUserFunctionString = localStorage.getItem("saveUserFunction");
    if (logFunctionString) {
        eval(logFunctionString); // Restore logToConsoleAndLocalStorage function
    }
    if (saveUserFunctionString) {
        eval(saveUserFunctionString); // Restore saveRegistrationData function
    }
}
// === View  ===
// Function to create the registration form
function createRegisterForm() {
    var formContainer = document.createElement("div");
    formContainer.classList.add("form-container");
    var formElement = document.createElement("form");
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.required = true;
    nameInput.classList.add("form-container__input");
    var phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.placeholder = "Phone";
    phoneInput.required = true;
    phoneInput.classList.add("form-container__input");
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
    var repeatPasswordInput = document.createElement("input");
    repeatPasswordInput.type = "password";
    repeatPasswordInput.placeholder = "Repeat password";
    repeatPasswordInput.required = true;
    repeatPasswordInput.classList.add("form-container__input");
    var agreeCheckbox = document.createElement("input");
    agreeCheckbox.type = "checkbox";
    agreeCheckbox.classList.add("form-container__checkbox");
    var agreeLabel = document.createElement("label");
    agreeLabel.textContent = "I Agree to terms and conditions";
    agreeLabel.classList.add("form-container__checkbox-label");
    agreeLabel.insertBefore(agreeCheckbox, agreeLabel.firstChild);
    var submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Register";
    submitButton.classList.add("form-container__button");
    formElement.appendChild(nameInput);
    formElement.appendChild(phoneInput);
    formElement.appendChild(emailInput);
    formElement.appendChild(passwordInput);
    formElement.appendChild(repeatPasswordInput);
    formElement.appendChild(agreeLabel);
    formElement.appendChild(submitButton);
    // Create "Go to Login" button and append it to the form
    var goToLoginButton = document.createElement("button");
    goToLoginButton.textContent = "Go to Login";
    goToLoginButton.classList.add("form-container__button");
    goToLoginButton.onclick = function () {
        return (window.location.href = "../login/login.html");
    };
    formElement.appendChild(goToLoginButton);
    formContainer.appendChild(formElement);
    document.body.appendChild(formContainer);
    return formElement;
}
// === Controller  ===
// Function to handle registration form submission
function handleRegisterFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var name = form.querySelector('input[type="text"]')
        .value;
    var phone = form.querySelector('input[type="tel"]')
        .value;
    var email = form.querySelector('input[type="email"]')
        .value;
    var password = form.querySelector('input[type="password"]').value;
    var repeatPassword = form.querySelector('input[placeholder="Repeat password"]').value;
    var agreeToTerms = form.querySelector('input[type="checkbox"]').checked;
    // Log the form data
    logToConsoleAndLocalStorage("Name: " + name);
    logToConsoleAndLocalStorage("Phone: " + phone);
    logToConsoleAndLocalStorage("Email: " + email);
    logToConsoleAndLocalStorage("Password: " + password);
    logToConsoleAndLocalStorage("Repeat Password: " + repeatPassword);
    logToConsoleAndLocalStorage("Agreed to Terms: " + agreeToTerms);
    // Validate passwords
    if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
    }
    // Save the registered data into LocalStorage
    saveRegistrationData(name, phone, email, password);
    // Redirect to the login page after successful registration
    window.location.href = "../login/login.html";
}
// === Entry point  ===
// Initialize the registration form and attach the submit event listener
document.addEventListener("DOMContentLoaded", function () {
    var registerForm = createRegisterForm();
    registerForm.addEventListener("submit", handleRegisterFormSubmit);
    // Display stored logs from LocalStorage when the form loads
    var storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
    storedLogs.forEach(function (log) { return console.log(log); });
});
