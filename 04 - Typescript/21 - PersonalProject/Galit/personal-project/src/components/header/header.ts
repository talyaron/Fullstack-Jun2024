import './header.scss'
export function createHeader(): string
{
    return `
    <header>
        <input id="search-box" class="form-control" type="text" placeholder="search">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"> 
    </header>
    `
}