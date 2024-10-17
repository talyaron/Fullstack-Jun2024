
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
