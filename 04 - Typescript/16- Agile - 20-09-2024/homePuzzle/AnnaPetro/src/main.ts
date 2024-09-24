import './style.css'
import { setupCounter } from './counter.ts'
import { renderJokes } from './View/components/renderJokes.ts'
import { renderMain } from './View/Pages/mainPage.ts'


function main(){
  try {
    const mainElement =   document.querySelector<HTMLDivElement>('#app');
    if(!mainElement) throw new Error('NOT FOUND AN ELEMENT');
    mainElement.innerHTML = renderMain();
    const jokelist = document.getElementById('JokeList');
    if(!jokelist) throw new Error ('NOT FOUND AN ELEMENT');
    renderJokes();
  } catch (error) {
    
  }
}

main();
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
