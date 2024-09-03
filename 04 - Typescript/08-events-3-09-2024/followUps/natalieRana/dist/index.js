(function () {
    try {
        var theButton = document.querySelector('#the-button');
        if (!theButton)
            throw new Error('button not found');
        theButton.addEventListener('click', function (event) {
            console.dir(event);
            console.log('you clicked me');
            document.body.style.backgroundColor = getRandomColor();
        });
        theButton.onclick = function (event) {
            console.dir(event);
            console.log('you clicked me');
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
            var Keyboard = document.querySelector('#Keyboard');
            if (!Keyboard)
                throw new Error('Keyboard not found');
            document.onkeydown = function (event) {
                try {
                    console.dir(event);
                    console.dir(Keyboard);
                    document.body.style.color = red();
                }
                catch (error) {
                    console.error(error);
                }
            };
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
function red() {
    var color = 'red';
    return color;
}
//## Keyboard Events
//- `keydown`
//- `keyup`
//- `keypress`
