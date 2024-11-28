//model

//view
//render login page function
renderLoginPage();

//controller
//render login form function
function renderLoginPage() {
    const loginForm = `
     <div class="container">
            <h1>Login</h1>
            <form onsubmit="handleFormLogin(event)">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="password" class="input" id="password" name="password" required placeholder="Password">               
                <button class="loginBtn" id="loginButton" type="submit">Login</button>
            </form>
    </div>
    `
    const loginPageElement = document.querySelector<HTMLDivElement>('#loginPage');
    if (!loginPageElement) throw new Error('Login page not found');
    loginPageElement.innerHTML = loginForm;
};
//login data save function
async function handleFormLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
        alert('Login successful');
    } else {
        alert(data.message);
    }
};
