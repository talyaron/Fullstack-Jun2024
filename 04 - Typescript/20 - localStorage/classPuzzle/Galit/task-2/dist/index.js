var _a;
var localStorageUsers = localStorage.getItem('users');
console.log('Local storage users:', localStorageUsers);
var users = localStorageUsers ? JSON.parse(localStorageUsers) : [];
console.log('Parsed users from local storage:', users);
function renderUsers() {
    var userListElement = document.getElementById('user-list');
    if (userListElement) {
        userListElement.innerHTML = '';
        console.log('Rendering users...');
        users.forEach(function (user) {
            var userElement = document.createElement('div');
            userElement.classList.add('user');
            var nameElement = document.createElement('h3');
            nameElement.textContent = "Name: " + user.Name;
            var ageElement = document.createElement('p');
            ageElement.textContent = "Age: " + user.age;
            var imageElement = document.createElement('img');
            imageElement.src = user.image;
            imageElement.alt = user.Name + "'s image";
            imageElement.width = 100;
            userElement.appendChild(nameElement);
            userElement.appendChild(ageElement);
            userElement.appendChild(imageElement);
            userListElement.appendChild(userElement);
            console.log("Added user to list: " + user.Name + ", Age: " + user.age);
        });
    }
}
function addUser(event) {
    event.preventDefault();
    var userNameInput = document.getElementById('name');
    var userAgeInput = document.getElementById('age');
    var userImageInput = document.getElementById('image');
    var userName = userNameInput.value;
    var userAge = Number(userAgeInput.value);
    var userImage = userImageInput.value;
    if (!userName || isNaN(userAge) || !userImage) {
        alert('Please fill out all fields.');
        console.log('Invalid input detected.');
        return;
    }
    users.push({ Name: userName, age: userAge, image: userImage });
    localStorage.setItem('users', JSON.stringify(users));
    console.log('User added:', { Name: userName, age: userAge, image: userImage });
    renderUsers();
}
(_a = document.getElementById('user-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', addUser);
renderUsers();
