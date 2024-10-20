import './style.css'
import { clickLOgIn, clickRegister, renderHome } from './view/home';






document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${renderHome()}
  </div>
`
clickLOgIn();
clickRegister();



