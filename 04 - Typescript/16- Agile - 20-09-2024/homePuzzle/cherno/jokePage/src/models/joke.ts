import { renderJokes } from "../main";

export interface Joke
{
    id: string;
    text: string;
}

export const jokes: Joke[] = [];

export function deleteJoke(jokeId: string): void 
{
    try
    {
        const index = jokes.findIndex(joke => joke.id === jokeId);
        if (index === -1) throw new Error("Joke not found");

        jokes.splice(index, 1);
        renderJokes(); // Update the list of jokes in the UI
    }
    catch(error)
    {
        console.error(error);
    }
}

export function formatJoke(jokesElenment: HTMLElement, joke: Joke): void
{
    try
    {
        jokesElenment.innerHTML += `
            <li class="joke" id="${joke.id}">
                <h3> ${joke.text} </h3>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </li>
        `; 

        setTimeout(() =>
        {
            const editButton = document.querySelector<HTMLButtonElement>(`#${CSS.escape(joke.id)} .edit`);
            if (!editButton) throw new Error("couldn't find button");
            const deleteButton = document.querySelector<HTMLButtonElement>(`#${CSS.escape(joke.id)} .delete`);
            if (!deleteButton) throw new Error("couldn't find button");

            editButton.addEventListener('click', () => editJoke(joke))
            deleteButton.addEventListener('click', () => deleteJoke(joke.id));
        }, 0);
    }
    catch(error)
    {
        console.error(error);
    }
}

function editJoke(joke: Joke): void
{
    try
    {
        const jokeElement = document.getElementById(joke.id);
        if (!jokeElement) throw new Error("couldn't find joke element");

        jokeElement.innerHTML = `<input type="text" class="editedJoke" value="${joke.text}">`

        const inputElement = jokeElement.querySelector(".editedJoke")  as HTMLInputElement;
        if(!inputElement) throw new Error("couldn't find input element");

        inputElement.focus();
        inputElement.addEventListener('keyup', (event: KeyboardEvent) =>
        {
            if (event.key === 'Enter')
            {
                const index = jokes.findIndex(jokeList => jokeList.id === joke.id);
                jokes[index].text = inputElement.value;
                renderJokes();
            }
        });
    }
    catch(error)
    {
        console.error(error);
    }
}

export function addJoke(text: string): void
{
    jokes.push({ id: crypto.randomUUID(), text: text });
}

addJoke("Why did the scarecrow win an award? Because he was outstanding in his field!"),
addJoke("Why don’t skeletons fight each other? They don’t have the guts!"),
addJoke("Why did the tomato turn red? It saw the salad dressing."),
addJoke("Parallel lines have so much in common. It's a shame they'll never meet."),
addJoke("I'm reading a book on anti-gravity. It's impossible to put down!"),
addJoke("What do you call fake spaghetti? An impasta!")