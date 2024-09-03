

(() => {
    try {
        const theButton = document.querySelector('#the-button') as HTMLButtonElement;
        if (!theButton) throw new Error('button not found');

        theButton.addEventListener('click', (event) => {
            console.dir(event);
            console.log('you clicked me');
            document.body.style.backgroundColor = getRandomColor();
        });

        theButton.onclick = (event) => {
            console.dir(event);
            console.log('you clicked me');
            document.body.style.backgroundColor = getRandomColor();
        };

        theButton.onmouseenter = () => {
            console.log('mouse entered');
            document.body.style.fontSize = '1.2em';
        }
        theButton.onmouseleave = () => {
            console.log('mouse left');
            document.body.style.fontSize = '1em';
        }

        const theInput = document.querySelector('#the-input') as HTMLInputElement;
        if (!theInput) throw new Error('input not found');

        theInput.oninput = (event) => {
            try {


                console.dir(event);
                console.dir(theInput);
                console.log('you typed:', theInput.value);

                const theOutput = document.querySelector('#output') as HTMLDivElement;
                if (!theOutput) throw new Error('output not found');
                theOutput.textContent = theInput.value;
            } catch (error) {
                console.error(error);

            }
        }
    } catch (err) {
        console.error(err);
    }
})();

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('#color-button')?.addEventListener('click', () => {
    const text = document.querySelector('#text') as HTMLElement;
    text.style.color = getRandomColor();
});

document.querySelector('#toggle-button')?.addEventListener('click', () => {
    const box = document.querySelector('#box') as HTMLElement;
    box.classList.toggle('highlight');
});

document.querySelector('#form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name-input') as HTMLInputElement;
    const message = document.querySelector('#form-message') as HTMLElement;

    if (nameInput.value) {
        message.textContent = `Hello, ${nameInput.value}!`;
    } else {
        message.textContent = 'Please enter your name.';
    }
});

document.querySelector('#alert-button')?.addEventListener('dblclick', () => {
    alert('Button was double-clicked!');
});

document.querySelector('#input-field')?.addEventListener('input', (event) => {
    const input = event.target as HTMLInputElement;
    const output = document.querySelector('#live-output') as HTMLElement;
    output.textContent = `You typed: ${input.value}`;
});

document.querySelector('#disable-button')?.addEventListener('click', (event) => {
    const button = event.target as HTMLButtonElement;
    button.disabled = true;
    button.textContent = 'Button Disabled';
});

document.querySelector('#change-image-button')?.addEventListener('click', () => {
    const image = document.querySelector('#image') as HTMLImageElement;
    image.src = 'https://via.placeholder.com/150/FF0000/FFFFFF?text=New+Image';
});

document.querySelector('#show-button')?.addEventListener('click', () => {
    const content = document.querySelector('#toggle-content') as HTMLElement;
    content.style.display = 'block';
});

document.querySelector('#hide-button')?.addEventListener('click', () => {
    const content = document.querySelector('#toggle-content') as HTMLElement;
    content.style.display = 'none';
});