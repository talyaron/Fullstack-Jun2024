import './style.css'

import { handleNewJoke } from './controllers/JokeCont.ts';
import { renderJokes } from './view/components/renderJokes/RenderJokes.ts';



renderJokes();

function main(){
    try {
        const form = document.querySelector<HTMLFormElement>('#form-add-joke');
        if (!form) throw new Error('no form found');
        form.addEventListener('submit',handleNewJoke);
    } catch (error) {
        console.error(error);
    }
}

main();
