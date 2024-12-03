interface MenuItem {
    name: string;
    url: string;
}

const menuItems: MenuItem[] = [
    { name: "Mobile / Handhelds", url: "#" },
    { name: "Laptops", url: "#" },
    { name: "Displays / Desktop", url: "#" },
    { name: "Motherboards / Components", url: "#" },
    { name: "Networking / IoT / Servers", url: "#" },
    { name: "Accessories", url: "#" }
];

function renderMenu(menuItems: MenuItem[]): void {
    const menuDiv = document.querySelector('#menu-container') as HTMLElement;
    menuDiv.className = 'menu';

    // Logo
    const logoDiv = document.createElement('div');
    logoDiv.className = 'menu-item';
    const logoImg = document.createElement('img');
    logoImg.id = 'logo-img';
    logoImg.src = './images/Asus-Logo-black.png';
    logoImg.alt = 'Asus Logo';
    logoDiv.appendChild(logoImg);
    menuDiv.appendChild(logoDiv);

    // Menu items
    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        const itemLink = document.createElement('a');
        itemLink.href = item.url;
        itemLink.textContent = item.name;
        itemDiv.appendChild(itemLink);
        menuDiv.appendChild(itemDiv);
    });
}

interface Computer {
    id: number;
    image: string;
    name: string;
    price: number;
    sale: boolean;
}

const Computers: Computer[] = [
    { id: 227890553, image: 'https://officejo.com/wp-content/uploads/2024/06/GU605MY-QR104W_01-1024x1024.jpg', name: 'ASUS ROG Zephyrus G16 Laptop', price: 899, sale: true },
    { id: 227896784, image: 'https://officejo.com/wp-content/uploads/2023/11/G614JV-N3111_01.jpg', name: 'ASUS ROG Strix G16 Laptop', price: 2125, sale: false },
    { id: 227423384, image: 'https://officejo.com/wp-content/uploads/2024/06/UX8406MA-PZ044W_01-1024x1024.jpg', name: 'ASUS Zenbook Duo OLED Laptop', price: 790, sale: true },
    { id: 208643383, image: 'https://officejo.com/wp-content/uploads/2023/11/K3605VC-N1177_01.jpg', name: 'ASUS Vivobook 16X Laptop', price: 1990, sale: false },
    { id: 567883383, image: 'https://officejo.com/wp-content/uploads/2024/06/G614JV-N3129_01-1024x1024.jpg', name: 'ASUS ROG Strix G16 Laptop', price: 1490, sale: true },
    { id: 567545889, image: 'https://officejo.com/wp-content/uploads/2024/06/G634JZR-N4111_04-1024x1024.jpg', name: 'ASUS ROG Strix SCAR 16 Laptop', price: 1390, sale: false },
    { id: 567883535, image: 'https://officejo.com/wp-content/uploads/2023/08/FX506HF-HN114_01-1024x1024.jpg', name: 'ASUS TUF Gaming F15 Laptop', price: 999, sale: false },
    { id: 543243556, image: 'https://officejo.com/wp-content/uploads/2022/07/VG27AQ_01.jpg', name: 'ASUS TUF Gaming VG27AQ HDR Monitor', price: 6390, sale: true }
];

function renderComputers(maxPrice?: number): void {
    const computersElement = document.querySelector('#Computers') as HTMLElement;

    computersElement.innerHTML = ''; // Clear the existing content

    const filteredComputers = maxPrice 
        ? Computers.filter(computer => computer.price < maxPrice)
        : Computers;

    filteredComputers.forEach(computer => {
        const computerElement = document.createElement('article');
        computerElement.innerHTML = `
            <h5>ID: ${computer.id}</h5>
            <img src="${computer.image}" alt="${computer.name}" />
            <h1>${computer.name}</h1>
            <h3>${computer.price}$</h3>
            <h3 class="${computer.sale ? 'sale' : ''}">${computer.sale ? 'On Sale!' : 'Regular Price'}</h3>
        `;
        computerElement.classList.add('Computer');
        computerElement.id = computer.id.toString();
        computersElement.appendChild(computerElement);
    });
}

function main(): void {
    document.addEventListener('DOMContentLoaded', () => {
        renderMenu(menuItems);

        const logoImg = document.querySelector('#logo-img') as HTMLImageElement;
        logoImg.addEventListener('mouseenter', () => {
            logoImg.src = './images/asus-logo-blue.png';
        });

        logoImg.addEventListener('mouseleave', () => {
            logoImg.src = './images/Asus-Logo-black.png';
        });

        const filterButton = document.querySelector('#filter-button') as HTMLButtonElement;
        const allComputersButton = document.querySelector('#Computers-button') as HTMLButtonElement;

        filterButton.addEventListener('click', () => {
            renderComputers(1000); 
        });

        allComputersButton.addEventListener('click', () => {
            renderComputers(); 
        });

        renderComputers(); 
    });
}

main();
