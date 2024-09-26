import { jokes, joke} from "./models/model";


export function renderJokes(element: HTMLElement, jokes: joke[]) {
  element.innerHTML = ''; 
  jokes.forEach(joke => {
    element.innerHTML += `<li>${joke.id}. ${joke.text}</li>`;
  });
}

export function displayResults(name: string, jokeId: number): void {
  const result = document.getElementById('result') as HTMLDivElement;

  result.innerHTML += `
    <div id="user-joke-${jokeId}">
      <p>${name}</p>
      <button id="remove-btn-${jokeId}">Remove</button>
    </div>
  `;

  const buttonRemove = document.getElementById(`remove-btn-${jokeId}`);
  if (buttonRemove) {
    buttonRemove.addEventListener('click', () => removeJoke(jokeId));
  }
}

export function removeJoke(jokeId: number): void {
  const jokeItem = document.getElementById(`user-joke-${jokeId}`);
  if (jokeItem) {
    jokeItem.remove(); 
    const index = jokes.findIndex(joke => joke.id === jokeId);
    if (index !== -1) {
      jokes.splice(index, 1); 
    }
  }
}