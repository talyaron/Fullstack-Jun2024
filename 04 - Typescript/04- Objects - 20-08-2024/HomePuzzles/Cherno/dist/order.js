function createOrder(customer, product, quantity) {
    return { customer: customer, product: product, quantity: quantity };
}
function calculateTotal(order) {
    return order.product.price * order.quantity;
}
function generateInvoice(order) {
    return "name: " + order.customer.name + " adress: " + order.customer.adress + "\n            item: " + order.product.name + " count: " + order.quantity + "\n            total: " + calculateTotal(order);
}
function orderTester() {
    var customer = { name: "steve test", adress: "test st." };
    var product = { id: 1, name: "testium", price: Number(prompt("enter product price")) };
    var quantity = Number(prompt("enter amount"));
    var order = createOrder(customer, product, quantity);
    document.write(generateInvoice(order));
}
orderTester();
