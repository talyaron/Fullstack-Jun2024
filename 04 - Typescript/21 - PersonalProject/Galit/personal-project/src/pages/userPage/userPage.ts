import { createContainer } from '../../components/container/container';
import { createHeader } from '../../components/header/header';
import { getUserDetails } from '../../model/userModel';

export function renderUserPage(): string {
    const user = getUserDetails();
    
    if (!user) {
        alert("User not logged in");
        window.location.href = 'login.html';
        return "<div>Redirecting...</div>";
    }

    const content = `
        <div class="user-page-container">
            ${createHeader()}
            <div class="user-details">
                <h2>Welcome, ${user.fullName}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <button id="logoutButton">Logout</button>
            </div>
        </div>
    `;

    setTimeout(() => {
        const logoutButton = document.getElementById("logoutButton");
        if (logoutButton) {
            logoutButton.addEventListener("click", handleLogout);
        }
    }, 0);

    return createContainer(content);
}

function handleLogout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = './login.ts'; 
}
