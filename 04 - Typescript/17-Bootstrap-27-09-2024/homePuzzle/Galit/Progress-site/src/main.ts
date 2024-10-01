import { renderAboutContent, GameController,  NotesController } from './controllers/controller.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GameModel , NoteModel} from './model/model.ts';
import { GameView, NotesView  } from './view/view.ts';




///////// ABOUT /////////
document.addEventListener('DOMContentLoaded', () => {
  renderAboutContent();
});

///////// NOTES /////////


document.addEventListener('DOMContentLoaded', () => {
  console.log("Initializing the Notes App");
  const noteModel = new NoteModel();
  const notesView = new NotesView();
  new NotesController(noteModel, notesView);
});

///////// GAME /////////
document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('game-container') as HTMLElement;

  if (!gameContainer) {
    throw new Error('Game container not found');
  }

  const containerWidth = gameContainer.offsetWidth;
  const model = new GameModel();
  const view = new GameView('game-image'); 
  new GameController(model, view, containerWidth);
});



