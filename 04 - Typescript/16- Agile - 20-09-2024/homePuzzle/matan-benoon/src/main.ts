import './style.css';
import { renderJokes } from './counter';
import { displayResults } from './counter';
import { jokes } from './models/model';

const jokesListElement = document.getElementById('joke-list');

if (jokesListElement) {
  renderJokes(jokesListElement, jokes);
}

export function handleSubmit(event: Event): void {
    event.preventDefault();

    const name = (document.getElementById('your-joke') as HTMLInputElement).value;

    const newJoke = {
      id: jokes.length + 1,
      text: name
    };
    jokes.push(newJoke);

    if (jokesListElement) {
      renderJokes(jokesListElement, jokes);
    }

    displayResults(name);

    (document.getElementById('your-joke') as HTMLInputElement).value = '';
}

const form = document.getElementById('myForm') as HTMLFormElement;
form.addEventListener('submit', handleSubmit);