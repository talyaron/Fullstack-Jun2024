import './registerPage.scss'
import { User } from '../../../models/users';
import { mainPageRender } from '../../../main';

export function registerPage(): string
{

    return `
        <div class="container">
            <h1>Register</h1>
            <form id="registerForm">
                <input type="text" class="input" id="userName" name="userName" required placeholder="User Name">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="text" class="input" id="phone" name="phone" required placeholder="Phone Number">
                <input type="password" class="input" id="password" name="password" required placeholder="Password"> 
                <input type="password" class="input" id="pswConfirm" name="pswConfirm" required placeholder="Confirm Password">
                <div class="termsWrapper">
                    <input type="checkbox" id="agreeTerms" name="agreeTerms" required>
                    <h3 class="agreeTerms">I agree to the Terms and Conditions</h3>
                </div>
                <button class="signupBtn" id="registerButton" type="submit">Register</button>
                <a href="?loginParam=login" class="loginNavBtn" id="backToLogin" type="button">Back to Login Page</a>
            </form>
        </div>
    `
};

export function handleFormRegister(): void {
    // Select the form element
        const form = (document.getElementById('registerForm') as HTMLFormElement);
    
        if (form) {
    
            form.addEventListener('submit', (event: Event) => {
                event.preventDefault();
                
                const formData = new FormData(form);
                const userName = formData.get('userName') as string;
                const phoneNumber = formData.get('phone') as string;
                const email = formData.get('email') as string;
                const password = formData.get('password') as string;
                const confirmPassword = formData.get('password') as string;
    
                if (password !== confirmPassword) {
                    alert('Passwords do not match! Please try again')
                } else if(localStorage.getItem('email')) {
                    alert('Email already registered!')
                } else {
                    const user = new User(userName, email, password, phoneNumber);
                    setUserToLocalStorage(user);
                    const newUrl = '?signupBtn=SignupBtn';
                    window.location.href = newUrl; 
                }
            });
        } else {
            console.error('Login form not found in the DOM');
        };
    };

function setUserToLocalStorage(user: User): void {
    try {
        localStorage.setItem('User', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
        alert("Registration failed: " + (error as Error).message);
        console.error("Error during registration:", error);
    }
    };
