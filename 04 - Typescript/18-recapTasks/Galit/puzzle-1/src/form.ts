import { UserController } from './controller';
import { UserRegistration } from './model';

const userController = new UserController();

export function renderForm(): string {
    return `
    <div class="container">
        <form id="registerForm">
            <h1> Register </h1>
            <label for="fullName"></label>
            <input type="text" id="fullName" name="fullName" required placeholder="Full Name:">
            
            <label for="email"></label>
            <input type="email"  id="email" name="email" required placeholder="Email:">
            
            <label for="phone"></label>
            <input type="text" id="phone" name="phone" required placeholder="Phone number:">
            
            <label for="password"></label>
            <input type="password"  id="password" name="password" required placeholder="Password:">
            <label for="repeatPassword"></label>
            <input type="password"  id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:">

            <div class="terms">
                <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                <label for="agreeTerms">I agree to the  <a href="#">Terms and Conditions</a></label>
            </div>
            <br/>
            <button class="btn" type="submit">Register</button>
            <div id="errorMessage" style="color: red;"></div>
        </form>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm') as HTMLFormElement;
    form.onsubmit = (event) => {
        event.preventDefault(); 

        const data: UserRegistration = {
            fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            password: (form.elements.namedItem('password') as HTMLInputElement).value,
            repeatPassword: (form.elements.namedItem('repeatPassword') as HTMLInputElement).value,
        };

        const result = userController.registerUser(data);
        const errorMessageElement = document.getElementById('errorMessage') as HTMLElement;
        errorMessageElement.innerText = result;
    };
});
