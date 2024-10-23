import '../Design/login.scss';
import { clickLOgIn, clickRegister, renderHome } from './home';

export function renderLogin(): string {
    const logIncontent = `
    <div class="login-page">
        <h1>Log In</h1></br>
        <form class="form-login">
            <input type="text" name="email" id="email" required placeholder="Email:"></br>
            <input type="text" name="password" id="password" required placeholder="Password:"></br>
            <a href="#forgotPassword" class="forgot-password">Forgot Password?</a></br>
            <button class="btn" id="loginButton" type="submit">Submit</button>
            <button class="btn" id="backToHome" type="button">Back to Home</button>
        </form>
    </div>
    `;

    setTimeout(() => { 
        backToHome();
    }, 0);

    return logIncontent;
}

export function backToHome(): void {
    const back1 = document.getElementById('backToHome') as HTMLButtonElement;
    if (back1) {
        back1.addEventListener('click', () => {
            document.body.innerHTML = renderHome();
            clickLOgIn();  
            clickRegister(); 
        });
    }
};

