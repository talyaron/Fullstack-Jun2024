function init() {
    renderRegister();
}
init();
function getUsers() {
    var usersString = localStorage.getItem('users');
    if (!usersString)
        return [];
    return JSON.parse(usersString);
}
function addUser(user) {
    var users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
function checkMailAvailability(email) {
    var users = getUsers();
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user.email === email)
            return false;
    }
    return true;
}
// view
function renderRegister() {
    var _a;
    try {
        var registerElement = document.querySelector('#app');
        if (!registerElement)
            throw new Error('Register element not found');
        registerElement.innerHTML = "\n            <form id=\"register\"\">\n                <h1>Register</h1>\n                <input type=\"text\" id=\"username\" placeholder=\"Username\">\n                <input type=\"email\" id=\"email\" placeholder=\"Email\">\n                <input type=\"phone\" id=\"phone\" placeholder=\"Phone number\">\n                <input type=\"password\" id=\"password\" placeholder=\"Password\">\n                <input type=\"password\" id=\"validate_password\" placeholder=\"validate Password\">\n                <input type=\"submit\" value=\"register\">\n            </form>\n        ";
        (_a = document.querySelector('#register')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', register);
    }
    catch (error) {
        console.log(error);
    }
}
// controller
function register(event) {
    event.preventDefault();
    if (!checkMailAvailability(event.target.email.value)) {
        return alert('Email already in use');
    }
    if (event.target.password.value !== event.target.validate_password.value) {
        return alert('Passwords do not match');
    }
    else {
        addUser({
            email: event.target.email.value,
            id: crypto.randomUUID(),
            name: event.target.username.value,
            phone: event.target.phone.value,
            password: event.target.password.value
        });
        alert('Registration successful');
        window.location.href = '../login/login.html';
    }
}
