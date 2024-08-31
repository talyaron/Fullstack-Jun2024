interface navbar{
    name: string;
}

interface Computer{
    id: number;
    name: string;
    price: number;
    sale: boolean;
    img: string;
}

const navbarList: navbar[] = [
    {name: 'Mobile/Handheld'},
    {name: 'Laptops'},
    {name: 'Display/Desktops'},
    {name: 'Motherbords/Componens'},
    {name: 'Newwork/Lot/Servers'},
    {name: 'Accessories'}
]

const Computers : Computer[] = [
    {id: 1, name: 'ASUS TUF Gaming F15', price: 1200, sale: false, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'},
    {id: 2, name: 'ASUS ROG Strix G535', price: 1500, sale: true, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'},
    {id: 3, name: 'ASUS ZenBook Pro Duo', price: 1000, sale: false, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'},
    {id: 4, name: 'ASUS ZenBook Flip C', price: 1300, sale: true, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
    {id: 5, name: 'MSI Laptop Turbo', price: 900, sale: true, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
    {id: 6, name: 'Acer Aspire 5', price: 700, sale: false, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
    {id: 7, name: 'HP Spectre x360', price: 1100, sale: false, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
    {id: 8, name: 'Lenovo Ideapad 5', price: 800, sale: false, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
    {id: 9, name: 'Dell 2025', price: 900, sale:true, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
    {id: 10, name: 'Lenovo Ideapad 7', price: 1000, sale: false, img:'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'}
]

function displayComputers() {
    try{
        const comp_item = document.querySelector('#computers') as HTMLElement;
        if(!comp_item) throw new Error('No such element');

        Computers.forEach(new_computer => {
            const computerItem = document.createElement('div')
            comp_item.innerHTML = 
            `
            <h1>Computer ${new_computer.name}
            <p>the ID is ${new_computer.id}</p>
            <h2>Price: $${new_computer.price}</h2>
            <p>Sale: ${new_computer.sale? 'Yes' : 'No'}</p>
            <img src="${new_computer.img}" />
            `
            comp_item.appendChild(computerItem);
            computerItem.classList.add('computer-item');
        })
    }
    catch(error){
        console.error(error);
    }

}

console.log(navbarList);

function displayNavbar(){
    try{
        const navbar = document.querySelector('#navbar') as HTMLElement;
        if(!navbar) throw new Error('No such element');

         // const x = document.querySelector(`#navbar`) as HTMLElement;
        // x.style.display = "block";
        const asus_img = document.createElement('img');
        asus_img.src = 'https://www.freepnglogos.com/uploads/logo-asus-png/asus-logo-hd-photo-15.png'
        navbar.appendChild(asus_img);
        navbar.classList.add('img_navbar');


        navbarList.forEach(item => {
            const navbarItem = document.createElement('div');
            navbarItem.innerHTML = `
            <a href="https://www.asus.com/">${item.name}</a>`;
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
displayComputers();