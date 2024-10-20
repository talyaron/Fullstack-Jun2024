import { User } from '../../model/userModel';
import { renderSettings } from '../settings/settingsPage';
import {renderProfile} from '../userPage/profilePage';

interface Message {
    id: number;
    content: string;
    sender: string;
    isRead: boolean;
}

const messages: Message[] = [
    { id: 1, content: 'Message from Teacher: "Great job on the last assignment!"', sender: 'Teacher', isRead: false },
    { id: 2, content: 'Message from Classmate: "Let\'s study together!"', sender: 'Classmate', isRead: false },
];

declare global {
    interface Window {
        editMessage: (id: number) => void;
        removeMessage: (id: number) => void;
    }
}

export function renderDashboard(loggedInUser: User): string {
    const content = `
        <div class="dashboard-container">
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
            <main>
                <h1>Dashboard</h1>
                <div class="dashboard-content">
                    <p>Welcome to your dashboard, ${loggedInUser.fullName}!</p>
                </div>
                <div class="user-info">
                    <h2>User Information</h2>
                    <p><strong>Name:</strong> ${loggedInUser.fullName}</p>
                    <p><strong>Email:</strong> ${loggedInUser.email}</p>
                    <p><strong>Phone:</strong> ${loggedInUser.phone}</p>
                    <img class="student-image" src="${loggedInUser.imageUrl || '.././src/images/student-image.png'}" alt="student image" />

                </div>
                <div class="dashboard-summary">
                    <div class="last-lesson">
                        <h2>Last Lesson</h2>
                        <p>${loggedInUser.lastLesson}</p>
                    </div>
                    <div class="grades">
                        <h2>Grade</h2>
                        <p>${loggedInUser.grade}</p>
                    </div>
                    <div class="attendance">
                        <h2>Attendance</h2>
                        <p>${loggedInUser.attendance}</p>
                    </div>
                </div>
                <div class="calendar-messages">
                    <div class="calendar-container">
                        <h2>Calendar</h2>
                        <div class="calendar">
                            <div class="calendar-header">
                                <h3>October 2024</h3>
                            </div>
                            <div class="calendar-days">
                                ${Array.from({ length: 7 }, (_, i) => `<div class="day">${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</div>`).join('')}
                                ${Array.from({ length: 31 }, (_, i) => `<div class="date">${i + 1}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="messages-container">
                        <h2>Messages</h2>
                        <div id="message-list">
                            ${renderMessages()}
                        </div>
                        <input class="input" type="text" id="new-message" placeholder="Add a new message" />
                        <button class="btn" id="add-message-button">Add Message</button>
                    </div>
                </div>
            </main>
        </div>
    `;

    setTimeout(() => {
        setupMessageListeners();
        window.editMessage = editMessage;
        window.removeMessage = removeMessage;
    }, 0);

    return content;
}

function renderMessages(): string {
    return messages.map(msg => `
        <div class="message">
            <input type="checkbox" id="msg-${msg.id}" ${msg.isRead ? 'checked' : ''} />
            <label for="msg-${msg.id}">${msg.content}</label>
            <button class="smallBtn" onclick="window.editMessage(${msg.id})">Edit</button>
            <button class="smallBtn" onclick="window.removeMessage(${msg.id})">Remove</button>
        </div>
    `).join('');
}

function setupMessageListeners(): void {
    const addMessageButton = document.getElementById('add-message-button') as HTMLButtonElement;
    const newMessageInput = document.getElementById('new-message') as HTMLInputElement;

    if (!addMessageButton || !newMessageInput) {
        console.error("Add message button or input not found");
        return;
    }

    addMessageButton.addEventListener('click', () => {
        const messageContent = newMessageInput.value.trim();
        if (messageContent) {
            addMessage(messageContent);
            newMessageInput.value = '';  
        } else {
            console.error("Message content is empty");
        }
    });
}

function addMessage(content: string): void {
    const newId = messages.length ? Math.max(...messages.map(msg => msg.id)) + 1 : 1;
    messages.push({ id: newId, content, sender: 'User', isRead: false });
    console.log("Message added:", messages);
    updateMessages(); 
}

function editMessage(id: number): void {
    const message = messages.find(msg => msg.id === id);
    if (message) {
        const newContent = prompt('Edit Message:', message.content);
        if (newContent !== null) {
            message.content = newContent.trim();
            updateMessages();
        }
    }
}

function removeMessage(id: number): void {
    const index = messages.findIndex(msg => msg.id === id);
    if (index !== -1) {
        messages.splice(index, 1);
        updateMessages();
    }
}

function updateMessages(): void {
    const messageList = document.getElementById('message-list') as HTMLElement;
    if (messageList) {
        messageList.innerHTML = renderMessages();
    } else {
        console.error("Message list not found");
    }
}
