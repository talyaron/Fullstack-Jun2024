function createItem(img, name, price) {
    var id = crypto.randomUUID();
    return { img: img, name: name, price: price, id: id };
}
var storeItems = [];
storeItems.push(createItem("https://media.crocs.com/images/f_auto,q_auto,dpr_auto/w_768/products/2024_S1_Self-Expressions-Seasonal-Tints_Global-Creative_Ecomm_GLBL_Onsite-category-card-dreamscape-colorway.png/Crocs", "Crocs", 150));
storeItems.push(createItem("https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e48bdf3-5ef4-4e25-8208-a84ec255c656/NIKE+DUNK+LOW+RETRO+SE.png", "Nike", 250));
storeItems.push(createItem("https://m.media-amazon.com/images/I/71fYWsU2SML._AC_UY900_.jpg", "Baby Shoes", 100));
storeItems.push(createItem("", "AllStars", 220));
function renderItems() {
    try {
        var itemsElement_1 = document.querySelector("#storeItems");
        if (!itemsElement_1)
            throw new Error("Could not find store items element");
        storeItems.forEach((function (item) {
            var itemElement = document.createElement("div");
            itemElement.innerHTML = "\n            <img src=\"" + item.img + "\" />\n            <h2>" + item.name + "</h2>\n            <h3>" + item.price + "$</h3>\n            ";
            itemElement.classList.add("storeItem");
            itemsElement_1.appendChild(itemElement);
        }));
    }
    catch (e) {
        console.error(e);
    }
}
;
renderItems();
