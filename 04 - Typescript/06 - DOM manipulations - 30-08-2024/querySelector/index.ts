function main() {
    const elements = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    console.log(elements);

    elements.forEach(element => {
        element.style.color = 'red';
        element.textContent = 'Hello World';
    });

    const theOne = document.querySelector('#theOne') as HTMLElement;
    theOne.style.color = 'blue';
    theOne.textContent = 'I am special';
}

main();