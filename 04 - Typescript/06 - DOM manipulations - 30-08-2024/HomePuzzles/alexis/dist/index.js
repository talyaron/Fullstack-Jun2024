// - Use TypeScript to define the menu items and their structure.
var menuItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Laptops",
        subMenus: [
            { title: "Zenbook", href: "/laptops" },
            { title: "Vivobook", href: "/phones" },
            { title: "Accessories", href: "/accessories" },
        ]
    },
    { title: "Mobile / Handhelds", subMenus: [
            { title: "Zenbook", href: "/laptops" },
            { title: "Vivobook", href: "/phones" },
            { title: "Accessories", href: "/accessories" },
        ], href: "/about" },
    { title: "Displays / Desktops", subMenus: [
            { title: "Zenbook", href: "/laptops" },
            { title: "Vivobook", href: "/phones" },
            { title: "Accessories", href: "/accessories" },
        ], href: "/contact" },
    { title: "Motherboards / Components", subMenus: [
            { title: "Zenbook", href: "/laptops" },
            { title: "Vivobook", href: "/phones" },
            { title: "Accessories", href: "/accessories" },
        ], href: "/contact" },
    { title: "Networking / IoT / Servers", href: "/contact" },
];
function renderNavbar() {
    var navbarElement = document.createElement("nav");
    menuItems.forEach(function (item) {
        var liElement = document.createElement("li");
        if (item.subMenus) {
            // Create a dropdown menu
            var dropdownButton = document.createElement("button");
            dropdownButton.textContent = item.title;
            dropdownButton.addEventListener("mouseenter", function () {
                var dropdownContent = liElement.querySelector("ul");
                dropdownContent.style.display = "block";
                dropdownContent.addEventListener("mouseenter", function () {
                    dropdownContent.style.display = "block";
                });
            });
            dropdownButton.addEventListener("mouseleave", function () {
                var dropdownContent = liElement.querySelector("ul");
                dropdownContent.style.display = "none";
                dropdownContent === null || dropdownContent === void 0 ? void 0 : dropdownContent.addEventListener("mouseleave", function () {
                    dropdownContent.style.display = "none";
                });
            });
            var dropdownContent_1 = document.createElement("ul");
            item.subMenus.forEach(function (subItem) {
                var subMenuItem = document.createElement("li");
                subMenuItem.innerHTML = "<a href=\"" + subItem.href + "\">" + subItem.title + "</a>";
                dropdownContent_1.appendChild(subMenuItem);
            });
            liElement.appendChild(dropdownButton);
            liElement.appendChild(dropdownContent_1);
        }
        else {
            // Create a simple menu item
            liElement.innerHTML = "<a href=\"" + item.href + "\">" + item.title + ", " + item.logo + "</a>";
        }
        navbarElement.appendChild(liElement);
    });
    document.body.appendChild(navbarElement);
}
renderNavbar();
// - Generate a list of 10 computers with varying prices
// and sale statuses.
var randomSale = function () { return Math.random() > 0.5; };
function createListing(name, image, price) {
    return { id: crypto.randomUUID(), name: name, image: image, price: price, sale: randomSale() };
}
var computers = [];
computers.push(createListing("Zenbook Fold", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20220713111305/P_setting_xxx_0_90_end_185.png?webp", 1745));
computers.push(createListing("Zenbook 15", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 745));
computers.push(createListing("Zenbook Duo", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210107110320/P_setting_xxx_0_90_end_185.png?webp", 1055));
computers.push(createListing("Zenbook Pro", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 799));
computers.push(createListing("Zenbook Flip", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103628/P_setting_xxx_0_90_end_185.png?webp", 1152));
computers.push(createListing("Vivobook", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 860));
computers.push(createListing("Vivobook", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 450));
computers.push(createListing("Vivobook", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 355));
computers.push(createListing("Vivobook", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 999));
computers.push(createListing("Vivobook", "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp", 780));
console.log(computers);
// - Display only the computers that cost less than $1000.
var lessThan1000 = computers.filter(function (computers) { return computers.price < 1000; });
console.log(lessThan1000);
function renderComputers() {
    try {
        var computersElement_1 = document.querySelector("#computers");
        if (!computersElement_1)
            throw new Error();
        computers.forEach(function (computer) {
            var computerElement = document.createElement("article");
            computerElement.innerHTML = "\n         <img src =\"" + computer.image + "\"alt=\"" + computer.name + "\"/> \n         <h1>" + computer.name + "</h1>\n         <h3>" + computer.price + "</h3>\n         <h5>" + computer.id + "</h5>\n         <h5>" + computer.sale + "</h5>\n        ";
            computerElement.classList.add("computer");
            computerElement.id = computer.id;
            computersElement_1.appendChild(computerElement);
        });
    }
    catch (error) {
        return error;
    }
}
renderComputers();
// ### 3. Sale Items Feature
// - Display a 'Sale' badge on the computers that are on sale.
function sale(computers) {
    var sale = computers.filter(function (computers) { return computers.sale === true; });
    console.log(sale);
    return sale;
}
sale(computers);
