//// 1. Book Information ////
// - createOrder: Takes a Customer, Product, and quantity, returns an Order.
var getCustomerInfo = function () {
    try {
        var name = prompt("Enter your name");
        var address = prompt("Enter your address");
        if (name && address) {
            return { name: name, address: address };
        }
        else {
            console.error("Invalid input for customer information");
            return null;
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
// Function to get product information from user input
var getProductInfo = function () {
    try {
        var id = Number(prompt("Enter product id"));
        var name = prompt("Enter product name");
        var price = Number(prompt("Enter product price"));
        if (name && !isNaN(id) && !isNaN(price)) {
            return { id: id, name: name, price: price };
        }
        else {
            console.error("Invalid input for product information");
            return null;
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
};
var createOrder = function (customer, product, quantity) {
    return {
        customer: customer,
        product: product,
        quantity: quantity
    };
};
console.log(createOrder);
// - calculateTotal: Takes an Order and returns the total price.
var calculateTotal = function (order) {
    return order.product.price * order.quantity;
};
// Function to generate a formatted invoice string
// - generateInvoice: Takes an Order and returns a formatted invoice string.
var generateInvoice = function (order) {
    var total = calculateTotal(order);
    return "\n    --- INVOICE ---\n    Customer Name: " + order.customer.name + "\n    Address: " + order.customer.address + "\n    \n    Product ID: " + order.product.id + "\n    Product Name: " + order.product.name + "\n    Price per Unit: $" + order.product.price.toFixed(2) + "\n    Quantity: " + order.quantity + "\n    \n    Total Price: $" + total.toFixed(2) + "\n    \n    Thank you for your purchase!\n    ------------------------\n    ";
};
var customer = getCustomerInfo();
var product = getProductInfo();
if (customer && product) {
    var quantity = Number(prompt("Enter the quantity"));
    if (!isNaN(quantity) && quantity > 0) {
        var order = createOrder(customer, product, quantity);
        console.log("Order created:", order);
        console.log(generateInvoice(order));
    }
    else {
        console.error("Invalid quantity");
    }
}
