/*
1) create a button that every time you click it, increase a counter.
 save the counter in the local storage. after reloading the page, the counter should be the same as before.

2) create user details form, with image, and render to the screen. 
save the user details in the local storage. after reloading the page, the user details should be the same as before,
 and should be rendered to the screen.
*/

const containerElement = document.getElementById("container")as HTMLElement;
const localStorageCount= localStorage.getItem('count');
let count:number = localStorageCount ? JSON.parse(localStorageCount) : 0;

function countUp(){
    containerElement.innerHTML=
    `<button id ="btn">${count}</button>
    `;
    const btn= document.getElementById(`btn`);
    if(btn)
    btn.addEventListener(`click`,(event)=>
{
   count ++;
   localStorage.setItem(`count`,JSON.stringify(count));
   countUp()
}
)
}

countUp()

