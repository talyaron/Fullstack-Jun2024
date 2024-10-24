import './loginPage.scss'
export function loginPage(): string {

    return `
     <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="password" class="input" id="password" name="password" required placeholder="Password">
                <a href="#forgotPassword" class="forgotPsw">Forgot Password?</a>                
                <button class="loginBtn" id="loginButton" type="submit">Login</button>
                <a href="?registerParam=register" class="signupBtn" id="button" type="button">SIGN UP</a>
            </form>
        </div>
    `
};

export function handleFormLogin(): void {
    // Select the form element
    const form = document.getElementById('loginForm') as HTMLFormElement;
    
    if (form) {
        form.addEventListener('submit', (event: Event) => {
            event.preventDefault(); 
            
            const formData = new FormData(form);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            
            //Validation with localStorage
            if (localStorage.getItem('email') !== email) {
                alert('Email does not exist');
            } else if (localStorage.getItem('password') !== password) {
                alert('Password not valid');
            } else {
                const newUrl = '?loginBtn=loginBtn';
                window.location.href = newUrl; 
            }
        });
    } else {
        console.error('Login form not found in the DOM');
    }
};
