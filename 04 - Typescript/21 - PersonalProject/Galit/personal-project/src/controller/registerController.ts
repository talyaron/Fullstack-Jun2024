
interface Message {
    id: number;
    content: string;
    sender: string;
    isRead: boolean;
}

const MESSAGES_KEY = 'messages';

const defaultMessages: Message[] = [
    { id: 1, content: 'Message from Teacher: "Great job on the last assignment!"', sender: 'Teacher', isRead: false },
    { id: 2, content: 'Message from Classmate: "Let\'s study together!"', sender: 'Classmate', isRead: false },
];

export function loadMessages(): Message[] {
    try {
        const messagesData = localStorage.getItem(MESSAGES_KEY);
        return messagesData ? JSON.parse(messagesData) : defaultMessages;
    } catch (error) {
        console.error("Error loading messages from localStorage:", error);
        return defaultMessages;
    }
}

export function saveMessages(messages: Message[]): void {
    try {
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    } catch (error) {
        console.error("Error saving messages to localStorage:", error);
    }
}
