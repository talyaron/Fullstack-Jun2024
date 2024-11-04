interface Post {
    caption: string;
    imageURL: string;
    id: string;
    editTitle?: boolean;
    editText?: boolean;
};

class User {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;

    constructor (userName: string, email: string, password: string, 
        phoneNumber: string, id?:string, posts?: Post[]) {
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

    // const response = await fetch('http://localhost:3000/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    // });
    // if (!response.ok) throw new Error('Failed to add user');

    // const data = await response.json();


    if(await userExists(email)) {
        if(await passwordNotCorrect(password)) {
            alert('Password not correct');
        }
        else {
            window.location.href = "../postsPage/postsPage.html";
        }
    } else {
        alert('You are not registered, please sign up');
    }
    
    
            
            
            //Validation with localStorage
            // if (localStorage.getItem('email') !== email) {
            //     alert('Email does not exist');
            // } else if (localStorage.getItem('password') !== password) {
            //     alert('Password not valid');
            // } else {
            // console.log(email + ', ' + password);
            //     const newUrl = '?loginBtn=loginBtn';
            //     window.location.href = newUrl; 
            // }


};

function navigataToSignup() {
    window.location.href = "./signup/signup.html";
};

async function userExists(email: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/user-exists?email=${encodeURIComponent(email)}`);
        const data = await response.json();
        return data.exists;
    } catch (error) {
        console.error("Error checking user existence:", error);
        return false;
    }
}

async function passwordNotCorrect(password: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/get-user?password=${encodeURIComponent(password)}`);
        const data = await response.json();
        return data.passwordNotCorrect;
    } catch (error) {
        console.error("Error checking user existence:", error);
        return false;
    }
}

renderLoginPage();





