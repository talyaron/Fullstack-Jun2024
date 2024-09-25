import './style.css'
import {jokes} from './models/Joke.ts'




function renderJokes(){
const jokesElement = document.querySelector<HTMLDivElement>('#joke');
if (!jokesElement) throw new Error('no jokes found');
const jokesHTML = jokes.map(joke => `<p>${joke.text}</p>`).join('');

jokesElement.innerHTML = `
<h1>"Here are some great Dad Jokes!"</h1>
${jokesHTML}`

}
renderJokes();
