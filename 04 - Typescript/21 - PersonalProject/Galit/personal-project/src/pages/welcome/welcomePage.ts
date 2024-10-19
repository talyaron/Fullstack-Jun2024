import { renderRegister, setupRegisterPageListeners } from '../register/registerPage';
import { renderLogin, setupLoginPageListeners } from '../login/loginPage';
import '../../components/container/container.scss';
import '../../components/button/button.scss';

export function renderWelcomePage(): string {
  const content = `
    <div class="container">
      <h1>Welcome to Our Website</h1>
      <div class="button-group">
        <button class="btn" id="registerButton" type="button">Register</button>
        <button class="btn" id="loginButton" type="button">Login</button>
      </div>
    </div>
  `;

  document.body.innerHTML = content;

  return content;
}

export function setupWelcomePageListeners(): void {
  const registerButton = document.getElementById('registerButton') as HTMLButtonElement;
  if (registerButton) {
    registerButton.addEventListener('click', () => {
      document.body.innerHTML = renderRegister(); 
      setupRegisterPageListeners(); 
    });
  }

  const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      document.body.innerHTML = renderLogin();
      setupLoginPageListeners();
    });
  }
}
