//==model==
interface User {
  email: string;
  password: string;
}

class UserLoginData implements User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

//==view==
function createLoginForm(): void {
  const login = document.createElement('div');
  login.classList.add('login');

  const logo = document.createElement('img');
  logo.classList.add('login__logo');
  logo.src = '../Main/assets/logo.png'; 
  logo.alt = 'Logo'; 
  login.appendChild(logo);

  const title = document.createElement('h2');
  title.classList.add('login-form__title');
  title.innerText = 'Log In';
  login.appendChild(title);

  const form = document.createElement('form');
  form.id = 'loginForm';
  form.classList.add('login-form');

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.id = 'username';
  usernameInput.placeholder = 'Email';
  usernameInput.classList.add('login-form__input');

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.placeholder = 'Password';
  passwordInput.classList.add('login-form__input');

  const errorMessage = document.createElement('p');
  errorMessage.id = 'error-message';
  errorMessage.classList.add('login-form__error');
  errorMessage.style.color = 'red';

  const successMessage = document.createElement('p');
  successMessage.id = 'success-message';
  successMessage.classList.add('login-form__success');
  successMessage.style.color = 'green';

  const checkboxLabel = document.createElement('label');
  checkboxLabel.classList.add('login-form__checkbox-label');
  checkboxLabel.innerHTML = `<input type="checkbox" class="login-form__checkbox"> Keep me logged in`;

  const loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.innerText = 'Login';
  loginButton.classList.add('login-form__button', 'login-form__button--login');

  const registerButton = document.createElement('button');
  registerButton.type = 'button';
  registerButton.innerText = 'Register';
  registerButton.id = 'registerButton';
  registerButton.classList.add('login-form__button', 'login-form__button--register');

  form.appendChild(usernameInput);
  form.appendChild(passwordInput);
  form.appendChild(checkboxLabel);
  form.appendChild(loginButton);
  form.appendChild(registerButton);

  login.appendChild(errorMessage);
  login.appendChild(successMessage); 
  login.appendChild(form);
  document.body.appendChild(login);
}

//==controller== 
function handleLogin(event: Event): void {
  event.preventDefault();

  const usernameInput = document.getElementById('username') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  const errorMessage = document.getElementById('error-message') as HTMLElement;
  const successMessage = document.getElementById('success-message') as HTMLElement;

  errorMessage.textContent = '';
  successMessage.textContent = '';

  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    const usersArray = JSON.parse(storedUsers);
    const foundUser = usersArray.find((user: User) => user.email === usernameInput.value && user.password === passwordInput.value);

    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

      successMessage.textContent = 'Login successful!';
      successMessage.style.color = 'green'; 
      window.location.href = '../home'; 
    } else {
      errorMessage.textContent = 'Invalid email or password.'; 
    }
  } 
}

function handleRegister(): void {
  window.location.href = '/register'; 
}



function setupListeners(): void {
  const form = document.getElementById('loginForm') as HTMLFormElement;
  const registerButton = document.getElementById('registerButton') as HTMLButtonElement;

  if (form) {
    form.addEventListener('submit', handleLogin);
  }

  if (registerButton) {
    registerButton.addEventListener('click', handleRegister);
  }
}

createLoginForm();
setupListeners();
