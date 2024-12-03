//DOM manipulations
// document.body.style.backgroundColor = 'teal';
var hello = document.querySelector('#hello');
if (hello) {
    hello.textContent = 'Hello World!';
    // hello.style.color = 'white';
    // hello.addEventListener('mouseenter', (event) => {
    //     console.log(event);
    //     hello.textContent = "welcome!";
    // });
    hello.onmouseenter = function (event) {
        hello.textContent = "welcome!";
    };
    hello.addEventListener('mouseleave', function () {
        hello.textContent = "Bye!";
    });
    console.dir(hello);
}
var root = document.documentElement;
root.style.setProperty('--primary-color', 'orange');
