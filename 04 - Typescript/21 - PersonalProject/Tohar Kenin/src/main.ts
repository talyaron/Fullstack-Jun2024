import './main.scss';
import { renderSideBar } from './view/components/sideBar/sideBar';
import { renderHeader } from './view/components/header/header';
import { navigation } from './controllers/pageNavigator';
import { loginPage } from './view/pages/login/loginPage';
import { registerPage } from './view/pages/register/registerPage';
import { handleFormLogin } from './view/pages/login/loginPage';
import { handleFormRegister } from './view/pages/register/registerPage';

// document.querySelector<HTMLDivElement>('#header')!.innerHTML = renderHeader();
// document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = renderSideBar();

// document.querySelector<HTMLDivElement>('#pageNavigation')!.innerHTML = navigation();

//renders all pages in the app 
function renderPages():void {

    document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = loginPage();
    handleFormLogin(); 

    const queryString = window.location.search;
    const params:any = new URLSearchParams(queryString);

    const loginParam = params.get('loginParam');
    const registerParam = params.get('registerParam');
    
    if (loginParam) {
        document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = loginPage();
        handleFormLogin(); 
        console.log('inside login')
    }
    else if (registerParam) {
        document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = registerPage();
        handleFormRegister();
    }
};

renderPages();