interface Nav {
    name: string;
    link: string;
}

interface Computers {
    name: string;
    price: number;
    id: number;
    sale: boolean;
}


const computers: Computers[] = [
    {
        name: ' asus screen 1920*1490 ',
        price: 1480,
        id: 1298,
        sale: true,
    },
    {
        name: ' asus screen 1700*1500 ',
        price: 1100,
        id: 1254,
        sale: true,
    },
    {
        name: ' asus screen 1600*1250 ',
        price: 1200,
        id: 78967864,
        sale: false,
    },
    {
        name: ' asus screen 1200*800 ',
        price: 900,
        id: 868456645,
        sale: true,
    },
    {
        name: ' asus screen 1100*600 ',
        price: 700,
        id: 456786783,
        sale: true,
    },
    {
        name: ' asus screen 1000*500 ',
        price: 600,
        id: 48646456776,
        sale: false,
    },
    {
        name: ' asus screen 1920*1490 ',
        price: 1700,
        id: 6456345646,
        sale: false,
    },
    {
        name: ' asus screen 1600*1100 ',
        price: 999,
        id: 87634534345,
        sale: true,
    },
    {
        name: ' asus screen 890*600 ',
        price: 400,
        id: 456456456,
        sale: true,
    },
    {
        name: ' asus screen 3000*1490 ',
        price: 1900,
        id: 48645645,
        sale: false,
    },
]

const navbar: Nav[] = [
    {
        name: 'allcomputer',
        link: '/all-computers'
    },
    {
        name: 'computers',
        link: '/computers'
    },
    {
        name: 'phones',
        link: '/phones'
    },
    {
        name: 'tablet',
        link: '/tablet'
    },
    {
        name: 'screen',
        link: '/screen'
    },
]

//view
function renderNav(): void {
    try {
        const navbarItems = document.querySelector('#navbar') as HTMLElement
        if (!navbarItems) throw new Error("could not found");

        navbar.forEach(item => {
            const navItem = document.createElement('div');

            navItem.innerHTML =
                `<a href="${item.link}">${item.name}</a>`;

            navItem.classList.add("nav-item");
            navbarItems.appendChild(navItem);

        });

    } catch (e) {
        console.error(e);
    }

}
renderNav();

function renderComputers(): void {
    const computersItem = document.querySelector('#computers') as HTMLElement
    try {
        if (!computersItem) throw new Error("could not found");

        computers.forEach(itemComp => {
            const computerItem = document.createElement('div');
            if (itemComp.price <= 1000 && itemComp.sale) {

                computerItem.innerHTML =
                    ` <div class="computer-item__info">
                <div class="computer-item__title"> ${itemComp.name}</div>
            <div class="computer-item__price">$${itemComp.price}</div>
            <button>show more</button>
            </div>
            <img src= "https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_UF1000,1000_QL80_.jpg">
            ${itemComp.sale === true ? "<div class='sale'>On Sale </div>" : ""}
            `
            }


            computerItem.classList.add("computer-item");
            computersItem.appendChild(computerItem);

        })

    } catch (e) {
        console.error(e);
    }

}

renderComputers();
// navbarSelectId();
