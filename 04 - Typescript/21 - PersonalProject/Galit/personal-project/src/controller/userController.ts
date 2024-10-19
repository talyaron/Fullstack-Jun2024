import { User } from '../model/userModel';

const USERS_KEY = 'users';

export function loadUsers(): User[] {
    const usersData = localStorage.getItem(USERS_KEY);
    return usersData ? JSON.parse(usersData) : [];
}

export function saveUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string
): User {
    const users = loadUsers(); // Load users from localStorage

    if (password !== confirmPassword) {
        throw new Error("Passwords do not match.");
    }

    if (!validateEmail(email)) {
        throw new Error("Invalid email format.");
    }

    if (!validatePhone(phone)) {
        throw new Error("Phone number must be 10 digits.");
    }

    const existingUser = users.find(user => user.email === email.toLowerCase());
    if (existingUser) {
        throw new Error("User with this email already exists.");
    }

    const newUser = new User(fullName, email.toLowerCase(), password, phone);
    users.push(newUser);
    
    saveUsers(users); 

    return newUser;
}

export function loginUser(email: string, password: string): User | null {
    const users = loadUsers(); 
    const user = users.find(user => user.email === email.toLowerCase());

    if (!user) {
        throw new Error("User not found.");
    }

    if (user.password !== password) {
        throw new Error("Incorrect password.");
    }

    return user;
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
    return /^\d{10}$/.test(phone);
}