import { jokes } from "../models/Joke.ts";

export function renderJokes(): void {
  const jokesElement = document.createElement("div");
  jokesElement.className = "jokes";
  jokes.forEach((joke, index) => {
    const jokeElement = document.createElement("div");
    jokeElement.className = "joke";
    jokeElement.innerHTML = `
      <p>${joke.id}. ${joke.text}</p>
      <button class="edit-joke">Edit</button>
      <button class="delete-joke">Delete</button>
    `;

    jokeElement.querySelector(".edit-joke")!.addEventListener("click", () => {
      const newText = prompt("Enter new joke text:", joke.text);
      if (newText) {
        jokes[index].text = newText;
        rerenderJokes();
      }
    });

    jokeElement.querySelector(".delete-joke")!.addEventListener("click", () => {
      jokes.splice(index, 1);
      rerenderJokes();
    });

    jokesElement.appendChild(jokeElement);
  });

  const container = document.querySelector<HTMLDivElement>("#jokes")!;
  container.innerHTML = "";
  container.appendChild(jokesElement);
}

function addNewJoke(event: Event): void {
  event.preventDefault(); 
  const inputElement =
    document.querySelector<HTMLInputElement>("#new-joke-text");
  const newJokeText = inputElement?.value.trim();

  if (newJokeText) {
    const newJoke = {
      id: (jokes.length + 1).toString(),
      text: newJokeText,
    };
    jokes.push(newJoke); 
    inputElement!.value = ""; 
    rerenderJokes(); 
  } else {
    alert("Please enter a joke!");
  }
}

function rerenderJokes() {
  renderJokes();
}

document
  .querySelector<HTMLFormElement>("#add-joke-form")
  ?.addEventListener("submit", addNewJoke);
