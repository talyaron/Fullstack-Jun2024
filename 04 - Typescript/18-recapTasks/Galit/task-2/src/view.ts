import { UserProfile } from './controller';
import { UserProfile } from './model.ts';

const userController = new UserController();

export function editUser(): string {
    return `
    <h1>User Profile Editor</h1>
    <div class="container">
        <form id="userForm">
            <input type="text" id="name" placeholder="Name" required />
            <input type="email" id="email" placeholder="Email" required />
            <textarea id="bio" placeholder="Bio"></textarea>
            <button type="submit">Save Profile</button>
        </form>

        <div id="userList"></div>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm') as HTMLFormElement;
    form.onsubmit = (event) => {
        event.preventDefault(); 

        const data: UserRegistration = {
            fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            password: (form.elements.namedItem('password') as HTMLInputElement).value,
            repeatPassword: (form.elements.namedItem('repeatPassword') as HTMLInputElement).value,
        };

        const result = userController.registerUser(data);
        const errorMessageElement = document.getElementById('errorMessage') as HTMLElement;
        errorMessageElement.innerText = result;
    };
});
