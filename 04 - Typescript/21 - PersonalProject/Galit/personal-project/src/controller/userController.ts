import { User, users, validateEmail, validatePhone } from '../model/userModel';

export function registerUser(fullName: string, email: string, password: string, confirmPassword: string, phone: string): string {
    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }
    
    if (!validateEmail(email)) {
        return "Invalid email format.";
    }
    
    if (!validatePhone(phone)) {
        return "Phone number must be 10 digits.";
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return "User with this email already exists.";
    }

    const newUser = new User(fullName, email, password, phone);
    users.push(newUser);

    return "User registered successfully!";
}

export function loginUser(email: string, password: string): User | null {
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error("User not found.");
    }

    if (user.password !== password) {
        throw new Error("Incorrect password.");
    }

    return user;
}

export function getUserByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
}

export function getUserById(id: string): User | undefined {
    return users.find(user => user.id === id);
}

export function updateUser(id: string, updatedData: Partial<User>): string {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error("User not found.");
    }

    user.fullName = updatedData.fullName ?? user.fullName;
    user.email = updatedData.email ?? user.email;
    user.phone = updatedData.phone ?? user.phone;
    user.password = updatedData.password ?? user.password;

    return "User updated successfully!";
}

export function deleteUser(id: string): string {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        throw new Error("User not found.");
    }

    users.splice(index, 1); 
    return "User deleted successfully!";
}