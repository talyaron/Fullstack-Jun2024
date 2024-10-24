import './header.scss'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

library.add( faCircleUser );
dom.watch();


export function renderHeader(): string
{
    return `
    <header>
         <input id="search-bar" class="search-bar" type="text" placeholder="search">
         <i class="fa-solid fa-circle-user"></i>
    </header>
    `
}