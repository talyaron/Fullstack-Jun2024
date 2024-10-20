import { User } from '../../model/userModel';


export function renderSettings(loggedInUser: User): string {
    const content = `
    <div class="settings-container">
                   <header >
                <div id="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                    <img class="student-image" src="${loggedInUser.imageUrl || '.././src/images/student-image.png'}" alt="student image" />
            </header>
            <nav class="navbar">
                <div class="navbar-logo">
                    <img class="logo" src=".././src/images/logo.png" alt="Logo" />
                </div>
                <ul class="navbar-links">
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
            </nav>
        <div class="container">
        <h2> change user data </h2>
            <form id="user-settings-form">
                <div class="form-group">
                    <label for="profileImage">Profile Image:</label>
                    <input class="input" type="file" id="profileImage" name="profileImage" accept="image/*">
                </div>
                <div class="form-group">
                    <label for="fullName">Full Name:</label>
                    <input class="input" type="text" id="fullName" name="fullName" value="${loggedInUser.fullName}" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input class="input" type="email" id="email" name="email" value="${loggedInUser.email}" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input class="input" type="tel" id="phone" name="phone" value="${loggedInUser.phone || ''}">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input  class="input" type="password" id="password" name="password"  value="${loggedInUser.password || ''}">
                </div>
                <button class="btn" type="submit">Save Changes</button>
            </form>
        </div>
    </div>
    `;    document.body.innerHTML = content;
    return content;
}

export function setupSettingsPageListeners(loggedInUser: User) {
    const form = document.getElementById('user-settings-form');
    
    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const profileImage = (document.getElementById('profileImage') as HTMLInputElement).files?.[0];

        loggedInUser.fullName = fullName;
        loggedInUser.email = email.toLowerCase();
        loggedInUser.phone = phone || loggedInUser.phone;

        if (profileImage) {
            const reader = new FileReader();
            reader.onload = () => {
                loggedInUser.imageUrl = reader.result as string;
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        
                const imageElement = document.querySelector('.student-image-preview') as HTMLImageElement;
                if (imageElement) {
                    imageElement.src = loggedInUser.imageUrl;
                }
            };
            reader.readAsDataURL(profileImage);
        }

        if (password) {
            loggedInUser.password = password;
        }

        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

        alert('Settings saved successfully!');
    });
}
