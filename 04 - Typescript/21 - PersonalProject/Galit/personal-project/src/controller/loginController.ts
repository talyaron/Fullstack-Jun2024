import { loginUser } from './userController';

export function handleLogin(email: string, password: string): string {
    try {
        const user = loginUser(email, password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            return "Login successful!";
        }
        return "Invalid credentials.";
    } catch (error) {
        console.error("Error during login:", error);
        return "Login failed.";
    }
}