var _a;
(_a = document.getElementById('loginForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var keepMeLoggedIn = document.getElementById('keepMeLoggedIn').checked;
    var storedUser = localStorage.getItem(email);
    if (storedUser) {
        var userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert('Login successful!');
            if (keepMeLoggedIn) {
                localStorage.setItem('loggedInUser', email);
            }
            else {
                sessionStorage.setItem('loggedInUser', email);
            }
            setTimeout(function () {
                window.location.href = '../dashboard/dashboard.html';
            }, 500);
        }
        else {
            alert('Invalid email or password.');
        }
    }
    else {
        alert('Invalid email or password.');
    }
});
