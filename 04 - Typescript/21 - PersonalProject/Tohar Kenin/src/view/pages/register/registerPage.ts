import './registerPage.scss'

export function registerPage(): string
{

    handelRegister();
    return `
        <div class="container">
            <h1>Register</h1>
            <form id="registerForm">
                <input type="text" class="input" id="fullName" name="fullName" required placeholder="Full Name">
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

function handelRegister(): void {
    const button = document.getElementById('registerButton');
    console.log('register', button);

    if (button) {
        button.addEventListener('click', (event: Event) => {
            event.preventDefault();
        console.log('Button was pressed!');
        });
    };

};
