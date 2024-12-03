import './header.scss'
export function renderHeader(): string
{
    return `
    <header>
         <input id="search-bar" class="search-bar" type="text" placeholder="search">
         <img class="user-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"> 
    </header>
    `
}