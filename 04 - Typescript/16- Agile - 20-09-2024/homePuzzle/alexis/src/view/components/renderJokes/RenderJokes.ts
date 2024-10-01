import { jokes } from "../../../models/JokeModel";
import { renderJoke } from "./RenderJoke";

export function renderJokes() {
    try {

        const jokesElement = document.querySelector<HTMLDivElement>('#joke');
        if (!jokesElement) throw new Error('no jokes found');
        const jokesHTML = jokes.map(joke => renderJoke(joke)).join('');

        jokesElement.innerHTML = `
        <h1>"Here are some great Dad Jokes!"</h1>   
        ${jokesHTML}`;

        //get all jokes elements and add event listener to delete button
        jokes.forEach(joke => {
            try {
                if (!joke.isEdited) {
                    const deleteButton = document.querySelector<HTMLButtonElement>(`#delete-${joke.id}`);
                    if (!deleteButton) throw new Error('no delete button found');
                    deleteButton.addEventListener('click', () => {
                        jokes.splice(jokes.indexOf(joke), 1);
                        renderJokes();
                    });

                    //edit buttons
                    const editButton = document.querySelector<HTMLButtonElement>(`#edit-${joke.id}`);
                    if (!editButton) throw new Error('no edit button found');
                    editButton.addEventListener('click', () => {
                        joke.isEdited = true;
                        renderJokes();
                    });
                } else {
                    const saveButton = document.querySelector<HTMLButtonElement>(`#save-${joke.id}`);
                    if (!saveButton) throw new Error('no save button found');
                    saveButton.addEventListener('click', () => {
                        const input = document.querySelector<HTMLInputElement>(`#edit-${joke.id}`);
                        if (!input) throw new Error('no input found');
                        joke.text = input.value;
                        joke.isEdited = false;
                        renderJokes();
                    });
                }
            } catch (error) {
                console.error(error);
            }
        });


    } catch (error) {
        console.error(error);

    }
}
