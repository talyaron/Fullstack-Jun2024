interface Item {
    img: string;
    name: string;
    price: number;
    id: string;
}

function createItem(img: string, name: string, price: number):Item {
    const id =  crypto.randomUUID();
    return {img: img, name: name, price: price, id: id};
}

const storeItems: Item[] = [];

storeItems.push(createItem("https://media.crocs.com/images/f_auto,q_auto,dpr_auto/w_768/products/2024_S1_Self-Expressions-Seasonal-Tints_Global-Creative_Ecomm_GLBL_Onsite-category-card-dreamscape-colorway.png/Crocs", "Crocs", 150));
storeItems.push(createItem("https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e48bdf3-5ef4-4e25-8208-a84ec255c656/NIKE+DUNK+LOW+RETRO+SE.png", "Nike", 250));
storeItems.push(createItem("https://m.media-amazon.com/images/I/71fYWsU2SML._AC_UY900_.jpg", "Baby Shoes", 100));
storeItems.push(createItem("", "AllStars", 220));


function renderItems(): void {
    try {
        const itemsElement = document.querySelector("#storeItems") as HTMLElement;
        if (!itemsElement) throw new Error("Could not find store items element");
    
        storeItems.forEach((item => {
            const itemElement = document.createElement("div");

            itemElement.innerHTML = `
            <img src="${item.img}" />
            <h2>${item.name}</h2>
            <h3>${item.price}$</h3>
            `

            itemElement.classList.add("storeItem");
            itemsElement.appendChild(itemElement);
        }));
    } catch (e) {
        console.error(e);
    }
};

renderItems();

