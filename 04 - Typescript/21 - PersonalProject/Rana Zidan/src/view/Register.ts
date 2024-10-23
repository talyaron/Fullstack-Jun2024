import '../Design/register.scss';
import { backToHome, renderLogin } from './logIn';

export function renderRegister(): string {
    const Registercontent = `
    <div class="register-page">
        <h1>Register</h1></br>
        <form class="form-register" id="registerForm">
            <input type="text" name="fullName" id="fullName" required placeholder="Full Name:"></br>
            <input type="email" name="email" id="email" required placeholder="Email:"></br>
            <input type="text" name="phone" id="phone" required placeholder="Phone:"></br>
            <input type="password" name="password" id="password" required placeholder="Password:"></br>
            <input type="password" id="repeatPassword" name="repeatPassword" required placeholder="Repeat Password:"></br>
            <div class="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe">
                <label for="rememberMe">Remember me</label>
            </div></br>
            <button class="btn" id="submitButton" type="submit">Submit</button>
            <button class="btn" id="backToLogin" type="button">Back to Login</button></br>
        </form>
    </div>
    `;

    document.body.innerHTML = Registercontent;

    validateForm();
    backToLogIn();

    return Registercontent;
}

export function validateForm(): void {
    const form = document.getElementById('registerForm') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const fullName = document.getElementById('fullName') as HTMLInputElement;
        const email = document.getElementById('email') as HTMLInputElement;
        const phone = document.getElementById('phone') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const repeatPassword = document.getElementById('repeatPassword') as HTMLInputElement;
        const rememberMe = document.getElementById('rememberMe') as HTMLInputElement;

        if (!rememberMe.checked) {
            alert('Please check the "Remember me" box before submitting.');
            return; 
        }

        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone.value)) {
            alert('Phone number must be exactly 10 digits and start with 0.');
            return;
        }

       
        if (password.value !== repeatPassword.value) {
            alert('Passwords do not match.');
            return;
        }

      
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password.value)) {
            alert('Password must contain at least 8 characters, including letters and numbers.');
            return;
        }

        
        if (rememberMe.checked) {
            localStorage.setItem('fullName', fullName.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('password', password.value);
        }

   
        document.body.innerHTML = renderLogin();
        backToHome();
    }); 
}

export function backToLogIn(): void {
    const back2 = document.getElementById('backToLogin') as HTMLButtonElement;
    if (back2) {
        back2.addEventListener('click', () => {
            document.body.innerHTML = renderLogin();
        });
    }
}
