//DOM manipulations
// document.body.style.backgroundColor = 'teal';

const hello = document.querySelector('#hello') as HTMLElement;

if (hello) {
    hello.textContent = 'Hello World!';
    // hello.style.color = 'white';
    // hello.addEventListener('mouseenter', (event) => {
    //     console.log(event);
    //     hello.textContent = "welcome!";
    // });
    hello.onmouseenter = (event) => {
     
        hello.textContent = "welcome!";
    };
    hello.addEventListener('mouseleave', () => {
        hello.textContent = "Bye!";
    });
    console.dir(hello);
}

const root = document.documentElement;
root.style.setProperty('--primary-color', 'orange');


