function main() {
    const elements = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    console.log(elements);   
    
    elements.forEach(element => {
        element.style.color = 'red';
        element.textContent = 'Hello';
    });
}
    