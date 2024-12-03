import './main.scss';
import { renderSideBar } from './view/components/sideBar/sideBar';
import { renderHeader } from './view/components/header/header';
import { navigation } from './controllers/pageNavigator';
import { loginPage } from './view/pages/login/loginPage';
import { registerPage } from './view/pages/register/registerPage';
import { handleFormLogin } from './view/pages/login/loginPage';
import { handleFormRegister } from './view/pages/register/registerPage';
import { handleAddCourse } from './controllers/addCourse';

//renders all pages in the app 
function renderPages():void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    const queryString = window.location.search;
    const params:any = new URLSearchParams(queryString);

    const loginParam = params.get('loginParam');
    const registerParam = params.get('registerParam');
    const loginPressed = params.get('loginBtn');
    const registerPressed = params.get('signupBtn');
    // console.log('initial', initialPage);
    if (loginParam) {
        document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = loginPage();
        handleFormLogin(); 
    }
    if (registerParam) {
        document.querySelector<HTMLDivElement>('#loginContainer')!.innerHTML = registerPage();
        handleFormRegister();
    } else if (loginPressed || registerPressed || isLoggedIn) {
        mainPageRender();
    }
};

//renders main page(dashboard)
export function mainPageRender(): void {
        document.querySelector<HTMLDivElement>('#header')!.innerHTML = renderHeader();
        document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = renderSideBar();

        document.querySelector<HTMLDivElement>('#pageNavigation')!.innerHTML = navigation();
        handleAddCourse();
};

renderPages();