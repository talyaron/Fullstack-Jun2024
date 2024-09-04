interface Nav{
    name:string;
}

interface Computers{
    name:string;
    price:number;
    id:number;
    sale:boolean;
}


const computers:Computers []= [
    {
        name: ' asus screen 1920*1490 ',
        price: 1480,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 1700*1500 ',
        price: 1100,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 1600*1250 ',
        price: 1200,
        id: 1298,
        sale: false,
    },
    {
        name: ' asus screen 1200*800 ',
        price: 900,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 1100*600 ',
        price: 700,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 1000*500 ',
        price: 600,
        id: 1298,
        sale: false,
    },
    {
        name: ' asus screen 1920*1490 ',
        price: 1700,
        id: 1298,
        sale: false,
    },
    {
        name: ' asus screen 1600*1100 ',
        price: 999,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 890*600 ',
        price: 400,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 3000*1490 ',
        price: 1900,
        id: 1298,
        sale: false,
    },
]

const navbar:Nav[]= [
    {
        name:'allcomputer',
    },
    {
        name:'computers',
    },
    {
        name:'phones',
    },
    {
        name:'tablet',
    },
    {
        name:'screen',
    },
]


function navbarSelectId () :void{
    const navbarItems = document.querySelector ('#navbar') as HTMLElement
try{
    if (!navbarSelectId) throw new Error("could not found");

    navbar.forEach(item =>{
        const menuList = document.createElement('div');

        menuList.innerHTML = 
        ` <a>${item.name}`;

        menuList.classList.add("navlist");
        navbarItems.appendChild(menuList);

    });

}catch(e){
    console.error(e);
}

}

function computersSelcetId () :void{
    const computersItem = document.querySelector ('#computers') as HTMLElement
try{
    if (!computersSelcetId) throw new Error("could not found");

    computers.forEach(itemComp =>{
        const computersList = document.createElement ('div');
        if (itemComp.price <= 1000 && itemComp.sale){

            computersList.innerHTML = 
            `<h1> ${itemComp.name}</h1>,
            <h2> ${itemComp.price}</h2>
            <button> ' show more ' </button>
            <img src= "https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_UF1000,1000_QL80_.jpg">
            `
        }
        
        
        computersList.classList.add("computer_list");
        computersItem.appendChild(computersList);

    })

}catch(e){
    console.error(e);
}

}

computersSelcetId ();
navbarSelectId();
