import { Joke } from "../Model/Joke";

function renderJoke(joke : Joke)  :string{
    const html = `
    <h5>${joke.id}</h5>
    <p>${joke.text}</p>`;
    return html;
}

export function renderJokes(jokes : Joke [])  :string{
    const html = jokes.map((joke) => renderJoke(joke)).join('');
    return html;
}