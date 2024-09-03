var _a, _b, _c, _d, _e, _f, _g, _h, _j;
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
(_a = document.querySelector('#color-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var text = document.querySelector('#text');
    text.style.color = getRandomColor();
});
(_b = document.querySelector('#toggle-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var box = document.querySelector('#box');
    box.classList.toggle('highlight');
});
(_c = document.querySelector('#form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.querySelector('#name-input');
    var message = document.querySelector('#form-message');
    if (nameInput.value) {
        message.textContent = "Hello, " + nameInput.value + "!";
    }
    else {
        message.textContent = 'Please enter your name.';
    }
});
(_d = document.querySelector('#alert-button')) === null || _d === void 0 ? void 0 : _d.addEventListener('dblclick', function () {
    alert('Button was double-clicked!');
});
(_e = document.querySelector('#input-field')) === null || _e === void 0 ? void 0 : _e.addEventListener('input', function (event) {
    var input = event.target;
    var output = document.querySelector('#live-output');
    output.textContent = "You typed: " + input.value;
});
(_f = document.querySelector('#disable-button')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function (event) {
    var button = event.target;
    button.disabled = true;
    button.textContent = 'Button Disabled';
});
(_g = document.querySelector('#change-image-button')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () {
    var image = document.querySelector('#image');
    image.src = 'https://via.placeholder.com/150/FF0000/FFFFFF?text=New+Image';
});
(_h = document.querySelector('#show-button')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', function () {
    var content = document.querySelector('#toggle-content');
    content.style.display = 'block';
});
(_j = document.querySelector('#hide-button')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', function () {
    var content = document.querySelector('#toggle-content');
    content.style.display = 'none';
});
