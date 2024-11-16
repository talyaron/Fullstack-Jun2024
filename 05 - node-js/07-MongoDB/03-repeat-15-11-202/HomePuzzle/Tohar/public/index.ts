class User {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;

    constructor (userName: string, email: string, password: string, 
        phoneNumber: string, id?:string) {
        id ? this.id = id : this.id = crypto.randomUUID();
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    };

};

function renderLoginPage() {

    const loginForm = `
     <div class="container">
            <h1>Login</h1>
            <form onsubmit="handleFormLogin(event)">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="password" class="input" id="password" name="password" required placeholder="Password">
                <a href="#forgotPassword" class="forgotPsw">Forgot Password?</a>                
                <button class="loginBtn" id="loginButton" type="submit">Login</button>
                <a class="signupBtn" id="button" onclick="navigataToSignup()">SIGN UP</a>
            </form>
            
        </div>
    `

    const loginPageElement = document.querySelector<HTMLDivElement>('#loginPage');
    if (!loginPageElement) throw new Error('Login page not found');
    
    loginPageElement.innerHTML = loginForm;
};


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
        // setTimeout(() => {
        //     window.location.href = "./postsPage/postsPage.html";
        // }, 3000)
        
    } else {
        alert(data.message);
    }
};

function navigataToSignup() {
    window.location.href = "./signup/signup.html";
};

renderLoginPage();





