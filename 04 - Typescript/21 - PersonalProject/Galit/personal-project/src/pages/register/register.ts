import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input'; 
import { registerUser } from '../../controller/userController';

export function renderRegister(): string {
  const content = `
    <h1>Register</h1>
    <form id="registerForm">
      ${createInput("Full Name", "fullName")}
      ${createInput("Phone", "phone")}
      ${createInput("Email", "email")}
      ${createInput("Password", "password")}
      ${createInput("Repeat Password", "passwordRepeat")}
      <div class="terms">
        <input type="checkbox" id="terms" />
        <label for="terms">I accept the terms and conditions</label>
      </div>
      ${createButton("Register", "registerButton")}
    </form>
  `;
  
  setTimeout(() => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", handleRegisterSubmit);
    }
  }, 0);

  return createContainer(content);
}

function handleRegisterSubmit(event: Event) {
  event.preventDefault(); 

  const fullName = (document.querySelector('input[name="fullName"]') as HTMLInputElement).value;
  const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;
  const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
  const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;
  const passwordRepeat = (document.querySelector('input[name="passwordRepeat"]') as HTMLInputElement).value;
  const termsAccepted = (document.querySelector('input[name="terms"]') as HTMLInputElement).checked;

  // Validate phone
  const phoneRegex = /^\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must be exactly 9 digits.");
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate passwords match
  if (password !== passwordRepeat) {
    alert("Passwords do not match.");
    return;
  }

  if (!termsAccepted) {
    alert("You must accept the terms and conditions.");
    return;
  }

  try {
    registerUser(fullName, email, password, passwordRepeat, phone);
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
  } catch (error) {
    console.error("Error during registration:", error);
    alert("Registration failed.");
  }
}