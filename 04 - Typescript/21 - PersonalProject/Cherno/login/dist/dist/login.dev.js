"use strict";

function init() {
  renderLogin();
}

init();

function getUsers() {
  var usersString = localStorage.getItem('users');
  if (!usersString) return [];
  return JSON.parse(usersString);
}

function checkUser(username, password) {
  var users = getUsers();

  for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user.name === username && user.password === password) return user.id;
  }

  return null;
} // view


function renderLogin() {
  var _a;

  try {
    var loginElement = document.querySelector('#app');
    if (!loginElement) throw new Error('Login element not found');
    loginElement.innerHTML = "\n            <form id=\"login\">\n                <h1>Login</h1>\n                <input type=\"text\" id=\"username\" placeholder=\"Username\">\n                <input type=\"password\" id=\"password\" placeholder=\"Password\">\n                <input type=\"checkbox\" id=\"rememberMe\">\n                <input type=\"submit\" value=\"login\">\n            </form>\n        ";
    (_a = document.querySelector('#login')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', login);
  } catch (error) {
    console.log(error);
  }
} // controller


function login(event) {
  event.preventDefault();
  var userId = checkUser(event.target.username.value, event.target.password.value);

  if (!userId) {
    alert('Invalid credentials');
  } else {
    localStorage.setItem('userId', userId);
    window.location.href = '../home/home.html';
  }
}