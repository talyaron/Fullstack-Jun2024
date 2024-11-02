class FormValidator {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  regN: RegExp;
  regE: RegExp;
  regP: RegExp;

  constructor(
    name: string,
    email: string,
    password: string,
    rePassword: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.rePassword = rePassword;

    this.regN = /^[a-zA-Z\s'-]+$/;
    this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.regP =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  }
  isNameValid() {
    if (this.regN.test(this.name) == false) return "invalid name";
    return "";
  }
  isEmailValid() {
    if (this.regE.test(this.email) == false)
      return "invalid email : email needs @ and a .com ending";
    return  "";
  }
  isPasswordValid() {
    if (this.regP.test(this.password) == false)
      return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
    return  "";
  }
  isRePasswordValid() {
    if (this.rePassword !== this.password)
      return "invalid repeat password: required to be the same as password";
    return  "";
  }
}

let firstTime = 0;
async function toLogin(event) {
  if (firstTime > 0) return;
  document.body.innerHTML = ` <div class="redirect-container">
        <div class="redirect-message">
          <h2>Redirecting...</h2>
          <p>Please wait while we take you to the login page.</p>
        </div>
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
      </div>`;
  setTimeout(() => {
    window.location.href = "http://localhost:3000/login";
  }, 2000);
  firstTime = 1;
}

function checkForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const RePassword = formData.get("rePassword") as string;

  const agree = formData.get("agree") as string;

  const formValidator = new FormValidator(name, email, password, RePassword);

  const resultN = formValidator.isNameValid();
  const resultE = formValidator.isEmailValid();
  const resultP = formValidator.isPasswordValid();
  const resultRP = formValidator.isRePasswordValid();

  updateStatus(resultN, resultE, resultP, resultRP, agree);

  if (!resultN && !resultE && !resultP && !resultRP && agree) {
    console.log("User is valid on client checking on server....")
    checkFormInServer(formData);
  }
}

function updateStatus(
  resultN: string ,
  resultE: string ,
  resultP: string ,
  resultRP: string,
  agree
) {
  const namePrint = document.getElementById("nameDesc") as HTMLElement;
  const emailPrint = document.getElementById("emailDesc") as HTMLElement;
  const passwordPrint = document.getElementById("passwordDesc") as HTMLElement;
  const rePasswordPrint = document.getElementById(
    "rePasswordDesc"
  ) as HTMLElement;
  const agreePrint = document.getElementById("agreeDesc") as HTMLElement;

  agreePrint.style.color = "black";
  if (!agree) {
    agreePrint.style.color = "red";
  }
    namePrint.innerHTML = resultN;
    console.log(resultN);

    emailPrint.innerHTML = resultE;
    console.log(resultE);

    passwordPrint.innerHTML = resultP;
    console.log(resultP);

    rePasswordPrint.innerHTML = resultRP;
    console.log(resultRP);
}

async function checkFormInServer(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");
    const response = await fetch(`http://localhost:3000/api/register-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, rePassword }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
