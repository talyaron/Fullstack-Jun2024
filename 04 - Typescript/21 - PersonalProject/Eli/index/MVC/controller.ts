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

