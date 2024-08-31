interface navbar{
    name: string;
}

const navbarList: navbar[] = [
    {name: 'Mobile/Handheld'},
    {name: 'Laptops'},
    {name: 'Display/Desktops'},
    {name: 'Motherbords/Componens'},
    {name: 'Newwork/Lot/Servers'},
    {name: 'Accessories'}
]

console.log(navbarList);

function displayNavbar(){
    try{
        const navbar = document.querySelector('#navbar') as HTMLElement;
        if(!navbar) throw new Error('No such element');

         // const x = document.querySelector(`#navbar`) as HTMLElement;
        // x.style.display = "block";

        navbarList.forEach(item => {
            const navbarItem = document.createElement('div');
            navbarItem.innerHTML = `
            <a href="#">${item.name}</a>
            `;
            navbar.appendChild(navbarItem);
            navbarItem.classList.add('nav-item');

    })
      
;
    }
    catch(error){
        console.error(error);
    }
}
displayNavbar();