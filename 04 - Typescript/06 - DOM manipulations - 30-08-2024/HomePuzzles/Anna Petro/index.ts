const menu : String [] = ['Mobile / Handhelds','Laptops',
'Displays / Desktops','Motherboards / Components','Networking / IoT / Servers',
'Accessories','support']


function renderAsusSite(){
    try {
    const siteElement = document.querySelector('#store') as HTMLElement;
    const logoImage = document.createElement('img');
    logoImage.src = "./dist/images/download.png"
    logoImage.alt = "Asus logo";
    logoImage.id = 'logo'
    siteElement.appendChild(logoImage);
    if(!siteElement) throw new Error('Not found a HTML Elemnt') ;

    menu.forEach( (item) =>{
        const menuElement = document.createElement('menu');
        menuElement.innerHTML = `
        <p> ${item} </p>`;
        menuElement.classList.add('menuItems');
        siteElement.appendChild(menuElement);
    });
    } catch (error) {
        console.error(error);
    }
}

renderAsusSite();

function removeMenuItem (arr : string [],itemToRemove : string){
    const indexToRemove = arr.findIndex((item) => item === itemToRemove)
    return [...arr].slice(0,indexToRemove).concat([...arr].slice(indexToRemove+1));
}
console.log()