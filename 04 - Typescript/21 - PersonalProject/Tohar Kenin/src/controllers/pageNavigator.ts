// import loginPage from '../view/pages/login/loginPage';
import { registerPage } from '../view/pages/register/registerPage';
import {mainPage} from '../view/pages/mainPage/mainPage';
// import sideBar from '../view/components/sideBar/sideBar';


export function navigation():string {
    
    return mainPage();
    // switch () {
    //     case 'mainPage':
    //         return mainPage();
    //     case 'registerPage':
    //         return registerPage();
    // }
    
}