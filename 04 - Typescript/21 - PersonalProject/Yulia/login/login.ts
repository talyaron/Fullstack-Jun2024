// view

// create login form
function createLoginForm(): HTMLFormElement {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const formElement = document.createElement("form");

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.required = true;

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  passwordInput.required = true;

  const keepLoggedInCheckbox = document.createElement("input");
  keepLoggedInCheckbox.type = "checkbox";

  const label = document.createElement("label");
  label.textContent = "Keep me logged in";
  label.insertBefore(keepLoggedInCheckbox, label.firstChild);

  const submitButton = document.createElement("button");
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
function saveLog(message: string) {
  const currentLogs = localStorage.getItem("logs") || "[]";
  const logs = JSON.parse(currentLogs);
  logs.push(message);
  localStorage.setItem("logs", JSON.stringify(logs));
}

// function to log to console and local storage
function logToConsoleAndLocalStorage(message: string) {
  console.log(message); 
  saveLog(message); 
}

// controller
function handleFormSubmit(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const email = (form.querySelector('input[type="email"]') as HTMLInputElement)
    .value;
  const password = (
    form.querySelector('input[type="password"]') as HTMLInputElement
  ).value;
  const keepLoggedIn = (
    form.querySelector('input[type="checkbox"]') as HTMLInputElement
  ).checked;

  // save logs to console and local storage 
  logToConsoleAndLocalStorage(`Email: ${email}`);
  logToConsoleAndLocalStorage(`Password: ${password}`);
  logToConsoleAndLocalStorage(`Keep me logged in: ${keepLoggedIn}`);

  localStorage.setItem("userEmail", email);
  localStorage.setItem("keepLoggedIn", JSON.stringify(keepLoggedIn));

  window.location.href = "../home/home.html";
}

// entry point
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = createLoginForm();
  loginForm.addEventListener("submit", handleFormSubmit);
});
