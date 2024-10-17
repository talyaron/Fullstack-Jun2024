var localStorageUsers = localStorage.getItem('users');
console.log(localStorageUsers);
var users = localStorageUsers ? JSON.parse(localStorageUsers) : [];
console.log(users);
function addUser() {
    var userName = prompt('Enter your name');
    var userAge = Number(prompt('Enter your age'));
    if (!userName || !userAge) {
        alert('Invalid input');
        return;
    }
    users.push({ userName: userName, age: userAge });
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
}
addUser();
