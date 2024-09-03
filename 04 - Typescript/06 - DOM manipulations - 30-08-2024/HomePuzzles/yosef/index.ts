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


displayNavbar();
// display_All_Computers();
// display_Computers_Down_1000$();
// display_Computers_on_sale();

document.getElementById("only_with_sale")?.addEventListener("click",display_Computers_on_sale);
document.getElementById("hide_all")?.addEventListener("click",hide_All_Computers);
document.getElementById("all_computers")?.addEventListener("click",display_All_Computers);
document.getElementById("computers_under_1000_dollars")?.addEventListener("click",display_Computers_Down_1000$)

function hide_All_Computers() {alert("asd")};


function display_All_Computers() {
    try{
        const comp_item = document.querySelector('#computers') as HTMLElement;
        if(!comp_item) throw new Error('No such element');

        Computers.forEach(new_computer => {
            const computerItem = document.createElement('div')
            computerItem.innerHTML = 
            `
            <h3>Computer ${new_computer.name}</h3>
            <h3>Price: $${new_computer.price}</h3>
            <p>ID:${new_computer.id}</p>
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

function display_Computers_Down_1000$() {
    const temp = [...Computers];
    console.log(temp);
    const array_by_price = temp.filter(x => x.price<1000)
    console.log(array_by_price);

    try{
        const comp_item = document.querySelector('#computers') as HTMLElement;
        if(!comp_item) 
            {throw new Error('No such element');}

        array_by_price.forEach(new_computer =>{
            const computerItem = document.createElement('div')
            computerItem.innerHTML = 
            `
            <h3>Computer ${new_computer.name}</h3>
            <h3>Price: $${new_computer.price}</h3>
            <p>ID:${new_computer.id}</p>
            <p>Sale: ${new_computer.sale? 'Yes' : 'No'}</p>
            <img src="${new_computer.img}" />
            `
            comp_item.appendChild(computerItem);
            computerItem.classList.add('computer-item');
        })}
        catch(error){
            console.error(error);
        }
    }

function display_Computers_on_sale() {
        const temp = [...Computers];
        console.log(temp);
        const array_by_price = temp.filter(x => x.sale)
        console.log(array_by_price);
    
        try{
            const comp_item = document.querySelector('#computers') as HTMLElement;
            if(!comp_item) 
                {throw new Error('No such element');}
    
            array_by_price.forEach(new_computer =>{
                const computerItem = document.createElement('div')
                computerItem.innerHTML = 
                `
                <h3>Computer ${new_computer.name}</h3>
                <h3>Price: $${new_computer.price}</h3>
                <p>ID:${new_computer.id}</p>
                <p>Sale: ${new_computer.sale? 'Yes' : 'No'}</p>
                <img src="${new_computer.img}" />
                `
                comp_item.appendChild(computerItem);
                computerItem.classList.add('computer-item');
            })}
            catch(error){
                console.error(error);
            }
        }
        

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