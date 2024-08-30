function createItem(img, name, price) {
    var id = crypto.randomUUID();
    return { img: img, name: name, price: price, id: id };
}
var storeItems = [];
storeItems.push(createItem("", "", 20));
storeItems.push(createItem("", "", 20));
storeItems.push(createItem("", "", 20));
storeItems.push(createItem("", "", 20));
function renderItems() {
    try {
        var itemsElement = document.querySelector("#storeItems");
        if (!itemsElement)
            throw new Error("Could not find store items element");
        storeItems.forEach((function (item) {
            var itemElement = document.createElement("div");
            itemElement.innerHTML = "\n            <img src=\"" + item.img + "\" />\n            <h2>" + item.name + "</h2>\n            <h3>" + item.price + "</h3>\n            ";
            itemElement.classList.add("storeItem");
        }));
    }
    finally {
    }
}
