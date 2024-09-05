interface Product{
    name: string;
    price: number;
    category: string;
}

interface Discount{
    category: string;
    percentage: number;
}

function getProduct() : Product{
    try{
        const name = prompt("Enter product name:");
        const price = Number(prompt("Enter product price:"));
        const category = prompt("Enter product category");

        if(!name || price < 0 || !category) throw new Error("Invalid input");

        const product : Product = {
            name: name,
            price: price,
            category: category,
        }

        return product;
    }catch(e){
        console.error(e);
        return{
            name: "",
            price: 0,
            category: "",
        }
    }
}

const product : Product = getProduct();

function getDiscount() : Discount{
    try{
        const category  = prompt("Enter category");
        const percentage = Number(prompt("Enter percentage"));

        if(!category || percentage<0 ) throw new Error("Invalid input");

        const discount : Discount ={
            category: category,
            percentage: percentage,
        }

        return discount;
    }catch(e){
        console.error(e);
        return{
            category: "",
            percentage: 0,
        }
    }
}

const discount : Discount = getDiscount();

function prddiscount (product : Product, discount: Discount): Product{
    try{
        let newPrice : number;
        const disProduct = {...product}
        if(!disProduct) throw new Error("Invalid input");
        if(product.category === discount.category){
            newPrice = product.price * (1 - (discount.percentage / 100));
            disProduct.price = newPrice;
        }
        else
            document.write("The Category not match");

        return disProduct;
    }catch(e){
        console.error(e);
        return{
            name: "",
            price: 0,
            category: "",
        }
        
    }
}

const disPrd : Product = prddiscount(product,discount);

function rederExc6 (product : Product, discount : Discount, discounted : Product){
    document.write(`<br> <b> Product info: </b> <br> Name: ${product.name} <br> Price: ${product.price}
        <br> Category: ${product.category} 
        <br> <b> Product After Discount: </b> <br>
        Name: ${discounted.name} <br> Price: ${discounted.price} <br> Category: ${discounted.category}
        <br> <b> Discount Amount: </b> Category: ${discount.category} , Percentage: ${discount.percentage}`)
}

rederExc6(product,discount,disPrd);