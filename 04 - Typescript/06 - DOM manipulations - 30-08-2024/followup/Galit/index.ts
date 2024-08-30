function main() {
    const elements = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    console.log(elements);

    elements.forEach(element => {
        element.style.color = 'pink';
        element.textContent = 'Hello Hello';
    });

    const theOne = document.querySelector('#theOne') as HTMLElement;
    theOne.style.color = 'purple';
    theOne.textContent = 'By Bye';
    theOne.style.background = 'white';
}

main();
document.body.style.backgroundColor = 'teal';