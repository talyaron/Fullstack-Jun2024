var counter = 0;
var clicks = [];
console.log(clicks);
/*function addCount( clickCounter : number [], total : number){
    clickCounter.push()
}*/
function countClicks() {
    var buttonClicked = document.querySelector('#clickMe');
    buttonClicked.addEventListener('click', function (event) {
        console.log('Button is clicked');
        console.log(event);
    });
}
