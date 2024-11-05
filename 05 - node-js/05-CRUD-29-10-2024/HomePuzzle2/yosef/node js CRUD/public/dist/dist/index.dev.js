"use strict";

//Model
var User =
/** @class */
function () {
  function User(name, phone, email, password) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

  return User;
}(); // initialization


var userlocalStorage = localStorage.getItem("users");
var users;

try {
  users = userlocalStorage ? JSON.parse(userlocalStorage) : [];
} catch (error) {
  console.error("Error parsing users from localStorage:", error);
  users = [];
}

var email = document.getElementById("email");
var password = document.getElementById("password");
var send_text = document.getElementById("masseges_to_the_user");
if (!email) throw new Error();
if (!password) throw new Error();
if (!send_text) throw new Error(); // Controller

function check_login(event) {
  try {
    event.preventDefault(); // check if the user is logged in

    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email.value && users[i].password === password.value) {
        send_text.textContent = "You are logged in!";
        var nextPage = "../userMenu/userMenu.html";
        window.location.href = nextPage;
        var enterUser = users[i].name;
        var userIn = users[i];
        localStorage.setItem("username_login_in", JSON.stringify(userIn));
        localStorage.setItem('enterUser', JSON.stringify(enterUser));
        console.log("the user " + enterUser + "is logged in");
        break;
      }
    }

    send_text.textContent = "Invalid email or password!";
  } catch (error) {
    console.error("Error while accessing local storage: ", error);
  }
} // View