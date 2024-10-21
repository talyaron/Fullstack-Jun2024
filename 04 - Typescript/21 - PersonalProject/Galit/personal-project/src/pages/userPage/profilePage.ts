import { User } from '../../model/userModel';
import { courses } from '../../model/courseModel';
import { handleLogout } from '../login/loginPage';

export function renderProfile(loggedInUser: User): string {
    const content = `
    <div class="profile-container">
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
                <li><a href="#logout" id="logout-link">Logout</a></li> 
            </ul>
        </nav>
        <div class="smallContainer">
            <h2>Hey, ${loggedInUser.fullName}</h2>
            <form id="profile-update-form">
                <div class="form-group">
                  <label for="lastLesson">Last Lesson</label>
                  <select class="input" id="lastLesson" name="lastLesson" required>
                      ${courses.map(course => `<option value="${course.course}" ${loggedInUser.lastLesson === course.course ? 'selected' : ''}>${course.course}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                    <label for="grade">Grade</label>
                    <input class="input" type="text" id="grade" name="grade" value="${loggedInUser.grade || ''}" required>
                </div>
                <div class="form-group">
                    <label for="attendance">Attendance</label>
                    <input class="input" type="number" id="attendance" name="attendance" value="${loggedInUser.attendance || 0}" required min="0" max="100">
                </div>
                <button class="btn" type="submit">Save Changes</button>
            </form>
        </div>
    </div>
    `;
    return content;
}

export function setupSettingsPageListeners() {
    try {
        setTimeout(() => {
            const logoutLink = document.getElementById('logout-link');
            if (logoutLink) {
                logoutLink.addEventListener('click', handleLogout);
            }
        }, 0);
    } catch (error) {
        console.error('Error setting up settings page listeners:', error);
    }
}

export function setupProfilePageListeners() {
    try {
        const form = document.getElementById('profile-update-form');
        if (!form) {
            throw new Error('Profile update form not found.');
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            try {
                const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

                const lastLesson = (document.getElementById('lastLesson') as HTMLInputElement).value;
                const grade = (document.getElementById('grade') as HTMLInputElement).value;
                const attendance = parseInt((document.getElementById('attendance') as HTMLInputElement).value, 10);

                loggedInUser.lastLesson = lastLesson;
                loggedInUser.grade = grade;
                loggedInUser.attendance = attendance;

                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

                alert('Profile updated successfully!');
            } catch (error) {
                console.error('Error updating profile:', error);
                alert('Failed to update profile. Please try again.');
            }
        });
    } catch (error) {
        console.error('Error setting up profile page listeners:', error);
    }
}
