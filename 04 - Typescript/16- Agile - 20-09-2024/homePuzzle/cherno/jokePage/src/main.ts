import './style.css'
import { jokes, formatJoke, addJoke } from './models/joke.ts'

//main
function main() 
{
  renderJokes();
  handleAddJoke();
}


export function renderJokes(): void
{
  try
  {
    const jokesElement = document.querySelector<HTMLUListElement>('#jokeList');
    if (!jokesElement) throw new Error('jokeListElement not found')
    
    jokesElement.innerHTML = ''; 
    jokes.map(joke => formatJoke(jokesElement, joke));
  }
  catch (error)
  {
    console.error(error);
  }
}

function handleAddJoke(): void
{
  try
  {
    const input = document.getElementById('jokeInput') as HTMLInputElement;
    if (!input) throw new Error('jokeInput not found');

    input.addEventListener('keyup', (event: KeyboardEvent) =>
    {
      if (event.key === 'Enter')
      {
        if (input.value.trim() === '') return;
        addJoke(input.value);
        input.value = '';
        renderJokes();
      }
    });

  }
  catch (error)
  {
    console.error(error);
  }
}



main();