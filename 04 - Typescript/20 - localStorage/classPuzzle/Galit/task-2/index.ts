interface User {
    Name: string;
    age: number;
    image: string;
}

const localStorageUsers = localStorage.getItem('users');
console.log('Local storage users:', localStorageUsers);

const users: User[] = localStorageUsers ? JSON.parse(localStorageUsers) : [];
console.log('Parsed users from local storage:', users);

function renderUsers() {
    const userListElement = document.getElementById('user-list');
    if (userListElement) {
        userListElement.innerHTML = '';
        console.log('Rendering users...');

        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.classList.add('user');

            const nameElement = document.createElement('h3');
            nameElement.textContent = `Name: ${user.Name}`;

            const ageElement = document.createElement('p');
            ageElement.textContent = `Age: ${user.age}`;

            const imageElement = document.createElement('img');
            imageElement.src = user.image;
            imageElement.alt = `${user.Name}'s image`;
            imageElement.width = 100;

            userElement.appendChild(nameElement);
            userElement.appendChild(ageElement);
            userElement.appendChild(imageElement);

            userListElement.appendChild(userElement);
            console.log(`Added user to list: ${user.Name}, Age: ${user.age}`);
        });
    }
}

function addUser(event: Event) {
    event.preventDefault();

    const userNameInput = document.getElementById('name') as HTMLInputElement;
    const userAgeInput = document.getElementById('age') as HTMLInputElement;
    const userImageInput = document.getElementById('image') as HTMLInputElement;

    const userName = userNameInput.value;
    const userAge = Number(userAgeInput.value);
    const userImage = userImageInput.value;

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

document.getElementById('user-form')?.addEventListener('submit', addUser);
renderUsers();
