import { renderWelcomePage, setupWelcomePageListeners } from './pages/welcome/welcomePage';
import { renderRegister, setupRegisterPageListeners } from './pages/register/registerPage';
import { renderLogin, setupLoginPageListeners } from './pages/login/loginPage'; 
import { renderDashboard, setupDashboardPageListeners } from './pages/dashboard/dashboardPage'; 
import { renderProfile, setupProfilePageListeners } from './pages/userPage/profilePage'; 
import { renderSettings, setupSettingsPageListeners } from './pages/settings/settingsPage';
import './style.scss';
import './pages/welcome/welcome.scss';
import './pages/register/register.scss';
import './pages/login/login.scss';
import './pages/dashboard/dashboardPage.scss';
import './pages/userPage/profile.scss'; 
import './pages/settings/settings.scss';

const root = document.getElementById('app'); 

function handleLogout() {
    try {
        localStorage.removeItem('loggedInUser');
        alert('You have been logged out successfully!');
        window.location.hash = '#login';
        loadPage();
    } catch (error) {
        console.error("Error during logout:", error);
        alert('Logout failed. Please try again.');
    }
}

export function loadPage() {
    try {
        if (!root) return;

        const currentPage = window.location.hash;
        const loggedInUser = localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')!) : null;

        if (currentPage === '#register') {
            root.innerHTML = renderRegister();
            setupRegisterPageListeners();
        } else if (currentPage === '#login') {
            root.innerHTML = renderLogin();
            setupLoginPageListeners();
        } else if (loggedInUser && currentPage === '#dashboard') {
            root.innerHTML = renderDashboard(loggedInUser);
            setupDashboardPageListeners();
        } else if (loggedInUser && currentPage === '#profile') {
            root.innerHTML = renderProfile(loggedInUser);
            setupProfilePageListeners();
        } else if (loggedInUser && currentPage === '#settings') {
            root.innerHTML = renderSettings(loggedInUser);
            setupSettingsPageListeners(loggedInUser);
        } else if (currentPage === '' || currentPage === '#welcome') { 
            root.innerHTML = renderWelcomePage();
            setupWelcomePageListeners();
        } else if (!loggedInUser) { 
            root.innerHTML = renderLogin();
            setupLoginPageListeners();
        }

        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', handleLogout);
        }
    } catch (error) {
        console.error("Error loading page:", error);
        alert('Failed to load the page. Please try again.');
    }
}

window.addEventListener('hashchange', loadPage);

if (!window.location.hash) {
    window.location.hash = '#welcome';
}

loadPage();