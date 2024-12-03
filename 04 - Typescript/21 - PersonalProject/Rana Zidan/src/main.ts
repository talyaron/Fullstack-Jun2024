
import "./style.scss"; 
import { clickLOgIn, clickRegister, renderHome } from './view/home';
import { backToHome } from "./view/logIn";




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${renderHome()}
   
  </div>
`
clickLOgIn();
clickRegister();
backToHome();

