var randomSale = function () { return Math.random() > 0.5; };
function createListing(name, image, price) {
    return { id: crypto.randomUUID(), name: name, image: image, price: price, sale: randomSale() };
}
// Generate a list of 10 computers with varying prices and sale statuses
var computers = [];
computers.push(createListing(" ZenBook 14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 1745));
computers.push(createListing("ROG Zephyrus G14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 745));
computers.push(createListing("VivoBook 15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 1055));
computers.push(createListing("TUF Gaming A15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 799));
computers.push(createListing(" ZenBook Flip 14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 1152));
computers.push(createListing(" ExpertBook B9", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 860));
computers.push(createListing("ROG Strix Scar 15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 450));
computers.push(createListing("ZenBook Pro Duo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 355));
computers.push(createListing("Chromebook Flip C434", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 999));
computers.push(createListing(" VivoBook Pro 16X", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 780));
console.log(computers);
// Display only the computers that cost less than $1000
var lessThan1000 = computers.filter(function (computer) { return computer.price < 1000; });
console.log(lessThan1000);
function renderComputers() {
    try {
        var computersElement_1 = document.querySelector("#computers");
        if (!computersElement_1)
            throw new Error('Container not found');
        computers.forEach(function (computer) {
            var computerElement = document.createElement("article");
            computerElement.innerHTML = "\n           <img src=\"" + computer.image + "\" alt=\"" + computer.name + "\"/> \n           <h1>" + computer.name + "</h1>\n           <h3>$" + computer.price + "</h3>\n           <h5>" + computer.id + "</h5>\n           " + (computer.sale ? '<span class="sale-badge">Sale</span>' : '') + "\n        ";
            computerElement.classList.add("computer");
            computerElement.id = computer.id;
            computersElement_1.appendChild(computerElement);
        });
    }
    catch (error) {
        console.error('Error rendering computers:', error);
    }
}
renderComputers();
// Display a 'Sale' badge on the computers that are on sale
function getSaleItems(computers) {
    var saleItems = computers.filter(function (computer) { return computer.sale; });
    console.log('Sale items:', saleItems);
    return saleItems;
}
getSaleItems(computers);
