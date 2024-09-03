interface Computer
{
    id: string;
    name: string;
    price: number;
    sale: boolean;
}

function generateComputer(name: string, price: number, sale: boolean): Computer
{
    return {id: crypto.randomUUID(), name: name, price: price, sale: sale};
}

function renderNav(logo: string, elements: string[])
{
    try
    {
    const nav = document.querySelector('#navBar') as HTMLElement;
    if (!nav) throw new Error('couldnt find nav');

    const navLogo = document.createElement('img');
    navLogo.setAttribute('src', logo);

    navLogo.classList.add('nav_element');
    nav.appendChild(navLogo);


    elements.forEach(element =>
    {
        const navElement = document.createElement('a');
        navElement.textContent = element;

        navElement.classList.add('nav_element');
        nav.appendChild(navElement);
    });
    }

    catch (e)
    {
        console.error(e)
    }
}

function renderListing(computers: Computer[])
{
    try
    {
        const listingElement = document.querySelector('#listing') as HTMLElement;
        if (!listingElement) throw new Error('could not find listing element');

        computers = computers.filter(computer => computer.price < 1000)
        computers.forEach(computer =>
        {
            const computerElement = document.createElement('article');
            
            computerElement.innerHTML = `
            <h2>${computer.name}</h2>
            <h3>${computer.price}$</h3>
            <footer id="saleAd">on sale!</footer>
            `;

            const footer = computerElement.querySelector('#saleAd') as HTMLElement;
            if (!computer.sale) footer.style.display = 'none';  

            computerElement.classList.add('listing__computer');
            computerElement.id = computer.id;
            listingElement.appendChild(computerElement);
        });
    }
    catch (e)
    {
        console.log(e);
    }
}

function renderSales(computers: Computer[])
{
    try
    {
        const salesElement = document.querySelector('#sales') as HTMLElement;
        if (!salesElement) throw new Error('could not find listing element');

        computers = computers.filter(computer => computer.sale)
        computers.forEach(computer =>
        {
            const computerElement = document.createElement('article');
            
            computerElement.innerHTML = `
            <h2>${computer.name}</h2>
            <h3>${computer.price}$</h3>
            <footer id="saleAd">on sale!</footer>
            `;
            
            computerElement.classList.add('sales__computer');
            computerElement.id = computer.id;
            salesElement.appendChild(computerElement);
        });
    }
    catch (e)
    {
        console.log(e);
    }
}

function main()
{
    const logo: string = 'logo.png';
    const navElements: string[] = ['Mobile/Handhelds', 'Laptops', 'Displays/Desktops', 'MotherBoards/Components', 'Networking/IoT/Servers', 'Accessories'];

    renderNav(logo, navElements);

    const computers: Computer[] = [];
    computers.push(generateComputer('Vivobook 15', 2000, false));
    computers.push(generateComputer('Vivobook 14', 1500, true));
    computers.push(generateComputer('Vivobook 13', 800, false));
    computers.push(generateComputer('TUF Gaming', 3000, true));
    computers.push(generateComputer('X515MA', 600, true));
    computers.push(generateComputer('ZenBook Pro 14', 2500, false));
    computers.push(generateComputer('ROG Strix G15', 3200, true));
    computers.push(generateComputer('ExpertBook B9', 1800, false));
    computers.push(generateComputer('Chromebook Flip', 700, true));
    computers.push(generateComputer('ProArt StudioBook 16', 3500, true));

    renderListing(computers);
    renderSales(computers);
}

main();