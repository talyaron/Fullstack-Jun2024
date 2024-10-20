class User {
    email: string;
    password: string;
    username: string;
    phoneNumber: string;

    constructor(email: string, password: string, username: string, phoneNumber: string) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.phoneNumber = phoneNumber;
    }

    saveToLocalStorage() {
        localStorage.setItem(this.email, JSON.stringify(this));
    }

    static loadFromLocalStorage(email: string): User | null {
        const storedUser = localStorage.getItem(email);
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            return new User(userData.email, userData.password, userData.username, userData.phoneNumber);
        }
        return null;
    }
}
