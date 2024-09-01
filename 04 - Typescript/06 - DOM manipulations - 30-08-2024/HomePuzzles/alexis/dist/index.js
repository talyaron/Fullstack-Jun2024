// - Implement a menu structure similar to the Asus website.
// - Use TypeScript to define the menu items and their structure.
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
function renderProducts() {
    try {
        var computerElement = document.querySelector("#computers");
        if (!computerElement)
            throw new Error();
        computers.forEach(function (computer) {
            var computerElement = document.createElement('article');
            computerElement.innerHTML =
                "\n        <h1>" + computer.name + "</h1>\n        <h1>" + computer.name + "</h1>\n        <h1>" + computer.name + "</h1>\n        <h1>" + computer.name + "</h1>\n        \n        \n        ";
        });
    }
    catch (error) {
        return error;
    }
}
renderProducts();
// ### 3. Sale Items Feature
// - Display a 'Sale' badge on the computers that are on sale.
function sale(computers) {
    var sale = computers.filter(function (computers) { return computers.sale === true; });
    console.log(sale);
    return sale;
}
sale(computers);
