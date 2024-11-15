
document.addEventListener("DOMContentLoaded", (event) => {
    getAllUsers();
  });
  
async function handleSendUser(event: Event) {
    try {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const phone = formData.get('phone') as string;
        const response = await fetch('/api/users/send-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, phone})
        });
        // console.log(name, email, password, phone)

        if (!response.ok) throw new Error('Failed to create User data');
        await getAllUsers();
    } catch (error) {
        console.error(error);
    }
}


async function getAllUsers() {
    try {
        const response = await fetch('/api/users/get-user');
        const allUsers = await response.json();
        console.log(allUsers)
        const userContainer = document.querySelector("#users") as HTMLDivElement;
        if (!userContainer) throw new Error('No Users container found');
        userContainer.innerHTML = '';

        allUsers.forEach(user => {
            // console.log('User:', user); // Some Testing to check all users working well good.
            // console.log("User ID:", user.id); // Some Testing to check what the id number of user.
            const userElement = document.createElement("div");
            userElement.setAttribute("data-id", user.id);
            userElement.classList.add("user");
            userElement.innerHTML = `
                <h2 class="user-name">${user.name}</h2>
                <p class="user-email">${user.email}</p>
                <p class="user-password">${user.password}</p>
                <p class="user-phone">${user.phone}</p>

                <button class="update-button" onclick="toggleUpdateUser('${user.id}')">Update</button>
                <button class="delete-button" onclick="deleteUser('${user.id}')">Delete</button>
            `;
            userContainer.appendChild(userElement);
        });
    } catch (error) {
        console.error(error)
    }
}



async function deleteUser(_id: string) {
    try {
        if (!_id) throw new Error('User ID is missing');
        const response = await fetch('/api/users/delete-user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _id })
        });

        if (!response.ok) {
            throw new Error('Failed to delete user.');
        }

        const data = await response.json();
        console.log(data.message); 
        await getAllUsers();
    } catch (error) {
        console.error(error); 
    }
}

async function updateUser(id: string, name: string, email: string, password: string, phone: string) {
    try {
        const response = await fetch(`/api/users/update-user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, email, password, phone })
        });

        if (!response.ok) throw new Error('Failed to update User');
        console.log("User updated successfully");
        await getAllUsers();

    } catch (error) {
        console.error(error);
    }
}

async function toggleUpdateUser(id: string) {
    try {
        const userElement = document.querySelector(`.user[data-id='${id}']`);
        if (!userElement) throw new Error("User Element Not Found");
    
        const nameElement = userElement.querySelector('.user-name') as HTMLHeadingElement;
        const emailElement = userElement.querySelector('.user-email') as HTMLParagraphElement;
        const passwordElement = userElement.querySelector('.user-password') as HTMLParagraphElement;
        const phoneElement = userElement.querySelector('.user-phone') as HTMLParagraphElement;
    
        if (!nameElement || !emailElement || !passwordElement || !phoneElement) throw new Error("One or more elements not found for the user");
    
        if (nameElement.isContentEditable) {
            const updatedName = nameElement.innerText;
            const updatedEmail = emailElement.innerText;
            const updatedPassword = passwordElement.innerText;
            const updatedPhone = phoneElement.innerText;
    
            await updateUser(id, updatedName, updatedEmail, updatedPassword, updatedPhone);
            nameElement.contentEditable = "false";
            emailElement.contentEditable = "false"; 
            passwordElement.contentEditable = "false"; 
            phoneElement.contentEditable = "false"; 
    
        } else {
            nameElement.contentEditable = "true";
            emailElement.contentEditable = "true"; 
            passwordElement.contentEditable = "true"; 
            phoneElement.contentEditable = "true"; 
            nameElement.focus();
        } 
    } catch (error) {
        console.error(error)
    }
}