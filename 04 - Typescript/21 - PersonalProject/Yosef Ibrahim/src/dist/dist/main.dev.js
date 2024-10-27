"use strict";

localStorage.setItem("counterUser", "0");

function open_register_file() {
  try {
    var file = 'src/pages/register.html';
    window.location.href = file;
  } catch (error) {
    console.error("Error opening register file: ", error);
  }
}

function open_login_file() {
  try {
    var file = 'src/pages/login.html';
    window.location.href = file;
  } catch (error) {
    console.error("Error opening login file: ", error);
  }
}