const localStorageCounter = localStorage.getItem('counter');
const counter = localStorageCounter ? parseInt(localStorageCounter) : 0;

const displayElement = document.getElementById('display');
if (displayElement) {
    displayElement.textContent = 'Counter: ' + counter;
}

function incrementCounter() {
    counter++;
    localStorage.setItem('counter', counter.toString()); 
    console.log('Updated counter:', counter);

    if (displayElement) {
        displayElement.textContent = 'Counter: ' + counter;
    }
}

const buttonElement = document.getElementById('button');
if (buttonElement) {
    buttonElement.addEventListener('click', incrementCounter);
}
