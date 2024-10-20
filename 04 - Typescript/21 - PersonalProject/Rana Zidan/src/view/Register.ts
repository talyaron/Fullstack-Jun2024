import { backToRegister, renderLogin } from "./logIn";


export function renderRegister(): string{
    const Registercontent=`
    <h1>Register</h1>
    <form>
      <input type="text" name="fullName" id="fullName" required placeholder="Full Name:">
    <input type="text" name="email" id="email" required placeholder="Email:">
    <input type="text" name="password" id="password" required placeholder="Password:">
    <input type="password" class="input" id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">
    <input type="number" name="phone" id="phone" required placeholder="phone:">
    <button class="btn" id="loginButton" type="submit">Submit</button>
    <button class="btn" id="backToLogin" type="button">Back to Login</button>
    </form>
    `
    document.body.innerHTML = Registercontent;
    return Registercontent;
    };


    export function backToLogIn():void{
        const back2=document.getElementById('backToLogin') as HTMLButtonElement;
        if(back2){
            back2.addEventListener('click',()=>{
                document.body.innerHTML= renderLogin();
                backToRegister();
            })
        }
        
    };


    


   