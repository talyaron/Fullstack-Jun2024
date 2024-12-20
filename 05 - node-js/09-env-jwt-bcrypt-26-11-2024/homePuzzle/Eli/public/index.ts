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

function handClick(event?: any) {
  console.log("daada ");
  if (reg) {
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
        <input type="password" name="password" placeholder="Enter your password">
        <input type="submit" name="submit" id="submit" value="Log in">
    </form>`;
  }
}
const formTester = new formChecker();

function checkForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const phoneNumber = formData.get("phoneNumber") as string;
  const password = formData.get("password") as string;
  //console.log(name, phoneNumber, password);
  if (reg) {
    const name = formData.get("fullName") as string;
    const InvalidName = formTester.checkName(name);
    const InvalidPN = formTester.checkPhone(phoneNumber);
    const InvalidPassword = formTester.checkPassword(password);
    if (!InvalidName && !InvalidPN && !InvalidPassword) {
      console.log(InvalidName, InvalidPN, InvalidPassword);
      console.log("Account valid on client checking on server:");
      serverRegClient(name, phoneNumber, password);
    }
  } else {
    serverLogInClient(phoneNumber, password);
  }
}
async function getInfoFromServer() {
  try {
    const response = await fetch(
      `http://localhost:3000/api/client/info-client`
    );

    const data = await response.json();
    const name = data.name as string;
    const phoneNumber = data.phoneNumber as string;
    const password = data.password as string;

    console.log(name, phoneNumber, password);
    if (!data.error) {
      console.log(data, "time to render your items!");
      renderInfo(name, phoneNumber, password);
    } else {
      changeContent();
    }
  } catch (error) {
    console.error(error);
  }
}

function renderInfo(name, phoneNumber, password) {
  formCElement.innerHTML = `  <div id="clientInfo" >
 <div class="row"> <h1> your name is :</h1><h1 id="cName"> ${name}<h1> </div>
  <div class="row"> <h1> phone number :</h1> <h1 id="cPn">  ${phoneNumber}</h1> </div>
 <div class="row"> <h1> password :</h1> <h1 id="cPass">  ${"*".repeat(
   8
 )} </h1></div>
   <button id="update" onclick="editDetails()">update details</button> <button id="delete" onclick="deleteClient()">delete user</button>
</div>`;
}
async function deleteClient() {
  try {
    const localStorageDetail = localStorage.getItem("key");
    const key = localStorageDetail ? JSON.parse(localStorageDetail) : "";
    const response = await fetch(
      `http://localhost:3000/api/client/delete-client`
    );

    const data = await response.json();
    if (!data.error) {
      console.log("user deleted");
      // localStorage.removeItem("key");
      changeContent();
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
async function serverLogInClient(phoneNumber, password) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/client/login-client`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, password }),
      }
    );

    const data = await response.json();
    if (data.ok) {
      //  localStorage.setItem("key", JSON.stringify(key));
      getInfoFromServer();
      console.log("aaaaa");
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
async function serverRegClient(name, phoneNumber, password) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/client/register-client`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNumber, password }),
      }
    );

    const data = await response.json();
    handClick();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function editDetails() {
  try {
 

    const upDateButton = document.getElementById("update") as HTMLButtonElement;
    if (!upDateButton) throw new Error("no edit button found");

    const name = document.getElementById("cName") as HTMLElement;
    const phone = document.getElementById("cPn") as HTMLElement;
    const pass = document.getElementById("cPass") as HTMLElement;
    const oldName = name.innerText;
    const oldPhone = phone.innerText;
    const oldPass = pass.innerText;

    if (upDateButton.innerText !== "save") {
      upDateButton.innerText = "save";
      name.contentEditable = "true";
      phone.contentEditable = "true";
      pass.contentEditable = "true";
    } else {
      upDateButton.innerText = "update details";
      name.contentEditable = "false";
      phone.contentEditable = "false";
      pass.contentEditable = "false";
      const newName = name.innerText;
      const newPhone = phone.innerText;
      const newPass = pass.innerText;

      console.log(newName, newPhone, newPass);

      const inValidNewName = formTester.checkName(newName);
      const inValidPhone = formTester.checkPhone(newPhone);
      const inValidNewPass = formTester.checkPassword(newPass);
      console.log(inValidNewName, inValidPhone);
      if (!inValidNewName && !inValidPhone && !inValidNewPass) {
        updateClient( newName, newPhone, newPass);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function updateClient( name, phoneNumber, password) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/client/update-client`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phoneNumber, password }),
      }
    );

    const data = await response.json();
    console.log(data);
    // if () {
    //   // console.log(data, "and your key is :", key);
    //   // localStorage.setItem("key", JSON.stringify(key));
    //   //  getInfoFromServer(key);
    // }
  } catch (error) {
    console.error(error);
  }
}
