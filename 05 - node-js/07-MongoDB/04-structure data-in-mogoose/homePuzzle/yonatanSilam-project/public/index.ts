//model

interface User {
  name: String;
  email: String;
  phone: String;
  imageUrl: String;
  yearOfBirth: Number;
  password: String;
  _id: string;
}
interface ServiceProvider {
  name: String;
  email: String;
  phone: String;
  imageUrl: String;
  yearOfBirth: Number;
  password: String;
  _id: string;
}

//view

function welcomePage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
      <div class="welcome-page">
    <h1>Welcome!</h1>
    <p>Are you a User or a Service Provider?</p>
    <div class="button-container">
      <button onclick="userFirstPage()" class="btn user-btn">User</button>
      <button onclick="ServiceProviderFirstPage()" class="btn provider-btn">Service Provider</button>
    </div>
  </div>
    `;
  } catch (error) {
    console.error(error);
  }
}
function userFirstPage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
      <div class="auth-page">
        <h1>Are we see you here before?</h1>
            <p>Please choose an option:</p>
            <div class="button-container">
              <button onclick="userPage()" class="btn reg-btn">Register</button>
              <button onclick="userLogInPage()" class="btn login-btn">Login</button>
            </div>
       </div>
 `;
  } catch (error) {
    console.error(error);
  }
}

function userLogInPage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
      <form onsubmit="userLogIn(event)">
              <input type="email" name="email" placeholder="Email" required>
              <input type="password" name="password" placeholder="password" required>
              <button>log In</button>
          </form>
 `;
  } catch (error) {
    console.error(error);
  }
}
async function userLogIn(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    form.reset();
    if(!email || !password)throw new Error('password or email missing')
    if(await checkUser(email, password)){
      console.log('log in successfully')
      HomePage(email);
    }else
    console.log('email or password are incorrect!')
  } catch (err) {
    console.error(err);
  }

}
async function checkUser(email: string, password: string):Promise<boolean> {
  try {
    const response = await fetch(`/api/users/get-user-by-email?email=${email}`);
    if (!response.ok) throw new Error("Failed to fetch USER") ;

    const data = await response.json();
    if(data.user.password == password)
      return true;
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false; 
  }
}

function userPage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
    <form onsubmit="handleAddClient(event)">
        <input type="text" name="name" placeholder="Name" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="email" name="email" placeholder="Email">
        <input type="tel" name="phone" placeholder="Phone number">
        <input type="text" name="imageUrl" placeholder="imageUrl">
        <input type="date" name="date" placeholder="Date of Birth">
        <button>ADD User</button>
    </form>
    <button id="getUsers">getUsers</button>

    <form onsubmit="getUserByEmail(event)">
        <input type="email" name="email" placeholder="Email">
        <button>get User</button>
    </form>

    <div id="userCard"></div>`;
    const getUsersBtn = document.querySelector("#getUsers");
    if (!getUsersBtn) throw new Error("not find getUsers");
    getUsersBtn.addEventListener("click", getUsers);
  } catch (error) {
    console.error(error);
  }
}

function ServiceProviderFirstPage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
      <div class="auth-page">
        <h1>Are we see you here before?</h1>
            <p>Please choose an option:</p>
            <div class="button-container">
              <button onclick="ServiceProviderPage()" class="btn reg-btn">Register</button>
              <button onclick="sPLogInPage()" class="btn login-btn">Login</button>
            </div>
       </div>
 `;
  } catch (error) {
    console.error(error);
  }
}

function sPLogInPage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
      <form onsubmit="sPLogIn(event)">
              <input type="email" name="email" placeholder="Email" required>
              <input type="password" name="password" placeholder="password" required>
              <button>log In</button>
          </form>
 `;
  } catch (error) {
    console.error(error);
  }
}
async function sPLogIn(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    form.reset();
    if(!email || !password)throw new Error('password or email missing')
    if(await checkSP(email, password)){
      console.log('log in successfully')
    }else{
      console.log('email or password are incorrect!')}
  } catch (err) {
    console.error(err);
  }

}

