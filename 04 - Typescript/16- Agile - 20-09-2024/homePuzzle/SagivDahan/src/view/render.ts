import { joke } from "../model/joke"


export function renderJokes(){
  try {
    const jokePageElement = document.getElementById("jokepage") as HTMLElement
    if (!jokePageElement) throw new Error("Joke Page Element Not Found")

    joke.forEach(jokes => {
      const jokepageTitle = document.createElement("h1") 
      const jokepageAnswer = document.createElement("p")

      jokepageTitle.textContent = jokes.text
      jokepageAnswer.textContent = jokes.answer
      jokepageAnswer.id = jokes.id

      jokePageElement.appendChild(jokepageTitle)
      jokePageElement.appendChild(jokepageAnswer)
    });
  } catch (error) {
    console.error(error)
  }
}