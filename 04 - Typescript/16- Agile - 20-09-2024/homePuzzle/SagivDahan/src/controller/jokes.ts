import { Joke } from "../model/joke";

export function AddJoke(text: string, answer:string): Joke {
  return {id: `id-${crypto.randomUUID()}`, text: text, answer: answer}
}