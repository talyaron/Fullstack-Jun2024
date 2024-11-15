"use strict";

var logInOptions = ['Log in', 'Forget password'];

var User =
/** @class */
function () {
  function User(name, lastname, email, phone, username, password) {
    this.id = "id-" + crypto.randomUUID();
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.password = password;
  }

  return User;
}();

function renderLogIn(loginoptions) {
  try {
    var main_1 = document.querySelector('.logIn');
    if (!main_1) throw new Error("Main element not found");
    var backImg = document.createElement('div'); // create div element for the back icon

    backImg.classList.add('logIn__backImg');
    main_1.appendChild(backImg);
    var title = document.createElement('div'); // create div element for the Title

    title.innerHTML = "Log In";
    title.classList.add('logIn__title');
    main_1.appendChild(title);
    var form = document.createElement('form'); // create div element fot the form

    form.setAttribute('id', 'form');
    form.innerHTML = "\n            <div class=\"input-group\">\n                <label for=\"username\">User name:</label><br>\n                <input type=\"text\" id=\"username\" name=\"username\"><br>\n                <span id=\"username_error\"></span>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"password\">Password:</label><br>\n                <input type=\"text\" name=\"password\" id=\"password\">\n                <span id=\"password_error\"></span>\n            </div>\n        ";
    main_1.appendChild(form);
    var formButtons_1 = document.createElement('div');
    form.appendChild(formButtons_1);
    formButtons_1.classList.add('options-button');
    loginoptions.forEach(function (option, index) {
      var btn = document.createElement('button');
      btn.innerHTML = "" + option;
      btn.setAttribute('id', "btn-" + index.toString());
      btn.setAttribute('type', "" + option);
      formButtons_1.appendChild(btn);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleLogIn(event) {
  event.preventDefault();
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var usernameError = document.getElementById('username_error');
  var passwordError = document.getElementById('password_error');
  usernameError.innerHTML = '';
  passwordError.innerHTML = '';

  if (username.value === '' || username.value == null) {
    usernameError.innerHTML = "User name is requierd";
  }

  if (password.value === '' || password.value == null) {
    passwordError.innerHTML = "Password is requierd";
  }

  var isCorrect = false;
  var userList = JSON.parse(localStorage.getItem('users') || '[]');
  userList.forEach(function (user) {
    if (user.username === username.value && user.password === password.value) {
      isCorrect = true;
      console.log(isCorrect);
    }
  });

  if (isCorrect) {
    window.location.href = "../Dashboard/dashboard.html";
    localStorage.setItem('currentUser', username.value);
  } else {
    console.error('Invalid username or password');
    usernameError.innerHTML = 'Invalid username or password';
    passwordError.innerHTML = 'Invalid username or password';
  }
}

function main() {
  renderLogIn(logInOptions);
  var logIn = document.getElementById('btn-0');
  logIn.addEventListener('click', handleLogIn);
}

main();