
import {Joke} from "../model/model";



const containerElement =document.querySelector<HTMLDivElement>('#app');

export function render(jokes:Joke[])
{
    jokes.forEach(joke=>
    {
        const jokeElement=document.createElement("div")
        jokeElement.classList.add("joker")
        jokeElement.innerHTML=`${joke.leadUp} ${joke.punchline}`
        containerElement?.appendChild(jokeElement);
    }
    )
}