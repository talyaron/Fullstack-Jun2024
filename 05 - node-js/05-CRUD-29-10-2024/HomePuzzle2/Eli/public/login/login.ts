const localStorageDetail = localStorage.getItem("key");
const key: string = localStorageDetail ? JSON.parse(localStorageDetail) : "";
checkKey();
async function checkKey() {
  try {
    if (key.length>1) {
    const response = await fetch(`http://localhost:3000/api/check-key`,
      {method :"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key }),
      });
    const data = await response.json();
    const { message }=data;
    //console.log(message);
    if(!data.error)
    {
      goToMain();
      console.log (message)
      return;
    }
    localStorage.removeItem("key");
    console.log (data);
    }
  } catch (error) {
    console.error(error);
  }
}

let firstTime = 0;
async function toRegister(event) {
  if (firstTime > 0) return;
  document.body.innerHTML = ` <div class="redirect-container">
        <div class="redirect-message">
          <h2>Redirecting...</h2>
          <p>Please wait while we take you to the registeristretion  page.</p>
        </div>
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
      </div>`;
  setTimeout(() => {
    window.location.href = "http://localhost:3000/register";
  }, 2000);
  firstTime = 1;
}

async function login(event) {
  event.preventDefault();

  const form = new FormData(event.target);
  const email = form.get("email");
  const password = form.get("password");
  const response = await fetch(`http://localhost:3000/api/account-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  console.log(data);
  if (!data.error) {
    const { key } = data;
    localStorage.setItem(`key`, JSON.stringify(key));
    goToMain();
  }else{
    const error = data.message;
    const errorDesc = document.getElementById("errorDesc") as HTMLElement;
    errorDesc.innerText=error;
  }
}
async function goToMain() {
  document.body.innerHTML = ` <div class="redirect-container">
  <div class="redirect-message">
   <h1>Login Success!</h1>
    <h2>Redirecting...</h2>
    <p>Please wait while we take you to the main page.</p>
  </div>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</div>`;
  setTimeout(() => {
    window.location.href = "http://localhost:3000/index";
  }, 2000);
}
//const localStorageDetail = localStorage.getItem("users");
//const users:User[]=localStorageDetail ? JSON.parse(localStorageDetail) : [];
