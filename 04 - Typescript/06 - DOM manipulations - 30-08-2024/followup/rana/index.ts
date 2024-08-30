function information() {
    const elements = document.querySelectorAll('.firstline') as NodeListOf<HTMLElement>;
    console.log(elements);

    elements.forEach(element => {
        element.style.background = 'red';
        element.style.color = 'purple';
        element.textContent = 'Hello World';
    });

    const special = document.querySelector('#special') as HTMLElement;
    special.style.color = 'pink';
    special.textContent = 'I am special';
}

information();