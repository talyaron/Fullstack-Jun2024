import './style.css'

import { setupCounter } from './counter.ts'
import { renderRandom } from './view/randomView.ts'
import { renderMainPage } from './view/pages/pageMain.ts';



function main(){
  try{
    const mainElement = document.querySelector<HTMLDivElement>('#app');
    if (!mainElement) throw new Error('Element not found')
    mainElement.innerHTML = renderMainPage();
const randomElement= document.querySelector<HTMLDivElement>(`#random`)!
if(!randomElement) throw new Error(`not found`);

  randomElement.innerHTML=renderRandom();
  }
  catch(e){
    console.error(e);
  }
  
}
main();

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
