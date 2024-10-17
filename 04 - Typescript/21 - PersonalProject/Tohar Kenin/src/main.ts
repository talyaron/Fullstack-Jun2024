import './main.scss';
import { renderSideBar } from './view/components/sideBar/sideBar';
import { renderHeader } from './view/components/header/header';

document.querySelector<HTMLDivElement>('#header')!.innerHTML = renderHeader();
document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = renderSideBar();

