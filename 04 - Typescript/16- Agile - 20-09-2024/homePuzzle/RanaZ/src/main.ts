
import './style.css';
import { jokes } from './view/view.ts';

// Function to render jokes to the DOM
function renderJokes() {
  const jokeList = document.querySelector<HTMLUListElement>('#joke-list');
  if (!jokeList) return;

  jokeList.innerHTML = ''; 

  jokes.forEach(joke => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${joke.text}
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    
    const editBtn = li.querySelector('.edit-btn');
    editBtn?.addEventListener('click', () => {
      const newText = prompt('Edit your joke:', joke.text);
      if (newText) {
        joke.text = newText;
        renderJokes();
      }
    });

    // Delete button functionality
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn?.addEventListener('click', () => {
      const index = jokes.indexOf(joke);
      jokes.splice(index, 1); // Remove the joke from the array
      renderJokes(); // Re-render after deletion
    });

    jokeList.appendChild(li); // Add the joke to the list
  });
}

// Function to handle adding a new joke
function handleAddJoke(event: Event) {
  event.preventDefault();
  const input = document.querySelector<HTMLInputElement>('#new-joke');
  if (input && input.value.trim()) {
    const newJoke = {
      id: jokes.length + 1,
      text: input.value.trim(),
    };
    jokes.push(newJoke); // Add the new joke to the array
    input.value = ''; // Clear input field
    renderJokes(); // Re-render with the new joke
  }
}


const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  app.innerHTML = `
    <h1>Joke App</h1>
    <form id="joke-form">
      <input type="text" id="new-joke" placeholder="Enter a new joke" required />
      <button type="submit">Add Joke</button>
    </form>
    <ul id="joke-list"></ul>
  `;

  // Attach event listener to form submission
  const form = document.querySelector<HTMLFormElement>('#joke-form');
  form?.addEventListener('submit', handleAddJoke);

  
  renderJokes();
}

