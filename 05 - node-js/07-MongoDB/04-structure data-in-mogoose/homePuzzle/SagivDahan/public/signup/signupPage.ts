//model
//view
//enable render signup page function
renderSignupPage();

//controller
//render register function
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
            </form>
        </div>`
    document.querySelector<HTMLDivElement>('#signupPage')!.innerHTML = signupForm;
};
//register form
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
        } else {
            addUser(userName, email, phoneNumber, password);
        }
    }
       


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
//add user to database function
async function addUser(userName: string, email: string, phoneNumber: string, password: string) {
    try {
        const response = await fetch('http://localhost:3000/api/user/signup-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName, phoneNumber, email, password}),
        });
        
        const data = await response.json();

        if (response.ok) {
            alert('Signed up successful');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error sending post:', error);
    }
}
