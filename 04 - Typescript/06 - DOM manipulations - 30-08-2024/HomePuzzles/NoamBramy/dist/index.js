var navbar = [];
navbar.push(AddMenu("Home", "#"));
navbar.push(AddMenu("Products", "#"));
navbar.push(AddMenu("About Us", "#"));
navbar.push(AddMenu("Contact Us", "#"));
function AddMenu(title, link) {
    return { id: crypto.randomUUID(), title: title, link: link };
}
function renderMenu() {
    try {
        var navbarElement = document.querySelector("#navbar");
        if (!navbarElement)
            throw new Error("Invalid navbar Element");
        var ulElement_1 = document.createElement("ul");
        navbar.forEach(function (item) {
            var liElement = document.createElement("li");
            var aElement = document.createElement("a");
            aElement.textContent = item.title;
            aElement.href = item.link;
            liElement.appendChild(aElement);
            ulElement_1.appendChild(liElement);
        });
        navbarElement.appendChild(ulElement_1);
    }
    catch (e) {
        console.error(e);
    }
}
var computers = [];
function addComputer(name, image, price, sale) {
    return { id: crypto.randomUUID(), name: name, image: image, price: price, sale: sale };
}
computers.push(addComputer("Black Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 799.9, true));
computers.push(addComputer("Reality XSeries", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 399.9, false));
computers.push(addComputer("Light ZSeries", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 800.9, true));
computers.push(addComputer("Purple Z", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 255.9, false));
computers.push(addComputer("Insane Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 455.9, true));
computers.push(addComputer("Insane Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 1255.9, true));
computers.push(addComputer("Insane Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 1155.9, true));
computers.push(addComputer("Insane Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 1755.9, true));
computers.push(addComputer("Insane Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 1255.9, true));
computers.push(addComputer("Insane Series", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU", 1455.9, true));
function renderComputer() {
    try {
        var ComputerElement_1 = document.querySelector("#computers");
        if (!ComputerElement_1)
            throw new Error("Computers Element Not Found.");
        computers.forEach(function (computer) {
            if (computer.price <= 1000) {
                var divElement = document.createElement("div");
                if (computer.sale === true) {
                    divElement.innerHTML = "<h2> " + computer.name + " </h2>\n      <img src=\"" + computer.image + "\" alt=\"" + computer.name + "\">\n      <p> Price: " + computer.price + "$ </p>\n      <button> Buy Now </button>\n      <p class=\"sale\"> Sale </p> ";
                }
                else {
                    divElement.innerHTML = "\n      <h2> " + computer.name + " </h2>\n      <img src=\"" + computer.image + "\" alt=\"" + computer.name + "\">\n      <p> Price: " + computer.price + "$ </p>\n      <button> Buy Now </button>\n      ";
                }
                divElement.classList.add("computer");
                divElement.id = computer.id;
                ComputerElement_1.appendChild(divElement);
            }
        });
    }
    catch (e) {
        console.error(e);
    }
}
renderComputer();
renderMenu();
