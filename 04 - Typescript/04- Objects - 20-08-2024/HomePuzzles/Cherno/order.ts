interface Product
{
    id: number;
    name: string;
    price: number;
}
interface Customer
{
    name: string;
    adress: string;
}
interface Order
{
    customer: Customer;
    product: Product;
    quantity: number;
}

function createOrder(customer: Customer, product: Product, quantity: number): Order
{
    return {customer: customer, product: product, quantity: quantity};
}

function calculateTotal(order:Order): number
{
    return order.product.price * order.quantity;
}

function generateInvoice(order:Order): string
{
    return `name: ${order.customer.name} adress: ${order.customer.adress}
            item: ${order.product.name} count: ${order.quantity}
            total: ${calculateTotal(order)}`;
}

function orderTester(): void
{
    const customer: Customer = {name: "steve test", adress: "test st."};
    const product: Product = {id: 1, name: "testium", price: Number(prompt("enter product price"))}
    const quantity: number = Number(prompt("enter amount"));

    const order: Order = createOrder(customer, product, quantity);

    document.write(generateInvoice(order));
}

orderTester();