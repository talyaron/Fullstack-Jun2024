var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getProduct() {
    try {
        var name = prompt("Enter product name:");
        var price = Number(prompt("Enter product price:"));
        var category = prompt("Enter product category");
        if (!name || price < 0 || !category)
            throw new Error("Invalid input");
        var product_1 = {
            name: name,
            price: price,
            category: category
        };
        return product_1;
    }
    catch (e) {
        console.error(e);
        return {
            name: "",
            price: 0,
            category: ""
        };
    }
}
var product = getProduct();
function getDiscount() {
    try {
        var category = prompt("Enter category");
        var percentage = Number(prompt("Enter percentage"));
        if (!category || percentage < 0)
            throw new Error("Invalid input");
        var discount_1 = {
            category: category,
            percentage: percentage
        };
        return discount_1;
    }
    catch (e) {
        console.error(e);
        return {
            category: "",
            percentage: 0
        };
    }
}
var discount = getDiscount();
function prddiscount(product, discount) {
    try {
        var newPrice = void 0;
        var disProduct = __assign({}, product);
        if (!disProduct)
            throw new Error("Invalid input");
        if (product.category === discount.category) {
            newPrice = product.price * (1 - (discount.percentage / 100));
            disProduct.price = newPrice;
        }
        else
            document.write("The Category not match");
        return disProduct;
    }
    catch (e) {
        console.error(e);
        return {
            name: "",
            price: 0,
            category: ""
        };
    }
}
var disPrd = prddiscount(product, discount);
function rederExc6(product, discount, discounted) {
    document.write("<br> <b> Product info: </b> <br> Name: " + product.name + " <br> Price: " + product.price + "\n        <br> Category: " + product.category + " \n        <br> <b> Product After Discount: </b> <br>\n        Name: " + discounted.name + " <br> Price: " + discounted.price + " <br> Category: " + discounted.category + "\n        <br> <b> Discount Amount: </b> Category: " + discount.category + " , Percentage: " + discount.percentage);
}
rederExc6(product, discount, disPrd);
