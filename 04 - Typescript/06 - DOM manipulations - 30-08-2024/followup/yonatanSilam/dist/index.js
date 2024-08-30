var Items = [
    { id: 11111, name: "xbox", price: 2500, quantity: 4 },
    { id: 22222, name: "ps", price: 3500, quantity: 3 },
    { id: 33333, name: "cat", price: 1000, quantity: 2 },
    { id: 44444, name: "ipad", price: 2950, quantity: 1 },
    { id: 55555, name: "box", price: 10, quantity: 10 },
    { id: 66666, name: "glass", price: 5, quantity: 100 },
    { id: 77777, name: "image", price: 999, quantity: 12 },
    { id: 88888, name: "comp", price: 10000, quantity: 2 },
    { id: 99999, name: "lamp", price: 129, quantity: 5 },
    { id: 17856, name: "dast", price: 999999, quantity: 5 },
];
function main() {
    var elements = document.querySelectorAll('.line');
    console.log(elements);
    elements.forEach(function (element, i) {
        if (Items.length > i) {
            element.style.color = 'red';
            element.textContent = Items[i].name;
        }
    });
    var theOne = document.querySelector('#theOne');
    if (theOne) {
        theOne.style.color = 'blue';
        theOne.textContent = theOne.textContent + " and im special";
    }
}
main();
