(() => {
    try {
        const theButton = document.querySelector('#the-button') as HTMLButtonElement;
        if (!theButton) throw new Error('button not found');

        theButton.addEventListener('mousedown', (event: MouseEvent) => {
            if (1 === event.button) 
            {
                console.log("middle mouse down")
                document.body.style.backgroundColor = "black";
            }
            else
            {
                console.log("other")
                document.body.style.backgroundColor = getRandomColor();
            }
        });

        theButton.addEventListener('mouseup', (event: MouseEvent) => {
            if (1 === event.button) 
            {
                console.log("middle mouse up")
                document.body.style.backgroundColor = "white";
            }
            else
            {
                console.log("other")
                document.body.style.backgroundColor = getRandomColor();
            }
        });

        document.addEventListener('keydown', (event: KeyboardEvent) => {
            if ('k' === event.key) 
            {
                console.log("k key down")
                document.body.style.backgroundColor = "white";
            }
            else 
            {
                console.log("other")
                document.body.style.backgroundColor = getRandomColor();
            }
        });


        theButton.onclick = (event) => {
            console.dir(event);
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
