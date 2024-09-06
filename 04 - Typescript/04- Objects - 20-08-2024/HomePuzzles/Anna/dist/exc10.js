function getProduct() {
    try {
        var id = Number(prompt("Enter product id:"));
        var name = prompt("Enter product name:");
        var price = Number(prompt("Enter product price:"));
        if (id < 0 || !name || price < 0)
            throw new Error("Invalid input!!!");
        return {
            id: id,
            name: name,
            price: price
        };
    }
    catch (e) {
        console.error(e);
        return {
            id: 0,
            name: "",
            price: 0
        };
    }
}
function getCustomer() {
    try {
        var name = prompt("Enter customer name:");
        var address = prompt("Enter customer address:");
        if (!name || !address)
            throw new Error("Invalid input!!!");
        return {
            name: name,
            address: address
        };
    }
    catch (e) {
        console.error(e);
        return {
            name: "",
            address: ""
        };
    }
}
function createOrder(customer, product, quantity) {
    try {
        if (!customer || !product || quantity < 0)
            throw new Error("Invalid order details!!!");
        return {
            customer: customer,
            product: product,
            quantity: quantity
        };
    }
    catch (e) {
        console.error(e);
        return {
            customer: customer,
            product: product,
            quantity: 0
        };
    }
}
function calculateTotal(order) {
    return order.quantity * order.product.price;
}
function generateInvoice(order) {
    var total = calculateTotal(order);
    document.write("<b> Order: </b> <br> Customer: name:" + order.customer.name + " address:" + order.customer.address + ". <br>\n        <b> Product info: </b> id: " + order.product.id + " , name: " + order.product.name + " , price: " + order.product.price + " , quantity: " + order.quantity + "\n        <br> <b> Total: </b> " + total);
}
var customer = getCustomer();
var product = getProduct();
var quantity = Number(prompt("Enter product quantity:"));
var order = createOrder(customer, product, quantity);
generateInvoice(order);
