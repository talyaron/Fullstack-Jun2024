import '../Design/login.scss';
import { clickLOgIn, clickRegister, renderHome } from './home';
import { userPage } from '../controller/userPage';

export function renderLogin(): string {
    const logIncontent = `
    <div class="login-page">
        <h1>Log In</h1>
        <form class="form-login" id="loginForm">
            <input type="text" name="email" id="email" required placeholder="Email:"></br>
            <input type="password" name="password" id="password" required placeholder="Password:"></br>
            <a href="#forgotPassword" class="forgot-password">Forgot Password?</a></br>
            <button class="btn" id="loginButton" type="submit">Submit</button>
            <button class="btn" id="backToHome" type="button">Back to Home</button>
        </form>
    </div>

    `;

    
    document.body.innerHTML = logIncontent;

    
    requestAnimationFrame(() => {
        setupEventListeners();
    });

    return logIncontent;
}


function setupEventListeners(): void {
    setupBackToHome();
    handleLogin();
}

function setupBackToHome(): void {
    const backButton = document.getElementById('backToHome');
    if (backButton) {
        backButton.addEventListener('click', () => {
            try {
                document.body.innerHTML = renderHome();
               
                requestAnimationFrame(() => {
                    try {
                        clickLOgIn();
                        clickRegister();
                    } catch (error) {
                        console.error('Error setting up home page listeners:', error);
                    }
                });
            } catch (error) {
                console.error('Error rendering home page:', error);
                alert('אירעה שגיאה בטעינת דף הבית. אנא נסה שוב.');
            }
        });
    } else {
        console.error('Back to home button not found in setupBackToHome');
    }
}

function handleLogin(): void {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const errorElement = document.getElementById('loginError');
    
   
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        try {
            const emailInput = document.getElementById('email') as HTMLInputElement;
            const passwordInput = document.getElementById('password') as HTMLInputElement;

            if (!emailInput || !passwordInput) {
                throw new Error('Login form inputs not found');
            }

            const email = emailInput.value.trim();
            const password = passwordInput.value;

            if (!email || !password) {
                console.log(errorElement, 'נא למלא את כל השדות');
                alert('נא למלא את כל השדות');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.log(errorElement, 'נא להזין כתובת אימייל תקינה');
                alert('נא להזין כתובת אימייל תקינה');
                return;
            }

          
            if (email=== localStorage.getItem('email') && password=== localStorage.getItem('password')) {
                localStorage.setItem('email', email);
                localStorage.setItem('isLoggedIn', 'true');
                
                if (!localStorage.getItem('fullName')) {
                    localStorage.setItem('fullName', 'משתמש חדש');
                }

                document.body.innerHTML = userPage();
            } else {
                console.log(errorElement, 'שם משתמש או סיסמה שגויים');
                alert('שם משתמש או סיסמה שגויים');
            }
        } catch (error) {
            console.error('Login error:', error);
            console.log(errorElement, 'אירעה שגיאה. אנא נסה שוב מאוחר יותר');
            alert('אירעה שגיאה. אנא נסה שוב מאוחר יותר');
        }
    });
}


export function backToHome(): void {
    const back1 = document.getElementById('backToHome') as HTMLButtonElement;
    if (back1) {
        back1.addEventListener('click', () => {
            document.body.innerHTML = renderHome();
            clickLOgIn();  
            clickRegister(); 
        });
    }
};



export function submitButton():void{
    const userButton=document.getElementById('loginButton') as HTMLButtonElement;
    if(userButton){
        userButton.addEventListener('click',()=>{
            document.body.innerHTML= userPage();
           

        })
    }
};