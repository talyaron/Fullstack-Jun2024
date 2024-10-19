import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input'; 
import { loginUser } from '../../controller/userController';

export function renderLogin(): string {
  const content = `
    <h1>Login</h1>
    <form id="loginForm">
      ${createInput("Email", "email")}
      ${createInput("Password", "password")}
      <a href="#" class="forgot-password">Forgot Password?</a>
      ${createButton("Login", "loginButton")}
    </form>
  `;

  setTimeout(() => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLoginSubmit);
    }
  }, 0);

  return createContainer(content);
}

function handleLoginSubmit(event: Event) {
  event.preventDefault(); 

  const emailInput = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
  const passwordInput = (document.querySelector('input[name="password"]') as HTMLInputElement).value;

  try {
    const user = loginUser(emailInput, passwordInput);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'userPage.html'; // After successful login, redirect to userPage.ts
    } else {
      alert('Invalid login credentials');
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert('Login failed.');
  }
}
