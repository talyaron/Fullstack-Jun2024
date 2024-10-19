// Declaration of functions for TypeScript to avoid errors
declare function logToConsoleAndLocalStorage(message: string): void;
declare function getRegisteredUserData(): any;

// === Model  ===

// Check if the functions are already loaded to avoid re-declaring
if (
  !window.hasOwnProperty("logToConsoleAndLocalStorage") ||
  !window.hasOwnProperty("getRegisteredUserData")
) {
  // Loading functions from LocalStorage
  const logFunctionString = localStorage.getItem("logFunction");
  const getUserFunctionString = localStorage.getItem("getUserFunction");

  if (logFunctionString) {
    eval(logFunctionString); // Restore logToConsoleAndLocalStorage function
  }

  if (getUserFunctionString) {
    eval(getUserFunctionString); // Restore getRegisteredUserData function
  }
}

// === View  ===
// Function to create the login form
function createLoginForm(): HTMLFormElement {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const formElement = document.createElement("form");

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

  const keepLoggedInCheckbox = document.createElement("input");
  keepLoggedInCheckbox.type = "checkbox";
  keepLoggedInCheckbox.classList.add("form-container__checkbox");

  const label = document.createElement("label");
  label.textContent = "Keep me logged in";
  label.classList.add("form-container__checkbox-label");
  label.insertBefore(keepLoggedInCheckbox, label.firstChild);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Login";
  submitButton.classList.add("form-container__button");

  formElement.appendChild(emailInput);
  formElement.appendChild(passwordInput);
  formElement.appendChild(label);
  formElement.appendChild(submitButton);
  // Create "Go to Register" button and append it to the form
  const goToRegisterButton = document.createElement("button");
  goToRegisterButton.textContent = "Go to Register";
  goToRegisterButton.classList.add("form-container__button");
  goToRegisterButton.onclick = () =>
    (window.location.href = "../registration/registration.html");

  formElement.appendChild(goToRegisterButton);

  formContainer.appendChild(formElement);
  document.body.appendChild(formContainer);

  return formElement;
}

// === Controller  ===
// Function to handle login form submission
function handleLoginFormSubmit(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const email = (form.querySelector('input[type="email"]') as HTMLInputElement)
    .value;
  const password = (
    form.querySelector('input[type="password"]') as HTMLInputElement
  ).value;

  // Log entered data
  logToConsoleAndLocalStorage(`Email entered: ${email}`);
  logToConsoleAndLocalStorage(`Password entered: ${password}`);

  // Retrieve registered user data from LocalStorage
  const registeredUser = getRegisteredUserData();

  // Check if the entered email and password match the registered data
  if (
    registeredUser &&
    registeredUser.email === email &&
    registeredUser.password === password
  ) {
    logToConsoleAndLocalStorage("Login successful!");
    window.location.href = "../home/home.html";
  } else {
    alert("Invalid email or password. Please try again.");
    logToConsoleAndLocalStorage("Login failed: Invalid email or password.");
  }
}

// === Entry point  ===
// Initialize the login form and attach the submit event listener
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = createLoginForm();
  loginForm.addEventListener("submit", handleLoginFormSubmit);

  // Display stored logs from LocalStorage when the form loads
  const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
  storedLogs.forEach((log: string) => console.log(log));
});
