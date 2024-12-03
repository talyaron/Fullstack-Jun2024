interface navbar {
    name: string;
};

interface Computer {
    id: number
    name: string
    price: number
    sale: boolean
};

const navbar:navbar[] = [
    {name: "Mobile/Handhelds"},
    {name: "Laptops"},
    {name: "Displays/Desktops"},
    {name: "Motherboards/Components"},
    {name: "Networking/Iot/Servers"},
    {name: "Networking/Accessories"},
];

const computersList:Computer[] = [
    {id: 1, name: "Zenebook", price: 7700, sale: false},
    {id: 2, name: "Vivobook", price: 8000, sale: false},
    {id: 3, name: "Chromebook", price: 1000, sale: false},
    {id: 4, name: "ExpertBook" , price: 800, sale: true},
    {id: 5, name: "Next-Gen Console", price: 10000, sale: true},
    {id: 6, name: "TUF Gaming VG28UQL1A", price: 10000, sale: true},
    {id: 7, name: "ASUS BR1104C", price: 900, sale: false},
    {id: 8, name: "ASUS BR1100F", price: 1100, sale: true},
    {id: 9, name: "BE24EQK", price: 2500, sale: true},
    {id: 10, name: "ProArt", price: 750, sale: true},
];

function renderNavbar():void {
    try {
        const navbarElement = document.querySelector("#navbar") as HTMLElement;
        if (!navbarElement) throw new Error("Could not find navbar element");

        navbar.forEach((item => {
            const menuItem = document.createElement("div");

            menuItem.innerHTML = `
            <a>${item.name}</a>
            `

            menuItem.classList.add("navbarItem");
            navbarElement.appendChild(menuItem);
        }));
    } catch(e) {
        console.error(e);
    }
};

function renderComputersList():void {
    try {
        const computersElement = document.querySelector("#computersList") as HTMLElement;
        if (!computersElement) throw new Error("Could not find computers element!");

        computersList.forEach((computer => {
            const computerItem = document.createElement("div");
            
            if (computer.price <= 1000) {
                computerItem.innerHTML = `
                <h1>${computer.name}</h1>
                <h2>$${computer.price}</h2>
                <button>Show More</button>
            `
            if (computer.sale) {
                computerItem.innerHTML = `
                    <h1>${computer.name}</h1>
                    <h2>$${computer.price}</h2>
                    <button>Show More</button>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/016/327/494/small_2x/sale-badge-tag-3d-icon-render-illustration-png.png" />
                `
            }
        }
            
            computerItem.classList.add("navbarItem");
            computersElement.appendChild(computerItem);
            console.log(computerItem);
        }));
    } catch(e) {
        console.error(e);
    }
}

renderNavbar();
renderComputersList();

