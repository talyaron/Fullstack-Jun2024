import { Joke } from "../model/jokepage";

export function AddJoke(text: string, answer:string): Joke {
  return {id: `id-${crypto.randomUUID()}`, text: text, answer: answer}
}