async function checkSP(email: string, password: string):Promise<boolean> {
  try {
    const response = await fetch(`/api/sP/get-sP-by-email?email=${email}`);
    if (!response.ok) throw new Error("Failed to fetch sP") ;

    const data = await response.json();
    if(data.sP.password == password)
      return true;
    return false;
  } catch (error) {
    console.error("Error:", error);
    return false; 
  }
}
function ServiceProviderPage() {
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
    <form onsubmit="handleAddSP(event)">
        <input type="text" name="name" placeholder="Name" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="email" name="email" placeholder="Email">
        <input type="tel" name="phone" placeholder="Phone number">
        <input type="text" name="imageUrl" placeholder="imageUrl">
        <input type="date" name="date" placeholder="Date of Birth">
        <button>ADD service provider </button>
    </form>`;
    const getUsersBtn = document.querySelector("#getUsers");
    if (!getUsersBtn) throw new Error("not find getUsers");
    getUsersBtn.addEventListener("click", getUsers);
  } catch (error) {
    console.error(error);
  }
}

async function HomePage(email:string){
  try {
    const firstPage = document.querySelector("#page");
    if (!firstPage) throw new Error("not find page");
    firstPage.innerHTML = `
    <div id="userCard"><div> 
      <form onsubmit="sPLogIn(event)">
              <input type="email" name="email" placeholder="Email" required>
              <input type="password" name="password" placeholder="password" required>
              <button>log In</button>
          </form>
 `;
 await getUserByEmailNoBtn(email)
  } catch (error) {
    console.error(error);
  }
}

//controllers
function main() {
  try {
    const getUsersBtn = document.querySelector("#getUsers");
    if (!getUsersBtn) throw new Error("not find getUsers");
    getUsersBtn.addEventListener("click", getUsers);
  } catch (error) {
    console.error(error);
  }
}
function handleEditName(id: string) {
  try {
    console.log("Edit name:", id);
    const nameElement = document.getElementById(`name-${id}`);
    if (!nameElement) throw new Error("name element not found");
    nameElement.contentEditable = "true";
    nameElement.focus();
    nameElement.addEventListener("blur", (event) => {
      const title = nameElement.innerText;
      console.log("New title:", title);
      updateNameOnServer(title, id);
      nameElement.contentEditable = "false";
      //how to update the title in the server
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateNameOnServer(title: string, id: string) {
  try {
    const response = await fetch("http://localhost:3000/api/users/updateName", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, id }), //data to send (to string format) )
    });
    if (!response.ok) throw new Error("Failed to update name");

    const data = await response.json();
    console.log("name update:", data.message);
  } catch (error) {
    console.error(error);
  }
}

function deleteUser(id: string) {
  if (confirm("Are you sure you want to delete this user?")) {
    deleteUserOnServer(id);
  }
}
async function deleteUserOnServer(id: string) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/users/delete-user",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), //data to send (to string format) )
      }
    );
    if (!response.ok) throw new Error("Failed to delete user");

    const data = await response.json();
    console.log("user delete:", data.message);
  } catch (error) {
    console.error(error);
  }
}

//user

async function handleAddClient(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    const password = formData.get("password");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const imageUrl = formData.get("imageUrl");
    const date = formData.get("date") as string;
    const yearOfBirth = new Date(date).getFullYear();
    form.reset();
    const response = await fetch("/api/users/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        password,
        email,
        phone,
        imageUrl,
        yearOfBirth,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}
async function getUsers() {
  try {
    const response = await fetch("/api/users/get-users");
    if (!response.ok) throw new Error("Failed to fetch USERS");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getUserById(id: string) {
  try {
    const response = await fetch(`/api/users/get-user?userId=${id}`);
    if (!response.ok) throw new Error("Failed to fetch USER");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getUserByEmail(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");
    form.reset();
    const response = await fetch(`/api/users/get-user-by-email?email=${email}`);
    if (response.ok) {
      const data = await response.json();
      renderUser(data.user);
    }
  } catch (err) {
    console.error(err);
  }
}
async function getUserByEmailNoBtn(email:string) {
  try {
    const response = await fetch(`/api/users/get-user-by-email?email=${email}`);
    if (response.ok) {
      const data = await response.json();
      renderUser(data.user);
    }
  } catch (err) {
    console.error(err);
  }
}

function renderUser(user: User) {
  try {
    const userCard = document.querySelector("#userCard");
    if (!userCard) throw new Error("not find userCard");
    userCard.innerHTML = `
<div class="user-card">
  <div class="user-avatar">
    <img src="${user.imageUrl}" alt="User Avatar" />
  </div>
  <div class="user-info">
    <h1 class="user-name" id="name-${user._id}" onclick="handleEditName('${user._id}')">${user.name} </h1>
    <h2 class="user-phone">P-Number: ${user.phone}</h2>
    <p class="user-birth">Born in: ${user.yearOfBirth}</p>
  </div>
   <button id="${user._id}" class="delete-btn" onclick="deleteUser('${user._id}')">Delete</button>
</div>
    `;
  } catch (error) {
    console.error(error);
  }
}

//SP

async function handleAddSP(ev: any) {
  try {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name");
    const password = formData.get("password");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const imageUrl = formData.get("imageUrl");
    const date = formData.get("date") as string;
    const yearOfBirth = new Date(date).getFullYear();
    form.reset();
    const response = await fetch("/api/sP/add-sP", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        password,
        email,
        phone,
        imageUrl,
        yearOfBirth,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}


