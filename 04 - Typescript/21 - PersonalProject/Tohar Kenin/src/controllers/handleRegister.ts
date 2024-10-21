

export function handelRegister(): void {
    
    const button = document.getElementById('registerButton');

    if (button) {
        button.addEventListener('click', () => {
        console.log('Button was pressed!');
    });
}

};