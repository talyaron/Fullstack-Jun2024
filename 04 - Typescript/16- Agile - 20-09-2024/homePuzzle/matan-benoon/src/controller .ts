import { joke} from "./models/model";
import './style.css';



export function renderJokes(element: HTMLElement, jokes: joke[]) {
  element.innerHTML = ''; 
  jokes.forEach(joke => {
    element.innerHTML += `<li>${joke.id}. ${joke.text}</li>`;
  });
}

export function displayResults(name: string, jokeId: number): void {
  const result = document.getElementById('result') as HTMLDivElement;
  const jokeDiv = document.createElement('div');

  jokeDiv.innerHTML = `
    <div id="user-joke-${jokeId}" class="joke-item">
      <p class="joke-text">${name}</p>
      <button id="remove-btn-${jokeId}" class="remove-btn">Remove</button>
    </div>
  `;
  
  result.appendChild(jokeDiv);

  const buttonRemove = document.getElementById(`remove-btn-${jokeId}`);
  if (buttonRemove) {
    buttonRemove.addEventListener('click', () => removeJoke(jokeId));
  }
}

export function removeJoke(jokeId: number): void {
  const jokeItem = document.getElementById(`user-joke-${jokeId}`);
  if (jokeItem) {
    jokeItem.remove(); 
}
}