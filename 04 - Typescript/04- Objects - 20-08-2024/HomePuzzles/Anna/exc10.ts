interface Product{
    id: number;
    name: string;
    price: number;
}

interface Customer{
    name: string;
    address: string;
}

interface Order{
    customer: Customer;
    product: Product;
    quantity: number;
}

function getProduct() : Product {
    try{
        const id = Number(prompt("Enter product id:"));
        const name = prompt("Enter product name:");
        const price = Number(prompt("Enter product price:"));

        if(id<0 || !name || price<0) throw new Error("Invalid input!!!");

        return{
            id: id,
            name: name,
            price: price,
        }
    }catch(e){
        console.error(e);
        return{
            id: 0,
            name: "",
            price: 0,
        }
    }
}

function getCustomer() : Customer{
    try{
        const name = prompt("Enter customer name:");
        const address = prompt("Enter customer address:");

        if(!name || !address) throw new Error("Invalid input!!!");

        return{
            name: name,
            address: address,
        }
    }catch(e){
        console.error(e);
        return{
            name: "",
            address: "",
        }
    }
}

function createOrder(customer: Customer, product : Product,quantity : number) : Order{
    try{
        if(!customer || !product || quantity<0) throw new Error("Invalid order details!!!");

        return{
            customer:customer,
            product: product,
            quantity: quantity,
        }
    }catch(e){
        console.error(e);
        return{
            customer: customer,
            product: product,
            quantity: 0,
        }
    }
}


function calculateTotal (order : Order) : number{
    return order.quantity * order.product.price;
}

function generateInvoice(order : Order){
    const total =calculateTotal(order);
    document.write(`<b> Order: </b> <br> Customer: name:${order.customer.name} address:${order.customer.address}. <br>
        <b> Product info: </b> id: ${order.product.id} , name: ${order.product.name} , price: ${order.product.price} , quantity: ${order.quantity}
        <br> <b> Total: </b> ${total}`)
}

const customer : Customer = getCustomer();
const product : Product = getProduct();
const quantity = Number(prompt("Enter product quantity:"))
const order: Order = createOrder(customer,product,quantity);

generateInvoice(order);