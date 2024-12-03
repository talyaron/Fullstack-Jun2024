var namesAndPhones = [];
function handleStart() {
    try {
        var nameInput = document.getElementById('name-list');
        var phoneInput = document.getElementById('phone-list');
        if (!nameInput || !phoneInput)
            throw new Error('Input field not found');
        nameInput.addEventListener("keyup", handleInput);
        phoneInput.addEventListener("keyup", handleInput);
    }
    catch (e) {
        console.error(e);
    }
}
function handleInput(event) {
    if (event.key === 'Enter') {
        var nameInput = document.getElementById('name-list');
        var phoneInput = document.getElementById('phone-list');
        var newName = nameInput.value;
        var newPhone = phoneInput.value;
        if (newName && newPhone) {
            namesAndPhones.push({ name: newName, phone: newPhone });
            renderNames();
        }
    }
}
function renderNames() {
    try {
        var userList = document.getElementById('user');
        if (!userList)
            throw new Error('user not found');
        userList.innerHTML = namesAndPhones.map(function (user) { return "<li>Hello " + user.name + ", your phone is " + user.phone + "</li>"; }).join('');
    }
    catch (e) {
        console.error(e);
    }
}
