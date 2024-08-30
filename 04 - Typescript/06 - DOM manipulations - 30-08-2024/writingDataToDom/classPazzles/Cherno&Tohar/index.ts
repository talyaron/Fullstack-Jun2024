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

storeItems.push(createItem("", "", 20));
storeItems.push(createItem("", "", 20));
storeItems.push(createItem("", "", 20));
storeItems.push(createItem("", "", 20));


function renderItems(): void {
    try {
        const itemsElement = document.querySelector("#storeItems");
        if (!itemsElement) throw new Error("Could not find store items element");
    
        storeItems.forEach((item => {
            const itemElement = document.createElement("div");

            itemElement.innerHTML = `
            <img src="${item.img}" />
            <h2>${item.name}</h2>
            <h3>${item.price}</h3>
            `

            itemElement.classList.add("storeItem");
        }));
    }
}

