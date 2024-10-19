import { User } from '../../model/userModel';

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
        <div class="header-navbar"> 
        <header>
                <div id="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                <img src="path/to/logo.png" alt="Logo" />
            </header>
            <nav class="navbar">
                <div class="navbar-logo">
                    <img src="path/to/logo.png" alt="Logo" />
                </div>
                <ul class="navbar-links">
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
                <div class="navbar-profile">
                    <img src="https://www.example.com/profile-icon.png" alt="Profile" />
                </div>
            </nav>
            </div>
                <h1>Dashboard</h1>
                <div class="dashboard-content">
                    <p>Welcome to your dashboard, ${loggedInUser.fullName}!</p>
                </div>
                <div class="user-info">
                    <h2>User Information</h2>
                    <p><strong>Name:</strong> ${loggedInUser.fullName}</p>
                    <p><strong>Email:</strong> ${loggedInUser.email}</p>
                    <p><strong>Phone:</strong> ${loggedInUser.phone}</p>
                    <div class="progress-circle" style="--percentage: 82;"></div>
                </div>
                <div class="dashboard-summary">
                    <div class="last-lesson">
                        <h2>Last Lesson</h2>
                        <p>TypeScript</p>
                    </div>
                    <div class="grades">
                        <h2>Grades</h2>
                        <p>82</p>
                    </div>
                    <div class="attendance">
                        <h2>Attendance</h2>
                        <p>Attendance Rate: 90%</p>
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
            </div>
        </div>
    `;

    document.body.innerHTML = content;

    document.addEventListener('DOMContentLoaded', () => {
        setupDashboardListeners();
        setupMessageListeners();
    });

    window.editMessage = editMessage;
    window.removeMessage = removeMessage;

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

export function setupDashboardListeners(): void {
    // Add any listeners for the dashboard here, if needed.
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
            newMessageInput.value = '';  // Clear the input field after adding the message
        } else {
            console.error("Message content is empty");
        }
    });
}

function addMessage(content: string): void {
    const newId = messages.length ? Math.max(...messages.map(msg => msg.id)) + 1 : 1;
    messages.push({ id: newId, content, sender: 'User', isRead: false });
    console.log("Message added:", messages);  // Verify the message was added to the array
    updateMessages();  // Refresh the message list after adding a new message
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