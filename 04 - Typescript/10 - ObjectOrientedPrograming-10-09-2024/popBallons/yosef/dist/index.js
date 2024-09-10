var Ballon = /** @class */ (function () {
    function Ballon(imageURL) {
        this.imageURL = imageURL;
        this.id = Math.random();
    }
    Ballon.prototype.explode_ballon = function () {
        this.imageURL = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg';
    };
    return Ballon;
}());
var ballon = new Ballon('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Ec4AyjMzCAhhRfgWLLCCa1edXtULgPt64w&s');
console.log(ballon);
function main2() {
    try {
        //get field, andd add event listener
        var box = document.getElementById('box');
        if (!box) {
            throw new Error('Field not found');
        }
        box.addEventListener('click', handleMove);
    }
    catch (error) {
        console.error(error);
    }
}
function renderNewBallon(ballon) {
    try {
        var BallonElement = document.createElement('img');
        BallonElement.src = ballon.imageURL;
        var box = document.getElementById('box');
        if (!box) {
            throw new Error('Box not found');
        }
        box.appendChild(BallonElement);
        var field = document.getElementById('field');
    }
    catch (error) {
        console.error(error);
    }
}
function handleMove(event) {
    try {
        var box = document.getElementById('box');
        if (!box) {
            throw new Error('Box not found');
        }
        ballon.imageURL = 'https://pic1.yitweb.co.il/picserver/mynet/crop_images/2023/11/13/HJNPSnkNa/HJNPSnkNa_0_0_640_360_0_large.jpg';
        renderNewBallon(ballon);
        ballon.explode_ballon();
        console.log(ballon.imageURL);
    }
    catch (error) {
        console.error(error);
    }
}
main2();
renderNewBallon(ballon);
