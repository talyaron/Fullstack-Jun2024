import { Joke } from "../model/model";
import { getButtons } from "../controllers/controllers";

//const containerElement = document.querySelector<HTMLDivElement>("#app") as HTMLElement;
const jokecontainerElement = document.getElementById("jokeList") as HTMLElement;
export function render(jokes: Joke[]) {
    jokecontainerElement.innerHTML="";
  jokes.forEach((joke) => {
    const jokeElement = document.createElement("div");
    jokeElement.classList.add("joker");
    jokeElement.id = joke.id;
    jokeElement.innerHTML = `<button id=${joke.id}"edit">edit</button><h3 id=${joke.id}"leadUp">${joke.leadUp}</h3><br><h3 id=${joke.id}"punchline" > ${joke.punchline}</h3> <button id=${joke.id}"delete">delete</button>`;
    jokeElement.style.margin ="3vh"
     jokeElement.style.backgroundColor ="teal";
     jokeElement.style.width="80vh"
     jokeElement.style.borderRadius="50px"
     jokecontainerElement.appendChild(jokeElement);
    getButtons(jokeElement, joke);
  });
}


