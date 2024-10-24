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
  try {
    const registerButton = document.getElementById('registerButton') as HTMLButtonElement;
    if (registerButton) {
      registerButton.addEventListener('click', () => {
        try {
          document.body.innerHTML = renderRegister();
          setupRegisterPageListeners();
        } catch (error) {
          console.error('Error rendering or setting up register page:', error);
          alert('Failed to load the register page. Please try again.');
        }
      });
    }

    const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
    if (loginButton) {
      loginButton.addEventListener('click', () => {
        try {
          document.body.innerHTML = renderLogin();
          setupLoginPageListeners();
        } catch (error) {
          console.error('Error rendering or setting up login page:', error);
          alert('Failed to load the login page. Please try again.');
        }
      });
    }
  } catch (error) {
    console.error('Error setting up welcome page listeners:', error);
    alert('An error occurred while setting up the welcome page. Please refresh the page and try again.');
  }
}
