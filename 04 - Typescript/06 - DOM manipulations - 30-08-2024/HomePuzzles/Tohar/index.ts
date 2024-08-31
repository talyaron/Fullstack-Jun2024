interface navbar {
    name: string;
}

const navbar:navbar[] = [
    {name: "Mobile/Handhelds"},
    {name: "Laptops"},
    {name: "Displays/Desktops"},
    {name: "Motherboards/Components"},
    {name: "Networking/Iot/Servers"},
    {name: "Networking/Accessories"},
];

function renderNavbar():void {
    try {
        const navbarElement = document.querySelector("#navbar") as HTMLElement;
        if (!navbarElement) throw new Error("Could not find store navbar element");

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


renderNavbar();