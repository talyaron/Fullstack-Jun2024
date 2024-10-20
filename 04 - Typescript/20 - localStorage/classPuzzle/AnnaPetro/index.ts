let counter = 0;

const clicks : [] = [];
console.log(clicks);

/*function addCount( clickCounter : number [], total : number){
    clickCounter.push()
}*/

function countClicks(){
    const buttonClicked = document.querySelector('#clickMe') as HTMLButtonElement;
    buttonClicked.addEventListener('click',(event) => {
        console.log('Button is clicked');
        console.log(event)
    })
}