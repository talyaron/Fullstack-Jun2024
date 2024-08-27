var customer1 = {
    name: "yonatan",
    address: "spiglman 27"
};
var product1 = {
    name: "xBox",
    id: "12345",
    price: 2500
};
function createOrder(product, customer, quantity) {
    var order = {
        customer: customer,
        product: product,
        quantity: quantity
    };
    return order;
}
function calculateTotal(order) {
    var product = order.product;
    var sum = order.quantity * product.price;
    return sum;
}
var x = createOrder(product1, customer1, 5);
console.log(x);
var y = calculateTotal(x);
console.log(y);
