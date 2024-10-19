import './main.scss';
import { renderSideBar } from './view/components/sideBar/sideBar';
import { renderHeader } from './view/components/header/header';
import { navigation } from './controllers/pageNavigator';

document.querySelector<HTMLDivElement>('#header')!.innerHTML = renderHeader();
document.querySelector<HTMLDivElement>('#sidebar')!.innerHTML = renderSideBar();

document.querySelector<HTMLDivElement>('#pageNavigation')!.innerHTML = navigation();