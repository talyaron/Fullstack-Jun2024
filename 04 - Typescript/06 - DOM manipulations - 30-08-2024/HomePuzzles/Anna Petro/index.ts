interface Computer {
    id : string;
    name: string;
    price: number;
    sale: boolean;
    imageUrl : string;
}

const computers : Computer [] = [
    {
        id: "1",
        name: 'ASUS Zenbook 14 OLED UX3402ZA',
        price: 1299,
        sale: true,
        imageUrl: 'https://example.com/zenbook-14-oled.jpg'
      },
      {
        id: "2",
        name: 'ASUS Vivobook Pro 16X OLED',
        price: 1599,
        sale: false,
        imageUrl: 'https://example.com/vivobook-pro-16x-oled.jpg'
      },
      {
        id: "3",
        name: 'ASUS TUF Dash F15',
        price: 999,
        sale: true,
        imageUrl: 'https://example.com/tuf-dash-f15.jpg'
      },
      {
        id: "4",
        name: 'ASUS Zenbook Pro Duo 17',
        price: 2499,
        sale: false,
        imageUrl: 'https://example.com/zenbook-pro-duo-17.jpg'
      },
      {
        id: "5",
        name: 'ASUS Chromebook Flip CX5',
        price: 499,
        sale: true,
        imageUrl: 'https://example.com/chromebook-flip-cx5.jpg'
      },
      {
        id: "6",
        name: 'ASUS ROG Strix Helios',
        price: 299,
        sale: false,
        imageUrl: 'https://example.com/rog-strix-helios.jpg'
      },
      {
        id: "7",
        name: 'ASUS ProArt Station D700',
        price: 2999,
        sale: true,
        imageUrl: 'https://example.com/proart-station-d700.jpg'
      },
      {
        id: "8",
        name: 'ASUS VivoMini VC66',
        price: 399,
        sale: false,
        imageUrl: 'https://example.com/vivomini-vc66.jpg'
      },
      {
        id: "9",
        name: 'ASUS Mini PC ProArt PA90',
        price: 699,
        sale: true,
        imageUrl: 'https://example.com/mini-pc-proart-pa90.jpg'
      },
      {
        id: "10",
        name: 'ASUS Zen AiO 27',
        price: 1499,
        sale: false,
        imageUrl: 'https://example.com/zen-aio-27.jpg'
      }
]

const menu : String [] = ['Mobile / Handhelds','Laptops',
'Displays / Desktops','Motherboards / Components','Networking / IoT / Servers',
'Accessories','support']

function changeImgUrl(arr : Computer [], newUrl : string){
    arr.forEach((computer) => computer.imageUrl = newUrl);
}
function changeID (arr : Computer []){
    arr.forEach((computer) => computer.id = 'id'+crypto.randomUUID());
}

function renderAsusMenu(){
    try {
    const siteElement = document.getElementById('store') as HTMLElement;
    if(!siteElement) throw new Error('Not found a HTML Elemnt') ;
    const menuElement = document.createElement('menu'); // create div call menu element inside store (body) element
    menuElement.classList.add('navBar');
    siteElement.appendChild(menuElement);
    const logoImage = document.createElement('img'); // create an image element for the asus logo
    logoImage.src = "./dist/images/download.png" // give a details for img element 
    logoImage.alt = "Asus logo";
    //logoImage.id = 'logo'
    menuElement.appendChild(logoImage); // insert logo image element inside menu element
    menu.forEach( (item) =>{ // create element to any menu option 
        const menuOption = document.createElement('option');
        menuOption.innerHTML = `
        <p> ${item} </p>`;
        menuOption.classList.add('menuItems');
        menuElement.appendChild(menuOption); // insert the menu option to menu element
    });
    } catch (error) {
        console.error(error);
    }
}

function renderAsusProfduct (arr : Computer []){
    try {
        const siteElement = document.getElementById('store') as HTMLElement;
        if(!siteElement) throw new Error('Not Found an element');
        const productList = document.createElement('list'); // add a list element that will have all computers elements
        productList.classList.add('list');
        siteElement.appendChild(productList);// insert list element inside store element
        arr.forEach((computers) => {
            if(computers.price <= 1000 ){
            const computer = document.createElement('computer'); // create an element for each computer
            computer.innerHTML = `
            <img src = ${computers.imageUrl} /> <br>
            <p id='id'> ID: ${computers.id} </p> 
            <p> Price: ${computers.price} </p>`;
            if(computers.sale === true){
                computer.innerHTML=` <img src = ${computers.imageUrl} /> <br>
            <p id='id'> ID: ${computers.id} </p> 
            <p> Price: ${computers.price} </p><p id='Sale'> Sale: ${computers.sale} </p>`;
            }
            computer.classList.add('computerInfo');// add class name computerInfo to computer element
            productList.appendChild(computer);// insert computer elemnt into list element 
            }
        })
    } catch (error) {
        
    }
}


function main(){
    changeImgUrl(computers,"./dist/images/macbook.png");
    changeID(computers);
    renderAsusMenu();
    renderAsusProfduct(computers);
}

main();