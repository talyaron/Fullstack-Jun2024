import { renderWelcomePage, setupWelcomePageListeners } from './pages/welcome/welcome';
import './style.scss'
import './pages/welcome/welcome.scss'; 
import './pages/register/register.scss'
import './pages/login/login.scss'

const root = document.getElementById('app');

if (root) {
  root.innerHTML = renderWelcomePage();
  setupWelcomePageListeners();  
}
