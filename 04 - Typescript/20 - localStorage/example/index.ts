interface User {
    userName: string;
    age: number;
}
const localStorageUsers = localStorage.getItem('users');
console.log(localStorageUsers);
const users: User[] = localStorageUsers ? JSON.parse(localStorageUsers) : [];
console.log(users);

function addUser() {
    const userName = prompt('Enter your name');
    const userAge = Number(prompt('Enter your age'));
    if (!userName || !userAge) {
        alert('Invalid input');
        return;
    }
    users.push({ userName: userName, age: userAge });
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
}

addUser();

