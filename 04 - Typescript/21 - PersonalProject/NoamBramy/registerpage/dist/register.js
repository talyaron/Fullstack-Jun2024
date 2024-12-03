var _a;
(_a = document.getElementById('registerForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    if (localStorage.getItem(email)) {
        alert('Email already exists.');
    }
    else if (password === '' || repeatPassword === '') {
        alert('Please fill in all fields.');
    }
    else if (password !== repeatPassword) {
        alert('Passwords do not match.');
    }
    else {
        localStorage.setItem(email, JSON.stringify({ name: name, phone: phone, password: password }));
        alert('Registration successful!');
        window.location.href = '../loginpage/login.html';
    }
});
