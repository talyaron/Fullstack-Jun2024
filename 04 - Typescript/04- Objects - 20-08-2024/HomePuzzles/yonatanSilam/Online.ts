interface Product{
    id:string,
    name:string,
    price:number
}
interface Customer{
    name:string,
    address:string,
}
interface Order{
    customer:Customer,
    product:Product,
    quantity:number
}
const customer1:Customer={
    name:"yonatan",
    address:"spiglman 27",
}
const product1:Product={
    name:"xBox",
    id:"12345",
    price:2500
}
function createOrder(product:Product,customer:Customer,quantity:number):Order{
    const order:Order={
        customer:customer,
        product:product,
        quantity:quantity
    }
    return order;
}
function calculateTotal(order:Order):number{
   const product= order.product;
   const sum =order.quantity*product.price;
   return sum

}



const x = createOrder(product1,customer1,5)
console.log(x);
const y =calculateTotal(x);
console.log(y);