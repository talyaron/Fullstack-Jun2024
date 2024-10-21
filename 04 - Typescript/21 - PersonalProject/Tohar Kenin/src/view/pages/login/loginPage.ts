import './loginPage.scss'
export function loginPage(): string {

    handleFormLogin();
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

function handelLogin(): void {
    const button = document.getElementById('loginButton');
    console.log('login', button);

    if (button) {
        button.addEventListener('click', () => {
        console.log('Button was pressed!');
        });
    };

};

function handleFormLogin(): void {
// Select the form element
const form = document.getElementById('loginForm') as HTMLFormElement;
console.log('handleForm', form);

if (form) {
    // Add a submit event listener
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();  // Prevent default form submission behavior

        // Get form data
        const formData = new FormData(form);

        // Access individual form values by name
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;

        // Output the form data to the console
        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);

        // You can now use the form data for any purpose (e.g., send it to a server)
    });
}
};
