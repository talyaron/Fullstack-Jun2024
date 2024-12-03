import { renderForm } from './view.ts';
import './style.scss';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderForm();


