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
}(); // let new_user = 0;


var counterUser = Number(localStorage.getItem('counterUser'));
var new_user = Number(localStorage.getItem('new_user')) || 0;
var userlocalStorage = localStorage.getItem("users");
var users = userlocalStorage ? JSON.parse(userlocalStorage) : [];
var countineBtn = document.getElementById('countinueBtn');
if (!countineBtn) throw new Error();
countineBtn.style.display = "none"; //Controller

function checkData(event) {
  try {
    var countineBtn_1 = document.getElementById('countinueBtn'); // countine buuton Checks if the button exists

    if (!countineBtn_1) throw new Error();
    var registerBtn = document.getElementById('registerBtn');
    if (!registerBtn) throw new Error();
    event.preventDefault();
    var goodData = true; // על ההתחלה אני מניח שכל הנתונים שהכנסו תקינים

    var name = document.getElementById("name");
    if (!name) return "error";
    var check_name = document.getElementById("check_name");
    if (!check_name) return "error";

    if (!/^[a-zA-Z\s]+$/.test(name.value)) {
      check_name.innerHTML = "";
      check_name.innerHTML = "Invalid name. Only letters and spaces are allowed.";
      goodData = false;
    } // check phone number


    var phone = document.getElementById("phone");
    if (!phone) return "error";
    var check_phone = document.getElementById("check_phone");
    if (!check_phone) return "error";

    if (!/^\d{10}$/.test(phone.value)) {
      check_phone.innerHTML = "Invalid phone number. It should be 10 digits long.";
      goodData = false;
    } // check email address


    var email = document.getElementById("email");
    if (!email) return "error";
    var check_email = document.getElementById("check_email");
    if (!check_email) return "error";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      check_email.innerHTML = "Invalid email address.";
      goodData = false;
    } // check password


    var password = document.getElementById("password");
    if (!password) return "error";
    var confirmPassword = document.getElementById("confirm-password");
    if (!confirmPassword) return "error";
    var send_text = document.getElementById("check_confirm_password");
    if (!send_text) return "error";

    if (password.value == "" || confirmPassword.value == "") {
      goodData = false;
      send_text.innerHTML = "Password fields cannot be empty";
    }

    if (password.value.length < 8)
      /* check if password is at least 8 characters long */
      {
        goodData = false;
        send_text.innerHTML = "Password should be at least 8 characters long";
      }

    if (password.value !== confirmPassword.value)
      /* check if password is correct */
      {
        goodData = false;
        send_text.innerHTML = "Passwords do not match";
      }

    if (goodData) {
      send_text.style.fontSize = "30px";
      send_text.style.color = "green";
      send_text.innerHTML = "The registration was successful";
      check_name.innerHTML = "success";
      check_phone.innerHTML = "success";
      check_email.innerHTML = "success";
      check_name.style.color = "green";
      check_phone.style.color = "green";
      check_email.style.color = "green";
      send_text.style.color = "green";
      countineBtn_1.style.display = "flex";
      registerBtn.style.display = "none";
      registerUser(name.value, phone.value, email.value, password.value);
    }
  } catch (error) {
    console.error(error);
  }
} //Controller


function registerUser(name, phone, email, password) {
  try {
    var user = new User(name, phone, email, password);
    users.push(user);
    counterUser++;
    console.log("now user number : " + new_user);
    new_user++;
    localStorage.setItem('new_user', String(new_user));
    localStorage.setItem("users", JSON.stringify(users));
  } catch (error) {
    console.error(error);
  }
} // controller


function continueBtn() {
  try {
    var file = 'login.html';
    window.location.href = file;
    console.log(file);
    alert("רישום עבר בהצלחה");
  } catch (error) {
    console.error(error);
  }
}