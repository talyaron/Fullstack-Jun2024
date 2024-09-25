import { joke } from "./models/model";

export function renderJokes(element: HTMLElement, jokes: joke[]) {
  element.innerHTML = '';
  jokes.forEach(joke => element.innerHTML += `<li> ${joke.id} ${joke.text} <button onclick="clearResults()">remove</button></li>
    `);
}


export function displayResults(name: string): void {
  const result = document.getElementById('result') as HTMLDivElement;
  result.innerHTML = `<h2>yours jokes:</h2>
 <p>the joke: ${name}</p> 
 `;
}

export function clearResults(): void {
  const resultDiv = document.getElementById('result') as HTMLDivElement;
  resultDiv.innerHTML = '';}