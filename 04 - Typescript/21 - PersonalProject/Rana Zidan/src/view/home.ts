import'../Design/home.scss';
import { backToHome, renderLogin } from "./logIn";
import { backToLogIn, renderRegister } from "./Register";


export function renderHome(): string {
    const content=`
    <div class="home-page">
        <h1 class="text">Welcome</h1></br>
        <div class="button-container">
            <button id="logInButton">Log In</button> 
            <button id="RegisterButton">Register</button>
        </div>
    </div>
     `
    return content;
};

export function clickLOgIn():void{
    const button1=document.getElementById('logInButton') as HTMLButtonElement;
    if(button1){
        button1.addEventListener('click',()=>{
            document.body.innerHTML= renderLogin();
            backToHome();
          
        })
    }
};

export function clickRegister():void{
    const button2=document.getElementById('RegisterButton') as HTMLButtonElement;
    if(button2){
        button2.addEventListener('click',()=>{
            document.body.innerHTML= renderRegister();
            backToLogIn();
          
        })
    }
};



