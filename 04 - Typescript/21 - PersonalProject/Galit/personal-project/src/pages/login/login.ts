import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input';
import { loginUser } from '../../controller/userController';

export function renderLogin(): string {
    try {
        const content = `
            <div class="container">
                <h1>Login</h1>
                <form id="loginForm">
                    ${createInput("Email", "email")} 
                    ${createInput("Password", "password")} 
                    
                    <a href="forgot-password.html" class="forgot-password">Forgot Password?</a>
                    <button class="btn" type="submit">Login</button>
                </form>
                ${createButton("Register", "registerButton")}
            </div>
        `;

        setTimeout(() => {
            const loginForm = document.getElementById("loginForm");
            if (loginForm) {
                loginForm.addEventListener("submit", handleLoginSubmit);
            }
        }, 0);

        return createContainer(content);
    } catch (error) {
        console.error("Error rendering the login page:", error);
        return "<div>Error rendering login page. Please try again later.</div>";
    }
}

function handleLoginSubmit(event: Event) {
    event.preventDefault();

    const emailInput = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const passwordInput = (document.querySelector('input[name="password"]') as HTMLInputElement).value;

    try {
        const user = loginUser(emailInput, passwordInput);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = './userPage.ts'; 
        } else {
            alert('Invalid login credentials');
        }
    } catch (error) {
        alert('Login failed. ');
    }
}
