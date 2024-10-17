import { renderJokes as renderJokesView } from './view.ts';
import { jokes, Joke } from './model.ts';

function loadJokes() {
    const savedJokes = localStorage.getItem('jokes');
    if (savedJokes) {
        const parsedJokes: Joke[] = JSON.parse(savedJokes);
        jokes.push(...parsedJokes);
    }
}

function saveJokes() {
    localStorage.setItem('jokes', JSON.stringify(jokes));
}

export function addJoke(jokeText: string, category: string): void {
    const newJoke: Joke = {
        id: jokes.length + 1,
        text: jokeText,
        category: category
    };
    jokes.push(newJoke);
    saveJokes();
    renderJokesView(jokes); 
}


export function editJoke(index: number): void {
    const newJokeText = prompt('Enter new joke text:', jokes[index].text);
    if (newJokeText) {
        jokes[index].text = newJokeText;
        saveJokes();
        renderJokesView(jokes);
    }
}

export function deleteJoke(index: number): void {
    jokes.splice(index, 1);
    saveJokes();
    renderJokesView(jokes);
}

document.getElementById('joke-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput = document.getElementById('joke-input') as HTMLInputElement;
    const categoryInput = document.getElementById('category-input') as HTMLInputElement;
    const jokeText = textInput.value;
    const category = categoryInput.value;

    if (jokeText && category) {
        addJoke(jokeText, category);
        textInput.value = '';
        categoryInput.value = '';
    }
});

loadJokes();
