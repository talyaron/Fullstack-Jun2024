import { backToLogIn, renderRegister } from "./Register";

export function renderLogin(): string{
const logIncontent=`
<h1>Log In</h1>
<form>
<input type="text" name="email" id="email" required placeholder="Email:">
<input type="text" name="password" id="password" required placeholder="Password:">
  <a href="#forgotPassword" class="forgot-password">Forgot Password?</a> 
    <button class="btn" id="loginButton" type="submit">Submit</button>
    <button class="btn" id="backToRegister" type="button">Back to Register</button>
</form>
`

return logIncontent;
};

export function backToRegister():void{
    const back1=document.getElementById('backToRegister') as HTMLButtonElement;
    if(back1){
        back1.addEventListener('click',()=>{
            document.body.innerHTML= renderRegister();
            backToLogIn();
        })
    }
    
};
