import { backToRegister, renderLogin } from "./logIn";
import { backToLogIn, renderRegister } from "./Register";

export function renderHome(): string {
    const content=`
    <div>
    <h1>Welcome</h1>
    <button id="logInButton">Log In</button> 
     <button id="RegisterButton">Register</button>
    </div>
     `
    return content;
};

export function clickLOgIn():void{
    const button1=document.getElementById('logInButton') as HTMLButtonElement;
    if(button1){
        button1.addEventListener('click',()=>{
            document.body.innerHTML= renderLogin();
            backToRegister()
          
        })
    }
};

export function clickRegister():void{
    const button2=document.getElementById('RegisterButton') as HTMLButtonElement;
    if(button2){
        button2.addEventListener('click',()=>{
            document.body.innerHTML= renderRegister();
            backToLogIn()
          
        })
    }
};


