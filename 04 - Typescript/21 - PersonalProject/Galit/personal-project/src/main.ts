import { renderWelcomePage, setupWelcomePageListeners } from './pages/welcome/welcomePage';
import { renderRegister } from './pages/register/registerPage';
import { renderLogin } from './pages/login/loginPage'; 
import './style.scss';
import './pages/welcome/welcome.scss';
import './pages/register/register.scss';
import './pages/login/login.scss';

const root = document.getElementById('app');


function loadPage() {
  if (!root) return;

  const currentPage = window.location.hash;

  if (currentPage === '#register') {
    root.innerHTML = renderRegister();
  } else if (currentPage === '#login') {
    root.innerHTML = renderLogin(); 
  } else {
    root.innerHTML = renderWelcomePage();
    setupWelcomePageListeners(); 
  }
}


window.addEventListener('hashchange', loadPage);


loadPage();
