//models
var menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Puzzles', url: '/puzzles' },
    { name: 'Tal', url: '/tal' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' }
];
//views
function renderMenuItem(menuItem) {
    return "<a href=\"" + menuItem.url + "\">" + menuItem.name + "</a>";
}
function renderMenu(menuItems) {
    return menuItems.map(renderMenuItem).join('');
}
console.log(renderMenu(menuItems));
//controllers
function main() {
    try {
        var menu = document.querySelector('#menu');
        if (!menu)
            throw new Error('Menu not found');
        menu.innerHTML = renderMenu(menuItems);
    }
    catch (error) {
        console.error(error);
    }
}
main();
