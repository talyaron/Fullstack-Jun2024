import './loginPage.scss'
export function loginPage(): string
{
    return `
     <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="password" class="input" id="password" name="password" required placeholder="Password">
                <a href="#forgotPassword" class="forgotPsw">Forgot Password?</a>                
                <button class="loginBtn" id="button loginButton" type="submit">Login</button>
                <button class="signupBtn" id="button" type="button">SIGN UP</button>
            </form>
        </div>
    `
}
