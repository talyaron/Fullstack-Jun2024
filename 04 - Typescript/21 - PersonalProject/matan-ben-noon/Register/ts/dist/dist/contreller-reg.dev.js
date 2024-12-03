"use strict";

var UserRegisterData =
/** @class */
function () {
  function UserRegisterData(firstName, lastName, email, dateOfBirth, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
  }

  return UserRegisterData;
}(); //  VIEW 


function createRegisterForm() {
  var container = document.createElement('div');
  container.classList.add('register-container');
  var logo = document.createElement('img');
  logo.classList.add('register__logo');
  logo.src = '/Main/logo.png';
  logo.alt = 'Logo';
  container.appendChild(logo);
  var title = document.createElement('h2');
  title.classList.add('register-container__title');
  title.innerText = 'Register';
  container.appendChild(title);
  var form = document.createElement('form');
  form.id = 'registerForm';
  form.classList.add('register-form');
  var firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
  firstNameInput.id = 'firstName';
  firstNameInput.placeholder = 'First Name';
  firstNameInput.classList.add('register-form__input');
  var lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.id = 'lastName';
  lastNameInput.placeholder = 'Last Name';
  lastNameInput.classList.add('register-form__input');
  var emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.placeholder = 'Email';
  emailInput.classList.add('register-form__input');
  var dobInput = document.createElement('input');
  dobInput.type = 'date';
  dobInput.id = 'dob';
  dobInput.placeholder = 'Date of Birth';
  dobInput.classList.add('register-form__input');
  var passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.placeholder = 'Password';
  passwordInput.classList.add('register-form__input');
  var confirmPasswordInput = document.createElement('input');
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.id = 'confirmPassword';
  confirmPasswordInput.placeholder = 'Confirm Password';
  confirmPasswordInput.classList.add('register-form__input');
  var errorMessage = document.createElement('p');
  errorMessage.id = 'error-message';
  errorMessage.classList.add('register-form__error');
  errorMessage.style.color = 'red';
  var registerButton = document.createElement('button');
  registerButton.type = 'submit';
  registerButton.innerText = 'Register';
  registerButton.classList.add('register-form__button', 'register-form__button--register');
  var successMessage = document.createElement('p');
  successMessage.id = 'success-message';
  successMessage.classList.add('register-form__success');
  successMessage.style.color = 'green';
  form.appendChild(firstNameInput);
  form.appendChild(lastNameInput);
  form.appendChild(emailInput);
  form.appendChild(dobInput);
  form.appendChild(passwordInput);
  form.appendChild(confirmPasswordInput);
  form.appendChild(registerButton);
  form.appendChild(errorMessage);
  container.appendChild(form);
  container.appendChild(successMessage);
  document.body.appendChild(container);
} //  CONTROLLER 


function handleRegister(event) {
  event.preventDefault();
  var firstNameInput = document.getElementById('firstName');
  var lastNameInput = document.getElementById('lastName');
  var emailInput = document.getElementById('email');
  var dobInput = document.getElementById('dob');
  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('confirmPassword');
  var errorMessage = document.getElementById('error-message');
  var successMessage = document.getElementById('success-message');
  errorMessage.textContent = '';
  successMessage.textContent = '';

  if (!isValidEmail(emailInput.value)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  if (!isValidPassword(passwordInput.value)) {
    errorMessage.textContent = 'Password must contain both letters and numbers.';
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage.textContent = 'Passwords do not match.';
    return;
  }

  var newUser = new UserRegisterData(firstNameInput.value, lastNameInput.value, emailInput.value, dobInput.value, passwordInput.value);
  var storedUsers = localStorage.getItem('users');
  var usersArray = storedUsers ? JSON.parse(storedUsers) : [];
  var userExists = usersArray.some(function (user) {
    return user.email === newUser.email;
  });

  if (userExists) {
    errorMessage.textContent = 'User with this email already exists.';
    return;
  }

  usersArray.push(newUser);
  localStorage.setItem('users', JSON.stringify(usersArray));
  successMessage.innerHTML = 'Registration successful. <a href="/login">Click here to log in</a>';
}

function isValidEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  var passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
  return passwordPattern.test(password);
}

function setupListeners() {
  var form = document.getElementById('registerForm');

  if (form) {
    form.addEventListener('submit', handleRegister);
  }
}

createRegisterForm();
setupListeners();