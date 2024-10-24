import { userPage } from '../controller/userPage';
import '../Design/register.scss';
import { backToHome, renderLogin } from '../view/logIn';

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
            <button class="btn" id="submitButton2" type="submit">Submit</button>
            <button class="btn" id="backToLogin" type="button">Back to Login</button></br>
        </form>
    </div>

    `;

  
    document.body.innerHTML = Registercontent;
    
   
    setTimeout(() => {
        validateForm();
        backToLogIn();
    }, 0);

    return Registercontent;
}

export function validateForm(): void {
    const form = document.getElementById('registerForm') as HTMLFormElement;
    if (!form) {
        console.error('Form element not found');
        return;
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const fullName = (document.getElementById('fullName') as HTMLInputElement)?.value;
        const email = (document.getElementById('email') as HTMLInputElement)?.value;
        const phone = (document.getElementById('phone') as HTMLInputElement)?.value;
        const password = (document.getElementById('password') as HTMLInputElement)?.value;
        const repeatPassword = (document.getElementById('repeatPassword') as HTMLInputElement)?.value;
        const rememberMe = (document.getElementById('rememberMe') as HTMLInputElement)?.checked;

        if (!fullName || !email || !phone || !password || !repeatPassword) {
            alert('כל השדות הם חובה');
            return;
        }

        if (!rememberMe) {
            alert('אנא סמן את תיבת "זכור אותי" לפני ההרשמה.');
            return;
        }

        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phone)) {
            alert('מספר הטלפון חייב להכיל בדיוק 10 ספרות ולהתחיל ב-0');
            return;
        }

        if (password !== repeatPassword) {
            alert('הסיסמאות אינן תואמות');
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('הסיסמה חייבת להכיל לפחות 8 תווים, כולל אותיות ומספרים');
            return;
        }

        try {
           
            localStorage.setItem('fullName', fullName);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('phone', phone);

           
            document.body.innerHTML = userPage();
            backToHome();
        } catch (error) {
            console.error('Error saving data:', error);
            alert('אירעה שגיאה בשמירת הנתונים. אנא נסה שוב.');
        }
    });
}

export function backToLogIn(): void {
    const backButton = document.getElementById('backToLogin');
    if (backButton) {
        backButton.addEventListener('click', () => {
            document.body.innerHTML = renderLogin();
            backToHome(); 
        });
    } else {
        console.error('Back button not found');
    }
};

