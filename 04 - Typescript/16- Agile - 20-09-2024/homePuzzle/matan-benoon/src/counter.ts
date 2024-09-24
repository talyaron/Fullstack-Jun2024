import { joke } from "./models/model";

export function renderJokes(element: HTMLElement, jokes: joke[]) {
  element.innerHTML = '';
  jokes.forEach(joke => element.innerHTML += `<li> ${joke.id} ${joke.text}</li>
    `);
}