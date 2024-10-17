import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input'; 

export function renderLogin(): string {
    try {
        const content = `
            <div class="container">
                <h1>Login</h1>
                <form id="loginForm"> <!-- Changed id from registerForm to loginForm -->
                    ${createInput("Email", "email")} <!-- Adjusted type for email input -->
                    ${createInput("Password", "password")} <!-- Adjusted label for password input -->
                    
                    <a href="forgot-password.html" class="forgot-password">Forgot Password?</a>
                    <button class="btn" type="submit">Login</button>
                </form>
                ${createButton("Register", "registerButton")}
            </div>
        `;

        return createContainer(content); 
    } catch (error) {
        console.error("Error rendering the login page:", error);
        return "<div>Error rendering login page. Please try again later.</div>"; 
    }
}
