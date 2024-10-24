import './sideBar.scss'
import logo from '../../../assets/logo.png';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faToolbox, faDisplay, faListCheck, faChartPie } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faToolbox, faDisplay, faListCheck, faChartPie);
dom.watch();

export function renderSideBar(): string {

    return `
    <aside>
        <div id="logo" class="logo">
            <img src=${logo} class="logo__img" alt="logo-image">
            <h1 class="logo__name">Online Academy</h1>
        </div>
            <div class="menu">
                <a href="?dashboardParam=dashboard" class="menu-item" data-target="dashboard">
                    <i class="fa-solid fa-home"></i>
                    <h3 class="menu-item__text dashboard">Dashboard</h3>
                </a>
                <a href="?coursesParam=courses" class="menu-item" data-target="courses">
                   <i class="fa-solid fa-toolbox"></i>
                    <h3 class="menu-item__text courses">Courses</h3>
                </a>
                <div href="#" class="menu-item" data-target="log">
                    <i class="fa-solid fa-display"></i>
                    <h3 class="menu-item__text" log>Zoom</h1>
                </div>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-list-check"></i>
                    <h3 class="menu-item__text">Forum</h1>
                </a>
                <a href="#" class="menu-item">
                    <i class="fa-solid fa-chart-pie"></i>
                    <h3 class="menu-item__text">My Progress</h1>
                </a>
        
            </div>
    </aside>
    `
}