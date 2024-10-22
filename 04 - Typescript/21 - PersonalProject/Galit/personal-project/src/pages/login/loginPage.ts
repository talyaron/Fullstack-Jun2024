import { renderDashboard } from '../dashboard/dashboardPage';
import { loginUser, saveLoggedInUser, logoutUser } from '../../controller/userController';
import { loadPage } from '../../main';
import { getUserSettings } from '../settings/settingsPage';
import {  getUserProfile } from '../userPage/profilePage';

export function renderLogin(): string {
    const content = `
        <div class="container">
            <h1>Login</h1>
            <form id="loginForm">
                <input type="email" class="input" id="email" name="email" required placeholder="Email">
                <input type="password" class="input" id="password" name="password" required placeholder="Password">
                <button class="btn" id="loginButton" type="submit">Login</button>
                <button class="btn" id="welcomeButton" type="button">Back</button> <!-- Back button -->
            </form>
        </div>
    `;

    document.body.innerHTML = content;

    try {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedEmail) {
            (document.getElementById('email') as HTMLInputElement).value = savedEmail;
        }
        if (savedPassword) {
            (document.getElementById('password') as HTMLInputElement).value = savedPassword;
        }
    } catch (error) {
        console.error('Error loading saved login information:', error);
    }

    return content;
}

export function setupLoginPageListeners(): void {
    try {
        const loginForm = document.getElementById("loginForm") as HTMLFormElement;
        const welcomeButton = document.getElementById("welcomeButton") as HTMLButtonElement;

        if (loginForm) {
            loginForm.addEventListener("submit", handleLoginSubmit);
        }

        if (welcomeButton) {
            welcomeButton.addEventListener("click", () => {
                window.location.hash = '#welcome';
                loadPage();  
            });
        }
    } catch (error) {
        console.error('Error setting up login page listeners:', error);
    }
}

async function handleLoginSubmit(event: Event) {
    event.preventDefault();

    try {
        const emailInput = (document.getElementById("email") as HTMLInputElement).value;
        const passwordInput = (document.getElementById("password") as HTMLInputElement).value;

        localStorage.setItem('email', emailInput);
        localStorage.setItem('password', passwordInput);

        const user = loginUser(emailInput, passwordInput);

        if (user) {
            saveLoggedInUser(user); 
            console.log("User logged in:", user);

            setTimeout(() => {
                document.body.innerHTML = renderDashboard(user);
            }, 1000);
        } else {
            throw new Error('Invalid email or password.');
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert('Login failed: ' + (error as Error).message);
    }
}





export function handleLogout() {
    try {
        const userProfile = getUserProfile();  
        const userSettings = getUserSettings();  

        if (userProfile || userSettings) {
            localStorage.setItem('loggedInUser', JSON.stringify(userProfile));
            localStorage.setItem('userSettings', JSON.stringify(userSettings));
        }

        logoutUser(); 
        window.location.hash = '#login';  
        loadPage();  
        console.log("User logged out successfully.");
    } catch (error) {
        console.error("Error during logout:", error);
        alert('Logout failed. Please try again.');
    }
}
