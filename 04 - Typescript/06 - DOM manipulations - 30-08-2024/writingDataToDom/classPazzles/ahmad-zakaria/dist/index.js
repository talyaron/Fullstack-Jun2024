function creatgymItem(name, img, price, id) {
    return { name: name, img: img, price: price, id: crypto.randomUUID() };
}
var gymItems = [];
gymItems.push(creatgymItem("bar", "https://th.bing.com/th/id/OIP.anr18bnedjZcrBQBjEE9jgHaHb?rs=1&pid=ImgDetMain", 200, crypto.randomUUID()));
gymItems.push(creatgymItem("dumbel", "https://th.bing.com/th/id/OIP.YlSZTtlVQsq6OiTPTGyXDgHaLH?rs=1&pid=ImgDetMain", 150, crypto.randomUUID()));
gymItems.push(creatgymItem("protien", "https://th.bing.com/th/id/R.13aec0394190067558fb084ee0e2df78?rik=C83IJ%2b0NXv%2bzVA&pid=ImgRaw&r=0", 100, crypto.randomUUID()));
gymItems.push(creatgymItem("Training jerseys", "https://th.bing.com/th/id/R.075fe6f1868341e89d060ec2f3867814?rik=sKwDvSWFOwzKig&pid=ImgRaw&r=0", 65, crypto.randomUUID()));
function renderGymItem(gymItems) {
    try {
        var gymItemContainer_1 = document.querySelector("#gym-item");
        if (!gymItemContainer_1)
            throw new Error('could not find an element with the id "gymItemElement"');
        gymItems.forEach(function (gymItem) {
            var gymItemElement = document.createElement("article");
            gymItemElement.innerHTML = "\n            <h2> " + gymItem.name + "<h2>\n            <h4> " + gymItem.price + "<h4>\n            <img src =\"" + gymItem.img + "\" />\n        ";
            gymItemContainer_1.classList.add("gymItem");
            gymItemContainer_1.id = gymItem.id;
            gymItemContainer_1.appendChild(gymItemElement);
        });
    }
    catch (error) {
        console.log(error);
    }
}
renderGymItem(gymItems);
