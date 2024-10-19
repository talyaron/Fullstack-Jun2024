


const viewElemant = document.getElementById("content") as HTMLElement;

const localStorageUser = localStorage.getItem("loggedUser");
const loggedUser: any = localStorageUser ? JSON.parse(localStorageUser) : "";

function renderWelcome()
{
    if(!loggedUser){
    viewElemant.innerHTML=`
    <div class="container">
    <h1>Welcome to Pedago!</h1>
    <div class= "btnContainer">
    <button class="btn" id="login">Login</button>
    <button class="btn"id="register">Register</button>
    <div>
    </div>`}
    else{
        viewElemant.innerHTML = `<div class="container">
        <h1>Welcome back ${loggedUser.name}</h1>
        <h3>you are redirected to main</h3>
    </div>`;
    setTimeout(function() {
        window.location.href = '../main/main.html'; 
    }, 3000);
    }
}


function addListeners()
{
    const regBtn= document.getElementById("register") as HTMLElement;
    const loginBtn= document.getElementById("login") as HTMLElement;
if(!regBtn||!loginBtn)
{
console.log("login/register button does not exist");
}
regBtn.addEventListener('click',(event) =>
{   window.location.href = '../register/register.html';  });    
loginBtn.addEventListener('click',(event) =>
    {    window.location.href = '../login/login.html';  });
}

renderWelcome();
addListeners();