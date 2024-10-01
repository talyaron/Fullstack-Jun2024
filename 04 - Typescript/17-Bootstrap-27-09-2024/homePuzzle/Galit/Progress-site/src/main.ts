import { renderContent ,GameController} from './controllers/controller.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GameModel } from './model/model.ts';
import { GameView } from './view/view.ts';


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


document.addEventListener('DOMContentLoaded', () => {
  renderContent();
});
