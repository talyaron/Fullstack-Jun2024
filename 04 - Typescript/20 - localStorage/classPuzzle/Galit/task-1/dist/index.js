var localStorageCounter = localStorage.getItem('counter');
var counter = localStorageCounter ? parseInt(localStorageCounter) : 0;
var displayElement = document.getElementById('display');
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
var buttonElement = document.getElementById('button');
if (buttonElement) {
    buttonElement.addEventListener('click', incrementCounter);
}
