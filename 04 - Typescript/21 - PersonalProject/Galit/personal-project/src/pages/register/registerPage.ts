import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input'; 
import { registerUser } from '../../controller/userController';

export function renderRegister(): string {
  const content = `
    <h1>Register</h1>
    <form id="registerForm">
        <label for="fullName"></label>
                <input type="text" id="fullName" name="fullName" required placeholder="Full Name:">
                <label for="email"></label>
                <input type="email"  id="email" name="email" required placeholder="Email:">
                <label for="phone"></label>
                <input type="text" id="phone" name="phone" required placeholder="Phone:">
                <label for="password"></label>
                <input type="password"  id="password" name="password" required placeholder="Password:">
                <label for="repeatPassword"></label>
                <input type="password id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">
       <div class="terms">
            <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
            <label for="agreeTerms">I agree to the  <a href="#">Terms and Conditions</a></label>
        </div>
            <button class="btn" type="submit">Register</button>
                <button class="btn" type="submit">Back to login</button>
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

  if (!termsAccepted) {
    alert("You must accept the terms and conditions.");
    return;
  }

  try {
    registerUser(fullName, email, password, passwordRepeat, phone);
    
    alert("Registration successful! You will now be redirected to the login page.");
    
    window.location.href = "loginPage.ts";  
  } catch (error) {
    alert("error!");
  }
}