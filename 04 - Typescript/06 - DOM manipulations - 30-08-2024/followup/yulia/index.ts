function main() {
    const elements = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    console.log(elements);

    elements.forEach(element => {
        element.style.color = 'blue';
        
    });


    const best = document.querySelector('#best') as HTMLElement;
    best.style.color = 'red';

}
main();