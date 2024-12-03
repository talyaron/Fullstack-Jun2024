import { registerUser } from '../../controller/userController';
import { renderLogin, setupLoginPageListeners } from '../../pages/login/loginPage';
import { renderDashboard } from '../dashboard/dashboardPage';

export function renderRegister(): string {
    const content = `
        <div class="container">
            <h1>Register</h1>
            <form id="registerForm">
                <input type="text" class="input" id="fullName" name="fullName" required placeholder="Full Name:">
                <input type="email" class="input" id="email" name="email" required placeholder="Email:">
                <input type="text" class="input" id="phone" name="phone" required placeholder="Phone:">
                <input type="password" class="input" id="password" name="password" required placeholder="Password:">
                <input type="password" class="input" id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">
                <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                <label for="agreeTerms">I agree to the Terms and Conditions</label>
                <button class="btn" id="registerButton" type="submit">Register</button>
                <button class="btn" id="backToLogin" type="button">Back to Login</button>
            </form>
        </div>
    `;
    
    document.body.innerHTML = content;
    return content;
}

export function setupRegisterPageListeners(): void {
    try {
        const registerForm = document.getElementById("registerForm") as HTMLFormElement;
        const backToLoginButton = document.getElementById("backToLogin") as HTMLButtonElement;

        if (registerForm) {
            registerForm.addEventListener("submit", handleRegisterSubmit);
        }

        if (backToLoginButton) {
            backToLoginButton.addEventListener("click", () => {
                try {
                    document.body.innerHTML = renderLogin(); 
                    setupLoginPageListeners(); 
                } catch (error) {
                    console.error("Error loading login page:", error);
                }
            });
        }
    } catch (error) {
        console.error("Error setting up register page listeners:", error);
    }
}

function handleRegisterSubmit(event: Event): void {
    event.preventDefault();

    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const passwordRepeat = (document.getElementById("repeatPassword") as HTMLInputElement).value;
    const termsAccepted = (document.getElementById("agreeTerms") as HTMLInputElement).checked;

    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
    }

    try {
        const user = registerUser(fullName, email, password, passwordRepeat, phone);
        localStorage.setItem('registeredUser', JSON.stringify(user));
        console.log("User registered:", user);
        alert("Registration successful! Redirecting to the dashboard...");
        setTimeout(() => {
            document.body.innerHTML = renderDashboard(user); 
        }, 1000); 
    } catch (error) {
        alert("Registration failed: " + (error as Error).message);
        console.error("Error during registration:", error);
    }
}
