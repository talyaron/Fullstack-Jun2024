import { renderWelcomePage, setupWelcomePageListeners } from './pages/welcome/welcomePage';
import { renderRegister, setupRegisterPageListeners } from './pages/register/registerPage';
import { renderLogin, setupLoginPageListeners } from './pages/login/loginPage'; 
import { renderDashboard, setupDashboardListeners } from './pages/dashboard/dashboardPage'; 

import './style.scss';
import './pages/welcome/welcome.scss';
import './pages/register/register.scss';
import './pages/login/login.scss';
import './pages/dashboard/dashboardPage.scss';


const root = document.getElementById('app');

function loadPage() {
  if (!root) return;

  const currentPage = window.location.hash;

  if (currentPage === '#register') {
    root.innerHTML = renderRegister();
    setupRegisterPageListeners(); 
  } else if (currentPage === '#login') {
    root.innerHTML = renderLogin(); 
    setupLoginPageListeners(); 
  } else if (currentPage === '#dashboard') {
    root.innerHTML = renderDashboard(loginUser);
    setupDashboardListeners();
  } else {
    root.innerHTML = renderWelcomePage();
    setupWelcomePageListeners(); 
  }
}

window.addEventListener('hashchange', loadPage);

loadPage();
