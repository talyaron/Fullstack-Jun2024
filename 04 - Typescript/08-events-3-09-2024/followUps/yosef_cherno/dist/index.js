(function () {
    try {
        var theButton = document.querySelector('#the-button');
        if (!theButton)
            throw new Error('button not found');
        theButton.addEventListener('mousedown', function (event) {
            if (1 === event.button) {
                console.log("middle mouse down");
                document.body.style.backgroundColor = "black";
            }
            else {
                console.log("other");
                document.body.style.backgroundColor = getRandomColor();
            }
        });
        theButton.addEventListener('mouseup', function (event) {
            if (1 === event.button) {
                console.log("middle mouse up");
                document.body.style.backgroundColor = "white";
            }
            else {
                console.log("other");
                document.body.style.backgroundColor = getRandomColor();
            }
        });
        document.addEventListener('keydown', function (event) {
            if ('k' === event.key) {
                console.log("k key down");
                document.body.style.backgroundColor = "white";
            }
            else {
                console.log("other");
                document.body.style.backgroundColor = getRandomColor();
            }
        });
        theButton.onclick = function (event) {
            console.dir(event);
            document.body.style.backgroundColor = getRandomColor();
        };
        theButton.onmouseenter = function () {
            console.log('mouse entered');
            document.body.style.fontSize = '1.2em';
        };
        theButton.onmouseleave = function () {
            console.log('mouse left');
            document.body.style.fontSize = '1em';
        };
        var theInput_1 = document.querySelector('#the-input');
        if (!theInput_1)
            throw new Error('input not found');
        theInput_1.oninput = function (event) {
            try {
                console.dir(event);
                console.dir(theInput_1);
                console.log('you typed:', theInput_1.value);
                var theOutput = document.querySelector('#output');
                if (!theOutput)
                    throw new Error('output not found');
                theOutput.textContent = theInput_1.value;
            }
            catch (error) {
                console.error(error);
            }
        };
    }
    catch (err) {
        console.error(err);
    }
})();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
