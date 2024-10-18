


const viewElemant = document.getElementById("content") as HTMLElement;

function renderWelcome()
{
    viewElemant.innerHTML=`
    <div class="container">
    <h1>Wekcome to Pedago!</h1>
    <div class= "btnContainer">
    <button class="btn" id="login">Login</button>
    <button class="btn"id="register">Register</button>
    <div>
    </div>`
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