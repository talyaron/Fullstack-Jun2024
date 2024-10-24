"use strict";

//   VIEW 
function createMainPage() {
  var container = document.createElement('div');
  container.classList.add('main');
  var logo = document.createElement('img');
  logo.classList.add('main__logo');
  logo.src = '/Main/logo.png';
  logo.alt = 'Logo';
  container.appendChild(logo);
  var title = document.createElement('h1');
  title.classList.add('main__title');
  title.innerText = 'Welcome to the Dashboard';
  container.appendChild(title);
  var loginButton = document.createElement('button');
  loginButton.innerText = 'Login';
  loginButton.classList.add('main__btn', 'main__btn--login');
  container.appendChild(loginButton);
  var registerButton = document.createElement('button');
  registerButton.innerText = 'Register';
  registerButton.classList.add('main__btn', 'main__btn--register');
  container.appendChild(registerButton);
  document.body.appendChild(container);
} //  CONTROLLER 


function setupMainListeners() {
  var loginButton = document.querySelector('.main__btn--login');
  var registerButton = document.querySelector('.main__btn--register');

  if (loginButton) {
    loginButton.addEventListener('click', function () {
      window.location.href = '/login';
    });
  }

  if (registerButton) {
    registerButton.addEventListener('click', function () {
      window.location.href = '/register';
    });
  }
}

createMainPage();
setupMainListeners();