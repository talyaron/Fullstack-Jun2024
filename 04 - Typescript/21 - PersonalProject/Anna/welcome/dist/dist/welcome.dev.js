"use strict";

var welcomeOptions = ['Log in', 'Register'];

function renderWelcomeOptions(options) {
  try {
    var main_1 = document.querySelector('.welcome');
    var logo = document.createElement('div');
    logo.classList.add('welcome__logo');
    main_1.appendChild(logo);
    var titleElement = document.createElement('div');
    titleElement.classList.add('welcome__title');
    main_1.appendChild(titleElement);
    titleElement.innerHTML = "Welcome to <br> Pedago";
    var logInOptions_1 = document.createElement('div');
    logInOptions_1.classList.add('welcome__options');
    main_1.appendChild(logInOptions_1);
    options.forEach(function (option, index) {
      var btnElement = document.createElement('button');
      btnElement.innerHTML = "" + option;
      btnElement.setAttribute('id', "btn-" + index);
      logInOptions_1.appendChild(btnElement);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleChoice() {
  try {
    var main_2 = document.querySelector('.welcome');
    if (!main_2) throw new Error("Main Element not found");
    var linkPage = document.createElement('a');
    var logIn = document.getElementById('btn-0');
    var choice = "";
    logIn.addEventListener('click', function (event) {
      console.log('start');
      window.location.href = "../LogIn/LogIn.html";
    });
    var register = document.getElementById('btn-1');
    register.addEventListener('click', function (event) {
      window.location.href = "../Register/register.html";
    });
  } catch (error) {
    console.error(error);
  }
}

function main() {
  renderWelcomeOptions(welcomeOptions);
  handleChoice();
}

main();