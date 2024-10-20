// import loginPage from '../view/pages/login/loginPage';
import { registerPage } from '../view/pages/register/registerPage';
import {mainPage} from '../view/pages/mainPage/mainPage';
// import sideBar from '../view/components/sideBar/sideBar';


// export function navigation():string {

//     const sidebarLinks = document.querySelectorAll('.menu-item');

//     sidebarLinks.forEach(link => {
//         link.addEventListener('click', (event: Event) => {
//             const targetDiv = (event.target as HTMLElement).closest('div[data-target]') as HTMLDivElement;
//             console.log((event.target as HTMLElement).getAttribute('data-target'));
//         });
        
//     });

export function navigation(): void {
    const sidebarLinks = document.querySelectorAll('.menu-item');

    let targetValue: string | null = null;
    sidebarLinks.forEach((link) => {
        link.addEventListener('click', (event: Event) => {
            const targetDiv = event.currentTarget as HTMLDivElement;

            targetValue = targetDiv.getAttribute('data-target');
            console.log('dd',targetValue);
            const selectedSection = document.getElementById(targetValue!);
            console.log(selectedSection)
            if (selectedSection) {
                selectedSection.setAttribute('style', 'display: block');
            }
            return mainPage()
        });
    });
    // return registerPage();
}

// function handleTarget(target:any):string{
//     console.log(target)
//     if(target === "courses"){
//         console.log('yes');
//         return re
//     }
//     return mainPage();
// }


function onClick(event: Event):string {

    const targetDiv = event.currentTarget as HTMLDivElement;

    const targetValue:any = targetDiv.getAttribute('data-target');

    // switch(targetValue) { 
    //     case 'dashboard': { 
    //        return mainPage()
    //     } 
    //     case 'courses': { 
    //        return registerPage();
    //        break; 
    //     } 
    //     default: { 
    //         return mainPage()
    //        break; 
    //     } 
    // }
    return targetValue;
    } 

