import { Joke } from './model';
import { editJoke, deleteJoke } from './controllers';

export function renderJokes(jokes: Joke[]): void {
    const jokeListElement = document.getElementById('joke-list');
    if (!jokeListElement) return;

    jokeListElement.innerHTML = '';

    jokes.forEach((joke, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = joke.text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editJoke(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteJoke(index);

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        jokeListElement.appendChild(listItem);
    });
}
