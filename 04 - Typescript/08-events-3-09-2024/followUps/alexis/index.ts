

// (() => {
//     try {
//         const theButton = document.querySelector('#the-button') as HTMLButtonElement;
//         if (!theButton) throw new Error('button not found');

//         theButton.addEventListener('click', (event) => {
//             console.dir(event);
//             console.log('you clicked me');
//             document.body.style.backgroundColor = getRandomColor();
//         });

//         theButton.onclick = (event) => {
//             console.dir(event);
//             console.log('you clicked me');
//             document.body.style.backgroundColor = getRandomColor();
//         };

//         theButton.onmouseenter = () => {
//             console.log('mouse entered');
//             document.body.style.fontSize = '1.2em';
//         }
//         theButton.onmouseleave = () => {
//             console.log('mouse left');
//             document.body.style.fontSize = '1em';
//         }

//         const theInput = document.querySelector('#the-input') as HTMLInputElement;
//         if (!theInput) throw new Error('input not found');

//         theInput.oninput = (event) => {
//             try {


//                 console.dir(event);
//                 console.dir(theInput);
//                 console.log('you typed:', theInput.value);

//                 const theOutput = document.querySelector('#output') as HTMLDivElement;
//                 if (!theOutput) throw new Error('output not found');
//                 theOutput.textContent = theInput.value;
//             } catch (error) {
//                 console.error(error);

//             }
//         }
//     } catch (err) {
//         console.error(err);
//     }
// })();

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
const scrollableElement = document.getElementById('scrollable-element');
const button = document.getElementById('button');

scrollableElement.addEventListener('scroll', () => {
  if (scrollableElement.scrollTop + scrollableElement.clientHeight >= scrollableElement.scrollHeight) {
    button.classList.add('green');
  } else {
    button.classList.remove('green');
  }
});