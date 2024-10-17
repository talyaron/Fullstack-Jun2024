import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input';
import { registerUser } from '../../controller/userController';

export function renderRegister(): string {
    try {
        const content = `
            <h1>Register</h1>
            <form id="registerForm">
                ${createInput("Name", "userName")}
                ${createInput("Phone", "phone")}
                ${createInput("Email", "email")}
                ${createInput("Password", "password")}
                ${createInput("Confirm Password", "confirmPassword")}

                <div class="terms">
                    <input type="checkbox" id="terms" />
                    <label for="terms" >I accept the terms and conditions</label>
                </div>
                ${createButton("Register", "registerButton")}
            </form>
        `;
        
        setTimeout(() => {
            const registerForm = document.getElementById("registerForm");
            if (registerForm) {
                registerForm.addEventListener("submit", handleRegisterSubmit);
            }
        }, 0);

        return createContainer(content);
    } catch (error) {
        console.error("Error rendering the register page:", error);
        return "<div>Error rendering register page. Please try again later.</div>";
    }
}

function handleRegisterSubmit(event: Event) {
    event.preventDefault();

    const fullName = (document.querySelector('input[name="userName"]') as HTMLInputElement).value;
    const phone = (document.querySelector('input[name="phone"]') as HTMLInputElement).value;
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;
    const confirmPassword = (document.querySelector('input[name="confirmPassword"]') as HTMLInputElement).value;

    const result = registerUser(fullName, email, password, confirmPassword, phone);

    if (result === "User registered successfully!") {
        alert(result);
        window.location.href = './login.ts'; 
    } else {
        alert(result); 
    }
}
