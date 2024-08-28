// // ### 1. Book Information
// // Create an interface for a Book with properties: title, author, and publicationYear.
// // Write a function that takes a Book object and returns a formatted string with the book's information.
function getData() {
    try {
        var name = prompt("enter a name");
        var price = Number(prompt("enter a price"));
        var category = prompt("enter a category");
        var product_1 = {
            name: name,
            price: price,
            category: category
        };
        console.log(product_1);
        return product_1;
    }
    catch (error) {
        console.error(error);
        return {
            name: "",
            price: 0,
            category: ""
        };
    }
}
function getDataDiscount() {
    try {
        var percentage = Number(prompt("enter a discount"));
        var category = prompt("enter a category");
        var discount_1 = {
            category: category,
            percentage: percentage
        };
        console.log(discount_1);
        return discount_1;
    }
    catch (error) {
        console.error(error);
        return {
            category: "",
            percentage: 0
        };
    }
}
var product = getData();
var discount = getDataDiscount();
function discountCalculation(product, discount) {
    var newPrice;
    if (product.category === discount.category) {
        newPrice = (product.price * (100 - discount.percentage)) / 100;
        console.log(newPrice);
    }
    else {
        console.log("there is now discount");
    }
    return newPrice;
}
discountCalculation(product, discount);
