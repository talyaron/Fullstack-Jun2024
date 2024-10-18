///////////////model
class User {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  constructor(name: string, email: string, phone: string, password: string) {
    this.id = `id=${crypto.randomUUID}`;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}

class FormValidator {
  name: string;
  email: string;
  phoneNum: string;
  password: string;
  rePassword: string;
  regN: RegExp;
  regE: RegExp;
  regPn: RegExp;
  regP: RegExp;

  constructor(
    name: string,
    email: string,
    phoneNum: string,
    password: string,
    rePassword: string
  ) {
    this.name = name;
    this.email = email;
    this.phoneNum = phoneNum;
    this.password = password;
    this.rePassword = rePassword;

    this.regN = /^[a-zA-Z\s'-]+$/;
    this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.regPn = /^(?:05\d{1})\d{7}$/;
    this.regP =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  }
  isNameValid() {
    if (this.regN.test(this.name) == false) return "invalid name";
    return null;
  }
  isEmailValid() {
    if (this.regE.test(this.email) == false)
      return "invalid email : email needs @ and a .com ending";
    return null;
  }
  isPhoneNumValid() {
    if (this.regPn.test(this.phoneNum) == false)
      return "invalid phone number : use numbers only with the right length";
    return null;
  }
  isPasswordValid() {
    if (this.regP.test(this.password) == false)
      return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
    return null;
  }
  isRePasswordValid() {
    if (this.rePassword !== this.password)
      return "invalid repeat password: required to be the same as password";
    return null;
  }
}

const localStorageDetail = localStorage.getItem("users");
const users:User[]=localStorageDetail ? JSON.parse(localStorageDetail) : [];

const regElement = document.getElementById("content") as HTMLElement;

//////////view

function renderRegister() {
  regElement.innerHTML = `<div class="container">
    <h1>Create your account</h1>
    <div id="formContainer">
    <Form id="form" onsubmit="checkForm(event)">

      <input type="text" name="name" id="name" placeholder="name">
      <p id="nameDesc"></p>

      <input type="text" name="email" id="email" placeholder="email">
      <p id="emailDesc"></p>

      <input type="text" name="phoneNum" id="phoneNum" placeholder="phone number">
      <p id="phoneNumDesc"></p>

      <input type="password" name="password" id="password" placeholder="password">
      <p id="passwordDesc"></p>
      
      <input type="password" name="RePassword" id="RePassword" placeholder="repeat password">
      <p id="RePasswordDesc"></p>

      <h3></h3>

     
      <input type="submit" value="Register" class="btn">
      <br>

    </Form>
    <button class="btn" onclick="window.location.href='../login/login.html';">Login</button>    

    </div>`;
}


///controllers

 function checkForm(event: Event) {
  event.preventDefault();

  const formData = new FormData(event.target as HTMLFormElement);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phoneNum = formData.get("phoneNum") as string;
  const password = formData.get("password") as string;
  const RePassword = formData.get("RePassword") as string;

  const formValidator = new FormValidator(
    name,
    email,
    phoneNum,
    password,
    RePassword
  );

  const resultN = formValidator.isNameValid();
  const resultE = formValidator.isEmailValid();
  const resultPN = formValidator.isPhoneNumValid();
  const resultP = formValidator.isPasswordValid();
  const resultRP = formValidator.isRePasswordValid();

  updateNameStatus(resultN);
  updateEmailStatus(resultE);
  updatePhoneNumStatus(resultPN);
  updatePasswordStatus(resultP);
  updateRePasswordStatus(resultRP);

  if(!resultN&&!resultE&&!resultPN&&!resultP&&!resultRP)
  {
    addUser(name, email, phoneNum, password);
   

 }
}

function addUser(name, email, phoneNum, password)
{
    const newUser: User = new User(name, email, phoneNum, password); 
    users.push(newUser);
    localStorage.setItem(`users`,JSON.stringify(users));
    reDirect();
}

function  reDirect()
{
    regElement.innerHTML = `<div class="container">
    <h1>Register success! </h1>
    <h3>you are redirected to login</h3>
</div>`;
setTimeout(function() {
    window.location.href = '../login/login.html'; 
}, 3000);
}

function updateNameStatus(result: string | null) {
  const namePrint = document.getElementById("nameDesc") as HTMLElement;
  if (result) {
    namePrint.innerHTML = result;
    console.log(result);
  } else {
    namePrint.innerHTML = "";
  }
}

function updateEmailStatus(result: string | null) {
  const emailPrint = document.getElementById("emailDesc") as HTMLElement;
  if (result) {
    emailPrint.innerHTML = result;
    console.log(result);
  } else {
    emailPrint.innerHTML = "";
  }
}

function updatePhoneNumStatus(result: string | null) {
  const phoneNumPrint = document.getElementById("phoneNumDesc") as HTMLElement;
  if (result) {
    phoneNumPrint.innerHTML = result;
    console.log(result);
  } else {
    phoneNumPrint.innerHTML = "";
  }
}

function updatePasswordStatus(result: string | null) {
  const passwordPrint = document.getElementById("passwordDesc") as HTMLElement;
  if (result) {
    passwordPrint.innerHTML = result;
    console.log(result);
  } else {
    passwordPrint.innerHTML = "";
  }
}
function updateRePasswordStatus(result: string | null) {
  const rePasswordPrint = document.getElementById(
    "RePasswordDesc"
  ) as HTMLElement;
  if (result) {
    rePasswordPrint.innerHTML = result;
    console.log(result);
  } else {
    rePasswordPrint.innerHTML = "";
  }
}
renderRegister();
