import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { renderJokes } from './View/JokeRender.ts'
import { jokes } from './Model/Joke.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>My List Jokes</h1>
    <div id="JokeList"></div>
  </div>
`;

function main(){
  try {
    const mainElement = document.getElementById('JokeList');
    if(!mainElement) throw new Error("Not Found an Element!!!");

    mainElement.innerHTML = renderJokes(jokes);
  } catch (error) {
    console.error(error);
  }  
}
console.log(renderJokes(jokes));
main();
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
