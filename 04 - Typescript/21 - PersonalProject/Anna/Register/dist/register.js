// User classs
var User = /** @class */ (function () {
    function User(name, lastname, email, phone, username, password) {
        this.id = "id-" + crypto.randomUUID();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }
    return User;
}());
function renderRegister() {
    try {
        var main_1 = document.querySelector('.register');
        if (!main_1)
            throw new Error('Main element not found');
        var backImg = document.createElement('div'); // create div that store back arrow image;
        backImg.classList.add('register__img');
        main_1.appendChild(backImg);
        var title = document.createElement('div'); // create div title element 
        title.innerHTML = "Register";
        title.classList.add('register__title');
        main_1.appendChild(title);
        var form = document.createElement('form');
        form.setAttribute('id', 'form');
        form.innerHTML = "\n            <div class=\"input-group\">\n                <label for=\"name\">Name:</label> <br>\n                <input type=\"text\" id=\"name\" name=\"name\"> <br>\n                <span id=\"name_error\"></span><br>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"lastName\">Last Name:</label><br>\n                <input type=\"text\" id=\"lastName\" name=\"lastName\"><br>\n                <span id=\"lastName_error\"></span><br>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"email\">Email:</label><br>\n                <input type=\"text\" id=\"email\" name=\"email\"><br>\n                <span id=\"email_error\"></span><br>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"phone\">Phone:</label><br>\n                <input type=\"text\" id=\"phone\" name=\"phone\"><br>\n                <span id=\"phone_error\"></span><br>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"username\">User Name:</label><br>\n                <input type=\"text\" id=\"username\" name=\"username\"><br>\n                <span id=\"username_error\"></span><br>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"password\">Password:</label><br>\n                <input type=\"text\" id=\"password\" name=\"password\"><br>\n                <span id=\"password_error\"></span><br>\n            </div>\n            <div class=\"input-group\">\n                <label for=\"RepeatPassword\">Repeat Password:</label><br>\n                <input type=\"text\" id=\"repeatpassword\" name=\"repeatpassword\"><br>\n                <span id=\"matchpassword_error\"></span><br>\n            </div>\n        <button type=\"submit\"> Sign up </button>\n    ";
        main_1.appendChild(form);
    }
    catch (error) {
        console.error(error);
    }
}
function handleRegister(event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var lastname = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var repeatpassword = document.getElementById('repeatpassword');
    var name_error = document.getElementById('name_error');
    var lastName_error = document.getElementById('lastName_error');
    var email_error = document.getElementById('email_error');
    var phone_error = document.getElementById('phone_error');
    var username_error = document.getElementById('username_error');
    var password_error = document.getElementById('password_error');
    var matchpassword_error = document.getElementById('matchpassword_error');
    name_error.innerHTML = '';
    lastName_error.innerHTML = '';
    email_error.innerHTML = '';
    phone_error.innerHTML = '';
    username_error.innerHTML = '';
    password_error.innerHTML = '';
    matchpassword_error.innerHTML = '';
    var formValid = true;
    if (name.value === '' || name.value == null) {
        name_error.innerHTML = "Name is required";
        formValid = false;
    }
    if (lastname.value === '' || lastname.value == null) {
        lastName_error.innerHTML = "Last name is required";
        formValid = false;
    }
    if (email.value === '' || email.value == null) {
        email_error.innerHTML = "Email is requierd";
        formValid = false;
    }
    var emailMatch = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
    if (!email.value.match(emailMatch)) {
        email_error.innerHTML = "Please enter a valid email";
        formValid = false;
    }
    var phoneMatch = "^\\+([0-9\\-]?){9,11}[0-9]$";
    if (phone.value === '' || phone.value == null) {
        phone_error.innerHTML = "Phone is required";
        formValid = false;
    }
    if (username.value === '' || username.value == null) {
        username_error.innerHTML = "User name is required";
        formValid = false;
    }
    if (password.value === '' || password.value == null) {
        password_error.innerHTML = "Password is required";
        formValid = false;
    }
    if (password.value.length < 5) {
        password_error.innerHTML = "Please enter a valid password";
        formValid = false;
    }
    if (repeatpassword.value != password.value) {
        matchpassword_error.innerHTML = "Please enter matches password";
        formValid = false;
    }
    if (isEmailExists(email.value)) {
        email_error.innerHTML = "Email is exsisted";
        formValid = false;
    }
    if (formValid) {
        try {
            var user = new User(name.value, lastname.value, email.value, phone.value, username.value, password.value);
            var form = document.getElementById('form');
            if (!form)
                throw new Error('Main element not found');
            var userCreated = document.createElement('span');
            form.appendChild(userCreated);
            userCreated.innerHTML = "User created successfuly";
            userCreated.setAttribute('id', 'success');
            saveUser(user);
            name_error.innerHTML = '';
            lastName_error.innerHTML = '';
            email_error.innerHTML = '';
            phone_error.innerHTML = '';
            username_error.innerHTML = '';
            password_error.innerHTML = '';
            matchpassword_error.innerHTML = '';
        }
        catch (error) {
        }
    }
}
function saveUser(user) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
function isEmailExists(emailToCheck) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(function (user) { return user.email === emailToCheck; });
}
function handleBackButton(event) {
    window.location.href = '../welcome/welcome.html';
}
var Users = [];
function main() {
    renderRegister();
    var form = document.getElementById('form');
    var backButton = document.querySelector('.register__img');
    form.addEventListener('submit', handleRegister);
    backButton.addEventListener('click', handleBackButton);
}
main();
