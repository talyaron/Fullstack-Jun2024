import './main.scss';
import { renderSideBar } from './view/components/sideBar/sideBar';
import { renderHeader } from './view/components/header/header';
import { navigation } from './controllers/pageNavigator';
import { loginPage } from './view/pages/login/loginPage';
import { registerPage } from './view/pages/register/registerPage';

// document.querySelector<HTMLDivElement>('#header')!.innerHTML = renderHeader();
// document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = renderSideBar();

// document.querySelector<HTMLDivElement>('#pageNavigation')!.innerHTML = navigation();


// document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = loginPage();

document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = registerPage();

