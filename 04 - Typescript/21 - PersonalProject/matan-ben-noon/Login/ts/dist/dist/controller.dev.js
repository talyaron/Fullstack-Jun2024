"use strict";

var UserLoginData =
/** @class */
function () {
  function UserLoginData(email, password) {
    this.email = email;
    this.password = password;
  }

  return UserLoginData;
}(); //  view 


function createLoginForm() {
  var login = document.createElement('div');
  login.classList.add('login');
  var logo = document.createElement('img');
  logo.classList.add('login__logo');
  logo.src = '/Main/logo.png';
  logo.alt = 'Logo';
  login.appendChild(logo);
  var title = document.createElement('h2');
  title.classList.add('login-form__title');
  title.innerText = 'Log In';
  login.appendChild(title);
  var form = document.createElement('form');
  form.id = 'loginForm';
  form.classList.add('login-form');
  var usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.id = 'username';
  usernameInput.placeholder = 'Email';
  usernameInput.classList.add('login-form__input');
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.placeholder = 'Password';
  passwordInput.classList.add('login-form__input');
  var errorMessage = document.createElement('p');
  errorMessage.id = 'error-message';
  errorMessage.classList.add('login-form__error');
  errorMessage.style.color = 'red';
  var successMessage = document.createElement('p');
  successMessage.id = 'success-message';
  successMessage.classList.add('login-form__success');
  successMessage.style.color = 'green';
  var checkboxLabel = document.createElement('label');
  checkboxLabel.classList.add('login-form__checkbox-label');
  checkboxLabel.innerHTML = "<input type=\"checkbox\" class=\"login-form__checkbox\"> Keep me logged in";
  var loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.innerText = 'Login';
  loginButton.classList.add('login-form__button', 'login-form__button--login');
  var registerButton = document.createElement('button');
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
} //  CONTROLLER 


function handleLogin(event) {
  event.preventDefault();
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');
  var errorMessage = document.getElementById('error-message');
  var successMessage = document.getElementById('success-message');
  errorMessage.textContent = '';
  successMessage.textContent = '';
  var storedUsers = localStorage.getItem('users');

  if (storedUsers) {
    var usersArray = JSON.parse(storedUsers);
    var foundUser = usersArray.find(function (user) {
      return user.email === usernameInput.value && user.password === passwordInput.value;
    });

    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      successMessage.textContent = 'Login successful!';
      successMessage.style.color = 'green';
      window.location.href = '/home';
    } else {
      errorMessage.textContent = 'Invalid email or password.';
    }
  }
}

function handleRegister() {
  window.location.href = '/register';
}

function setupListeners() {
  var form = document.getElementById('loginForm');
  var registerButton = document.getElementById('registerButton');

  if (form) {
    form.addEventListener('submit', handleLogin);
  }

  if (registerButton) {
    registerButton.addEventListener('click', handleRegister);
  }
}

createLoginForm();
setupListeners();