import { allJokes } from "../models/joke";

export function renderJokes(){
    try{
        const element=document.querySelector<HTMLElement>('#jokes')!
        if(element!)
            throw new Error('not find jokes')
        const jokes =allJokes.map((joke)=>(joke.text));
        jokes.forEach((joke)=> newJoke(joke,element));
    }catch(e){
        console.error(e);
    }

}
 
function newJoke(joke:string, element:HTMLElement){
    const newJoke= document.createElement('div');
    newJoke.innerHTML=`${joke}`
    element.appendChild(newJoke);
}