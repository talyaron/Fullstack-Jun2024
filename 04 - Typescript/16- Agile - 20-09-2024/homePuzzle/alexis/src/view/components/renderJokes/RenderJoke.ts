import { Joke } from "../../../models/JokeModel";

export function renderJoke(joke: Joke): string {
    if (!joke.isEdited) {
        return `<p>${joke.text}
            <button id="delete-${joke.id}">Delete</button>
            <button id="edit-${joke.id}">Edit</button>
         </p>`;
    } else {
        return `<p>
        <input type="text" value="${joke.text}" id="edit-${joke.id}">
        <button id="save-${joke.id}">Save</button>
        </p>`;
    }
}