
function renderSignupPage() {
    
    const signupForm = `
        <div class="container">
            <h1>Register</h1>
            <form onsubmit="handleFormRegister(event)">
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
                <a href="../index.html" class="loginNavBtn" id="backToLogin" type="button">Back to Login Page</a>
            </form>
        </div>
    `
    document.querySelector<HTMLDivElement>('#signupPage')!.innerHTML = signupForm;
};

async function handleFormRegister(event: Event) {

        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const userName = (form.elements.namedItem('userName') as HTMLInputElement).value;
        
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
        const phoneNumber = (form.elements.namedItem('phone') as HTMLInputElement).value;
        const pswConfirm = (form.elements.namedItem('pswConfirm') as HTMLInputElement).value;
        console.log('Register', userName, email, password, phoneNumber, pswConfirm)
        if (password !== pswConfirm) {
            alert('Passwords do not match! Please try again');   
        } else if(await userExists(email)) {
            alert('Email already registered!');
        } 
        else {
            addUser(userName, phoneNumber, email, password);
        }            
    };

    async function userExists(email: string) {
        try {
            const response = await fetch(`http://localhost:3000/api/user/userExists?email=${encodeURIComponent(email)}`);
            const data = await response.json();
            return data.exists;
        } catch (error) {
            console.error("Error checking user existence:", error);
            return false;
        }
    }

    async function addUser(userName: string, phoneNumber: string, email: string, password: string) {
        try {
            const response = await fetch('http://localhost:3000/api/user/signupUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, phoneNumber, email, password}),
            });
            if (!response.ok) throw new Error('Failed to add user');
    
            console.log('User added successfully!');

            window.location.href = "../postsPage/postsPage.html";
    
        } catch (error) {
            console.error('Error sending post:', error);
        }
    }

    renderSignupPage();