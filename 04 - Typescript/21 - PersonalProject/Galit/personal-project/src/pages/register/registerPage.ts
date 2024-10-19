import { registerUser } from '../../controller/userController';
import { renderLogin, setupLoginPageListeners } from '../../pages/login/loginPage';
import { validateUserInput } from '../../controller/registerController'; 
import { renderDashboard } from '../dashboard/dashboardPage'; 
// import { User } from '../../model/userModel';

export function renderRegister(): string {
    const content = `
        <div class="container">
            <h1>Register</h1>
            <form id="registerForm">
                <label for="fullName"></label>
                <input type="text" class="input" id="fullName" name="fullName" required placeholder="Full Name:">
                
                <label for="email"></label>
                <input type="email" class="input" id="email" name="email" required placeholder="Email:">
                
                <label for="phone"></label>
                <input type="text" class="input" id="phone" name="phone" required placeholder="Phone:">
                
                <label for="password"></label>
                <input type="password" class="input" id="password" name="password" required placeholder="Password:">
                
                <label for="repeatPassword"></label>
                <input type="password" class="input" id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">
                
                <div class="terms">
                    <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                    <label for="agreeTerms">I agree to the <a href="#">Terms and Conditions</a></label>
                </div>
                
                <button class="btn" id="registerButton" type="submit">Register</button>
                <button class="btn" id="backToLogin" type="button">Back to Login</button>
            </form>
        </div>
    `;
    
    document.body.innerHTML = content;
    
    return content;
}

export function setupRegisterPageListeners(): void {
    const registerForm = document.getElementById("registerForm") as HTMLFormElement;
    const backToLoginButton = document.getElementById("backToLogin") as HTMLButtonElement;

    if (registerForm) {
        registerForm.addEventListener("submit", handleRegisterSubmit);
    }

    if (backToLoginButton) {
        backToLoginButton.addEventListener("click", () => {
            document.body.innerHTML = renderLogin(); 
            setupLoginPageListeners(); 
        });
    }
}
function handleRegisterSubmit(event: Event): void {
    event.preventDefault(); 

    const fullName = (document.querySelector('input[name="fullName"]') as HTMLInputElement).value;
    const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;
    const passwordRepeat = (document.querySelector('input[name="repeatPassword"]') as HTMLInputElement).value;
    const termsAccepted = (document.querySelector('input[name="agreeTerms"]') as HTMLInputElement).checked;

    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
    }

    const validationErrors = validateUserInput(fullName, email, password, passwordRepeat, phone);
    if (validationErrors.length > 0) {
        alert("Registration failed: " + validationErrors.join(", "));
        return;
    }

    try {
        const user = registerUser(fullName, email, password, passwordRepeat, phone);
        
        localStorage.setItem('registeredUser', JSON.stringify({
            fullName: user.fullName,
            email: user.email,
            phone: user.phone,
            password: user.password 
        }));
        
        console.log("User registered:", user);
        
        alert("Registration successful! Redirecting to the dashboard...");
        
        setTimeout(() => {
            document.body.innerHTML = renderDashboard(user); 
        }, 1000); 
    } catch (error) {
        alert("Registration failed: " + (error as Error).message);
    }
}