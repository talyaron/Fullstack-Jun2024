/* create a stor for something you like.
 Use Model and View concepts to render to
 the screen the data you have stored.
*/
var cars = [
    {
        model: "Gtr",
        maker: "Nissan",
        year: 1995,
        img: "https://cdn.dealeraccelerate.com/international/1/605/28791/1920x1440/1995-nissan-skyline-gt-r"
    },
    {
        model: "RX-7",
        maker: "Mazda",
        year: 1993,
        img: "https://api.exportfrom.jp/ja/files/view/mazda-rx-7-type-r-7.jpg"
    },
    {
        model: "Supra",
        maker: "Toyota",
        year: 1996,
        img: "https://api.exportfrom.jp/en/files/view/toyota-supra-mk4.jpeg"
    },
];
function displayCars(cars) {
    try {
        var carElements_1 = document.querySelector("#cars");
        if (!carElements_1)
            throw new Error('Could not find elements"');
        cars.forEach(function (car) {
            var carElement = document.createElement("article");
            carElement.innerHTML = "\n        <h3>" + car.model + "</h3>\n        <img src=\"" + car.img + "\" />\n    ";
            carElement.classList.add("car");
            //add the id of the pet to the article element
            //append the article element to the pets element
            carElements_1.appendChild(carElement);
        });
    }
    catch (e) {
        console.log(e);
    }
}
console.log(cars);
displayCars(cars);
