"use strict";

function init() {
  renderMain();
}

init(); // model
// view

function renderMain() {
  try {
    var mainElement = document.querySelector('#app');
    if (!mainElement) throw new Error('Main element not found');
    mainElement.innerHTML = "\n        <div id=\"welcome\">\n            <h1>Welcome to pedago!</h1>\n            <div id=\"welcome__buttons\">\n                <a href=\"../login/login.html\" class=\"button\">Login</a>\n                <a href=\"../register/register.html\" class=\"button\">Register</a>\n            </div>\n        </div>\n    ";
  } catch (error) {
    console.log(error);
  }
} // controller