class User {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
}

const localStorageDetail = localStorage.getItem("users");
const users: User[] = localStorageDetail ? JSON.parse(localStorageDetail) : [];

const regElement = document.getElementById("content") as HTMLElement;

const localStorageUser = localStorage.getItem("loggedUser");
const loggedUser: User = localStorageUser ? JSON.parse(localStorageUser) : "";

function renderRegister() {
  if (loggedUser)
  {
     redirect(loggedUser);
  }else{
  regElement.innerHTML = `<div class="container">
      <h1>Login</h1>
      <div id="formContainer">
      <Form id="form" onsubmit="checkForm(event)">
  
        <input type="text" name="email" id="email" placeholder="email">
        <p id="nameDesc"></p>

        <input type="password" name="password" id="password" placeholder="password">
        <p id="passwordDesc"></p>
  
        <br>
        <label for="agree"  >
        <input type="checkbox" id="agree" name="agree" class="checkbox">
        Keep me logged in
        </label>

        <br>
  
        <input type="submit" value="Login" class="btn">
        <br>
  
      </Form>
      <button class="btn" onclick="window.location.href='../register/register.html';">Register</button>    
  
      </div>`;}
}
function checkForm(event)
{
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
  
    const agree = formData.get("agree") as string;
    const sameNameUsers = users.filter((user)=>
    user.email==email)
 const foundUser= sameNameUsers.find(user=>
        user.password==password
    )
    if(foundUser)
    {
    console.log("userFound!"+foundUser.name)
    const loggedUser:User = foundUser;
    localStorage.setItem(`loggedUser`,JSON.stringify(loggedUser));
    redirect(loggedUser);
    }
}

function redirect(loggedUser)
{
    regElement.innerHTML = `<div class="container">
    <h1>Welcome back ${loggedUser.name}</h1>
    <h3>you are redirected to main</h3>
</div>`;
setTimeout(function() {
    window.location.href = '../main/main.html'; 
}, 3000);
}

renderRegister();