import { jokes } from "../../model/Joke";

export function renderJokes() {
    const jokeElement = document.getElementById('JokeList');
    if(!jokeElement) throw new Error('Not found an element');
    jokes.forEach((joke) =>{
        const jock = document.createElement('joke');
        jock.innerHTML = `
        <li>${joke.id}</li>
        <p>${joke.text}</p>`;
        jokeElement.appendChild(jock);
        jock.classList.add('joke');
    })
}