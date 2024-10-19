
// Declaration of functions for TypeScript to avoid errors
declare function logToConsoleAndLocalStorage(message: string): void;
declare function saveRegistrationData(
  name: string,
  phone: string,
  email: string,
  password: string
): void;

// === Model ===

// Check if the functions are already loaded to avoid re-declaring
if (
  !window.hasOwnProperty("logToConsoleAndLocalStorage") ||
  !window.hasOwnProperty("saveRegistrationData")
) {
  // Loading functions from LocalStorage
  const logFunctionString = localStorage.getItem("logFunction");
  const saveUserFunctionString = localStorage.getItem("saveUserFunction");

  if (logFunctionString) {
    eval(logFunctionString); // Restore logToConsoleAndLocalStorage function
  }

  if (saveUserFunctionString) {
    eval(saveUserFunctionString); // Restore saveRegistrationData function
  }
}

// === View  ===
// Function to create the registration form
function createRegisterForm(): HTMLFormElement {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const formElement = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Name";
  nameInput.required = true;
  nameInput.classList.add("form-container__input");

  const phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.placeholder = "Phone";
  phoneInput.required = true;
  phoneInput.classList.add("form-container__input");

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.required = true;
  emailInput.classList.add("form-container__input");

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  passwordInput.required = true;
  passwordInput.classList.add("form-container__input");

  const repeatPasswordInput = document.createElement("input");
  repeatPasswordInput.type = "password";
  repeatPasswordInput.placeholder = "Repeat password";
  repeatPasswordInput.required = true;
  repeatPasswordInput.classList.add("form-container__input");

  const agreeCheckbox = document.createElement("input");
  agreeCheckbox.type = "checkbox";
  agreeCheckbox.classList.add("form-container__checkbox");

  const agreeLabel = document.createElement("label");
  agreeLabel.textContent = "I Agree to terms and conditions";
  agreeLabel.classList.add("form-container__checkbox-label");
  agreeLabel.insertBefore(agreeCheckbox, agreeLabel.firstChild);

  const submitButton = document.createElement("button");
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
  const goToLoginButton = document.createElement("button");
  goToLoginButton.textContent = "Go to Login";
  goToLoginButton.classList.add("form-container__button");
  goToLoginButton.onclick = () =>
    (window.location.href = "../login/login.html");

  formElement.appendChild(goToLoginButton);

  formContainer.appendChild(formElement);
  document.body.appendChild(formContainer);

  return formElement;
}

// === Controller  ===
// Function to handle registration form submission
function handleRegisterFormSubmit(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const name = (form.querySelector('input[type="text"]') as HTMLInputElement)
    .value;
  const phone = (form.querySelector('input[type="tel"]') as HTMLInputElement)
    .value;
  const email = (form.querySelector('input[type="email"]') as HTMLInputElement)
    .value;
  const password = (
    form.querySelector('input[type="password"]') as HTMLInputElement
  ).value;
  const repeatPassword = (
    form.querySelector(
      'input[placeholder="Repeat password"]'
    ) as HTMLInputElement
  ).value;
  const agreeToTerms = (
    form.querySelector('input[type="checkbox"]') as HTMLInputElement
  ).checked;

  // Log the form data
  logToConsoleAndLocalStorage(`Name: ${name}`);
  logToConsoleAndLocalStorage(`Phone: ${phone}`);
  logToConsoleAndLocalStorage(`Email: ${email}`);
  logToConsoleAndLocalStorage(`Password: ${password}`);
  logToConsoleAndLocalStorage(`Repeat Password: ${repeatPassword}`);
  logToConsoleAndLocalStorage(`Agreed to Terms: ${agreeToTerms}`);

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
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = createRegisterForm();
  registerForm.addEventListener("submit", handleRegisterFormSubmit);

  // Display stored logs from LocalStorage when the form loads
  const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
  storedLogs.forEach((log: string) => console.log(log));
});
