import './style.css';
import { renderJokes } from './counter';
import { jokes } from './models/model';

const jokesListElement = document.getElementById('jokes-list');

if (jokesListElement) {
  renderJokes(jokesListElement, jokes);
}