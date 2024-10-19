import { setupRegisterPageListeners, renderRegister } from '../../pages/register/registerPage';
import { renderDashboard } from '../dashboard/dashboardPage'; 
import { User, users } from '../../model/userModel';

export function renderLogin(): string {
    const content = `
        <div class="container">
            <div class="login-container">
                <h1>Login</h1>
                <form id="loginForm">
                    <label for="email"></label>
                    <input type="email" class="input" id="email" name="email" required placeholder="Email">
                    
                    <label for="password"></label>
                    <input type="password" class="input" id="password" name="password" required placeholder="Password">
                    
                    <a href="#" class="forgot-password">Forgot Password?</a>
                    
                    <div class="button-group">
                        <button class="btn" id="loginButton" type="submit">Login</button>
                        <button class="btn" id="backToRegister" type="button">Back to Register</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.innerHTML = content;

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail) {
        (document.getElementById('email') as HTMLInputElement).value = savedEmail;
    }
    if (savedPassword) {
        (document.getElementById('password') as HTMLInputElement).value = savedPassword;
    }

    return content;
}

export function setupLoginPageListeners(): void {
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;
    const backToRegisterButton = document.getElementById("backToRegister") as HTMLButtonElement;

    if (loginForm) {
        loginForm.addEventListener("submit", handleLoginSubmit);
    }

    if (backToRegisterButton) {
        backToRegisterButton.addEventListener("click", () => {
            document.body.innerHTML = renderRegister(); 
            setupRegisterPageListeners();
        });
    }
}

async function handleLoginSubmit(event: Event) {
    event.preventDefault(); 

    const emailInput = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const passwordInput = (document.querySelector('input[name="password"]') as HTMLInputElement).value;

    localStorage.setItem('email', emailInput);
    localStorage.setItem('password', passwordInput);

    try {
        console.log("Attempting to log in with email:", emailInput); 

        // Check if user exists in users array
        const user = users.find((user: User) => user.email === emailInput && user.password === passwordInput);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            console.log("User logged in:", user);
            
            alert("Login successful! Redirecting to the dashboard...");

            setTimeout(() => {
                document.body.innerHTML = renderDashboard(user); 
            }, 1000); 
        } else {
            throw new Error('Invalid email or password.');
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert('Login failed: ' + (error as Error).message); 
    }
}
