document.body.style.backgroundColor = 'whale';
function autumn() {
    var messages = document.querySelectorAll('.autumn');
    console.log(messages);
    messages.forEach(function (message) {
        message.style.color = 'pink';
        message.textContent = 'I love autumn';
    });
    var theOne = document.querySelector('#theOne');
    theOne.style.color = 'blue';
    theOne.textContent = 'Great weather';
}
autumn();
