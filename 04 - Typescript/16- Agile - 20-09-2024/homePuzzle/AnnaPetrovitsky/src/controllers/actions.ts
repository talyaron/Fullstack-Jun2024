import { Joke, jokes } from "../Model/Joke";




export function renderRemove(joke : Joke , jokes : Joke [])  :void{
    const removeJoke = jokes.findIndex((joke) => joke.id === joke.id);
    if(removeJoke){
        jokes.splice(removeJoke,1);
    }

}

