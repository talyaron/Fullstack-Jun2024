import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { renderRegister } from '../register/registerPage';
import { renderLogin } from '../login/loginPage';
import '../../components/container/container.scss';

export function renderWelcomePage(): string {
  const content = `
    <h1>Welcome to Our Website</h1>
    ${createButton("Register", "registerButton")}
    ${createButton("Login", "loginButton")}
  `;

  return createContainer(content);
}

export function setupWelcomePageListeners(): void {
  const registerButton = document.getElementById('registerButton');
  if (registerButton) {
    registerButton.addEventListener('click', () => {
      document.body.innerHTML = renderRegister(); 
    });
  }

  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.addEventListener('click', () => {
      document.body.innerHTML = renderLogin(); 
    });
  }
}