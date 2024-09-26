import './style.css';
import { renderJokes } from './controller ';
import { displayResults, } from './controller ';
import { jokes } from './models/model';

const jokesListElement = document.getElementById('joke-list');

if (jokesListElement) {
  renderJokes(jokesListElement, jokes); 
}

export function handleSubmit(event: Event): void {
    event.preventDefault();

    const joke = (document.getElementById('your-joke') as HTMLInputElement).value;

    const newJoke = {
      id: jokes.length + 1,
      text: joke
    };

    jokes.push(newJoke); 


    displayResults(joke, newJoke.id); 

    (document.getElementById('your-joke') as HTMLInputElement).value = ''; 
}


const form = document.getElementById('myForm') as HTMLFormElement;
form.addEventListener('submit', handleSubmit);


