
document.body.style.backgroundColor = 'whale';

function autumn(){
    const messages = document.querySelectorAll('.autumn') as NodeListOf<HTMLElement>;
    console.log(messages);

    messages.forEach(message =>{
        message.style.color = 'pink';
        message.textContent = 'I love autumn';
    });

    const theOne = document.querySelector('#theOne') as HTMLElement;
    theOne.style.color = 'blue';
    theOne.textContent = 'Great weather';
}
autumn();
