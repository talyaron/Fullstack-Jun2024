import { jokes } from "../models/JokeModel";
import { renderJokes } from "../view/components/renderJokes/RenderJokes";

export function handleNewJoke(ev: Event) {
    try {
        ev.preventDefault();
        const form = ev.target as HTMLFormElement;
        const formData = new FormData(form);
        const joke = formData.get('new-joke') as string;

        if(!joke) throw new Error('Joke is required');

        if(typeof joke !== 'string') throw new Error('Joke must be a string');
        if(joke.length < 10) throw new Error('Joke must be at least 10 characters long');

        const newJoke = {
            id: crypto.randomUUID(),
            text: joke
        }
        jokes.push(newJoke);

        renderJokes();
        form.reset();
      
    } catch (error) {
        console.error(error);
    }


}