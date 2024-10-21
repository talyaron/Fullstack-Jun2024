import { User } from '../model/userModel';

const USERS_KEY = 'users';
const LOGGED_IN_USER_KEY = 'loggedInUser'; 

export function loadUsers(): User[] {
    try {
        const usersData = localStorage.getItem(USERS_KEY);
        return usersData ? JSON.parse(usersData) : [];
    } catch (error) {
        console.error("Error loading users from localStorage:", error);
        return [];
    }
}

export function saveUsers(users: User[]): void {
    try {
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (error) {
        console.error("Error saving users to localStorage:", error);
    }
}

export function saveLoggedInUser(user: User): void {
    try {
        localStorage.setItem(LOGGED_IN_USER_KEY, JSON.stringify(user));
    } catch (error) {
        console.error("Error saving logged in user to localStorage:", error);
    }
}

export function loadLoggedInUser(): User | null {
    try {
        const userData = localStorage.getItem(LOGGED_IN_USER_KEY);
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error("Error loading logged in user from localStorage:", error);
        return null;
    }
}

export function registerUser(
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string
): User {
    const users = loadUsers();

    if (password !== confirmPassword) throw new Error("Passwords do not match.");
    if (!validateEmail(email)) throw new Error("Invalid email format.");
    if (!validatePhone(phone)) throw new Error("Phone number must be 10 digits.");

    const existingUser = users.find(user => user.email === email.toLowerCase());
    if (existingUser) throw new Error("User with this email already exists.");

    const newUser = new User(fullName, email.toLowerCase(), password, phone);
    users.push(newUser);
    saveUsers(users);
    return newUser;
}

export function loginUser(email: string, password: string): User | null {
    const users = loadUsers();
    const user = users.find(user => user.email === email.toLowerCase());
    if (!user || user.password !== password) throw new Error("Invalid email or password.");
    saveLoggedInUser(user); 
    return user;
}

export function logoutUser(): void {
    try {
        localStorage.removeItem(LOGGED_IN_USER_KEY);
    } catch (error) {
        console.error("Error during logout:", error);
    }
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
    return /^\d{10}$/.test(phone);
}
