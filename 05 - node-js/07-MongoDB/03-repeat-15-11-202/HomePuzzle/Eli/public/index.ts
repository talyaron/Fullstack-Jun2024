
let reg: boolean = true;

const formCElement = document.getElementById("formContainer") as HTMLElement;

class formChecker {
  regN;
  regPn;
  regP;
  constructor() {
    this.regN = /^[a-zA-Z\s'-]+$/;
    this.regPn = /^(?:05\d{1})\d{7}$/;
    this.regP =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  }
  checkName(name) {
    if (this.regN.test(name) == false) return "invalid name";
    return null;
  }
  checkPhone(pn) {
    if (this.regPn.test(pn) == false)
      return "invalid phone number : use numbers only with the right length";
    return null;
  }
  checkPassword(pass) {
    if (this.regP.test(pass) == false)
      return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
    return null;
  }
}

const regLogBtn = document.getElementById("outerShell") as HTMLElement;
if (!regLogBtn) console.log("no regLogBtn ");

const regLogChild = document.getElementById("innerShell") as HTMLElement;

regLogBtn.addEventListener(`click`, handClick);

changeContent();

function handClick(event) {
  console.log("daada ");
  if (reg) {
    regLogChild.style.animation = "";

    regLogChild.style.animation = "mov 0.3s forwards";
  } else {
    regLogChild.style.animation = "movBack 0.3s  forwards";
  }
  reg = !reg;
  changeContent();
}

function changeContent() {
  if (reg) {
    formCElement.innerHTML = `  <form onsubmit="checkForm(event)">
        <input type="text" name="fullName" placeholder="Enter your full name">
        <input type="text" name="phoneNumber" placeholder="Enter your phone number">
        <input type="password" name="password" placeholder="Enter a password">
        <input type="submit" name="submit" id="submit" value="Register" >
    </form>`;
  } else {
    formCElement.innerHTML = `  <form onsubmit="checkForm(event)">
        <input type="text" name="phoneNumber" placeholder="Enter your phone number">
        <input type="password" name="password" placeholder="Enter a password">
        <input type="submit" name="submit" id="submit" value="Log in">
    </form>`;
  }
}
const formTester = new formChecker();

function checkForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const name = formData.get("fullName") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const password = formData.get("password") as string;
  console.log(name, phoneNumber, password);
  if (reg) {
    const InvalidName = formTester.checkName(name);
    const InvalidPN = formTester.checkPhone(phoneNumber);
    const InvalidPassword = formTester.checkPassword(password);
    if (!InvalidName && !InvalidPN && !InvalidPassword) {
      console.log(InvalidName, InvalidPN, InvalidPassword);
      console.log("Account valid on client checking on server:");
      serverRegClient(name, phoneNumber, password);
    }
  }
}
async function serverRegClient(name, phoneNumber, password) {
  try {
    const response = await fetch(`http://localhost:3000/api/client/register-client`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phoneNumber, password }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error)
  }
}
