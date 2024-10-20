import './main.scss';
import { renderSideBar } from './view/components/sideBar/sideBar';
import { renderHeader } from './view/components/header/header';
import { navigation } from './controllers/pageNavigator';

document.querySelector<HTMLDivElement>('#header')!.innerHTML = renderHeader();
document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = renderSideBar();

document.querySelector<HTMLDivElement>('#pageNavigation')!.innerHTML = navigation();
// console.log("first");
// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// console.log('ddd', params)
// const param1 = params.get('param1');
// const param2 = params.get('param2');
// console.log(param1, param2);


// export function navigation(): void {
//     const sidebarLinks = document.querySelectorAll('.menu-item');


//     let targetValue: string | null = null;
//     sidebarLinks.forEach((link) => {
//         link.addEventListener('click', (event: Event) => {
//             const targetDiv = event.currentTarget as HTMLDivElement;

//             targetValue = targetDiv.getAttribute('data-target');
//             console.log('dd',targetValue);
//             // const selectedSection = document.getElementById(targetValue!);
//             // console.log(selectedSection)
//             // if (selectedSection) {
//             //     selectedSection.setAttribute('style', 'display: block');
//             // }
            
//         });
//     });
//     // return registerPage();
// }
// navigation();