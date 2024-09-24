import { Joke, jokes } from "../model/model";
import { createJoke } from "../model/model";
import { render } from "../render/render";
interface editMode {
  editOn: boolean;
}
const editMode: editMode = { editOn: false };

export function getButtons(jokeElement: HTMLElement, joke: Joke) {
  const addJoke = document.getElementById(`add`) as HTMLButtonElement;

  addJoke.addEventListener("click", newJoke);

  const deleteButton = document.getElementById(
    `${joke.id}"delete"`
  ) as HTMLButtonElement;
  const editButton = document.getElementById(
    `${joke.id}"edit"`
  ) as HTMLButtonElement;

  deleteButton.addEventListener("click", () => {
    jokeElement.remove();

    const jokeDeleteIndex = jokes.findIndex(
      (joke) => joke.id === jokeElement.id
    );
    jokes.splice(jokeDeleteIndex, 1);
  });

  editButton.addEventListener("click", () => {
    const leadUpElement = document.getElementById(
      `${joke.id}"leadUp"`
    ) as HTMLButtonElement;
    const punchlineElement = document.getElementById(
      `${joke.id}"punchline"`
    ) as HTMLButtonElement;

    editMode.editOn = true;
    if (editMode.editOn == true) {
      leadUpElement.classList.add("selectable");
      punchlineElement.classList.add("selectable");
    }

    leadUpElement.addEventListener(
      "click",
      () => {
        if (editMode.editOn == true) {
          const leadUpChange = prompt("write what you would change it to");
          if (leadUpChange) {
            leadUpElement.innerHTML = `${leadUpChange}`;
            joke.leadUp = leadUpChange;
          }
          editMode.editOn = false;
          leadUpElement.classList.remove("selectable");
          punchlineElement.classList.remove("selectable");
        }
      },
      { once: true }
    );
    punchlineElement.addEventListener(
      "click",
      () => {
        if (editMode.editOn == true) {
          const punchlineChange = prompt("write what you would change it to");
          if (punchlineChange) {
            punchlineElement.innerHTML = `${punchlineChange}`;
            joke.punchline = punchlineChange;
          }
          editMode.editOn = false;
          leadUpElement.classList.remove("selectable");
          punchlineElement.classList.remove("selectable");
        }
      },
      { once: true }
    );
  });
}

export function newJoke() {
  const leadUpInputElement = document.getElementById(
    "leadUpInput"
  ) as HTMLInputElement;
  const punchlineInputElement = document.getElementById(
    "punchlineInput"
  ) as HTMLInputElement;
  const punchlineValue = punchlineInputElement.value;
  const leadUpValue = leadUpInputElement.value;
  if (
    punchlineValue.length >= 2 &&
    punchlineValue.length <= 12 &&
    leadUpValue.length >= 2 &&
    leadUpValue.length <= 12
  ) {
    createJoke(leadUpValue, punchlineValue);
    render(jokes);
  }
}
