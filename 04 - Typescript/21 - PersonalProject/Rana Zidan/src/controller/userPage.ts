import './user.scss';
import logoImage from '../images/logo1.png'; 
import studentImage from '../images/student.png'; 

interface Information {
    name: string | null;
    email: string | null;
    welcomeMessage: string;
}



export const userPage = () => {
    const userDetails: Information = {
        name: localStorage.getItem('fullName'),
        email: localStorage.getItem('email'),
        welcomeMessage: "Welcome back!",
    };

    return `
        <div class="userpage">
            <div class="sidebar">
                <img src="${logoImage}" alt="Logo" class="logo" /> 
                <div class="menu-item" style="padding-bottom: 2vh;">My Account</div>
                <div class="menu-item active">Courses</div>
                <div class="menu-item">Zoom</div>
                <div class="menu-item">Forum</div>
                <a href="/login.html" class="menu-Logout" id="Logout" style="text-decoration: none;">Logout</a>
            </div>
            <div class="main-content">
                <div class="header">
                    <input type="text" placeholder="search" class="search-input" />
                    <img src="${studentImage}" alt="User Image" class="user-image" />
                </div>
                <div class="user-details">
                <h3>User Information</h3>
                    <p>Name: ${userDetails.name}</p>
                    <p>Email: ${userDetails.email}</p>
                    <p>${userDetails.welcomeMessage}</p>
                </div>
                <div class="course-list">
                    <button class="course-list-button">Courses List</button>
                    <div class="course-item">1. Html</div>
                    <div class="course-item">2. Algorithms</div>
                    <div class="course-item">3. Data Science</div>
                    <div class="course-item">4. Databases</div>
                    <div class="course-item">5. Java Script</div>
                </div>
                <div class="buttons">
                <button class="zoom">Zoom</button>
                <button class="whatsApp">WhatsApp</button>
                <button class="google">Instagram</button>
                </div>
                <div class="calendar">
                    <div class="calendar-grid">
                        <div class="day">Sun</div>
                        <div class="day">Mon</div>
                        <div class="day">Tue</div>
                        <div class="day">Wed</div>
                        <div class="day">Thu</div>
                        <div class="day">Fri</div>
                        <div class="day">Sat</div>
                        <!-- מספרי הימים -->
                        <div class="date">1</div>
                        <div class="date">2</div>
                        <div class="date">3</div>
                        <div class="date">4</div>
                        <div class="date">5</div>
                        <div class="date">6</div>
                        <div class="date">7</div>
                        <div class="date">8</div>
                        <div class="date">9</div>
                        <div class="date">10</div>
                        <div class="date">11</div>
                        <div class="date">12</div>
                        <div class="date">13</div>
                        <div class="date">14</div>
                        <div class="date">15</div>
                        <div class="date">16</div>
                        <div class="date">17</div>
                        <div class="date">18</div>
                        <div class="date">19</div>
                        <div class="date">20</div>
                        <div class="date">21</div>
                        <div class="date">22</div>
                        <div class="date">23</div>
                        <div class="date">24</div>
                        <div class="date">25</div>
                        <div class="date">26</div>
                        <div class="date">27</div>
                        <div class="date">28</div>
                        <div class="date">29</div>
                        <div class="date">30</div>
                        <div class="date">31</div>
                    </div>
                </div>
            </div>
        </div>
    `;
};








