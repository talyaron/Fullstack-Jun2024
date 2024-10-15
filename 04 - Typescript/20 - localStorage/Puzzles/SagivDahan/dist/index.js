// if in the localstorage undefind so it is set 0
var counter = parseInt(localStorage.getItem('counter') || '0');
// get the element of the counter text
var counterValue = document.getElementById('counter-txt');
//make the number to string for save in the localstorage
counterValue.textContent = counter.toString();
//set btn of the click to count
var button = document.getElementById('counter-btn');
button.addEventListener('click', function () {
    //if click the btn so its update the number in 1
    counter++;
    //update the txt in the counter
    counterValue.textContent = counter.toString();
    //save the string in the localstorage
    localStorage.setItem('counter', counter.toString());
});
