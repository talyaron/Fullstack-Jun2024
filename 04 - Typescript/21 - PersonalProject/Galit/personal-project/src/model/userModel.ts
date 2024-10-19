export class User {
    fullName: string;
    id: string;
    email: string;
    password: string;
    phone?: string;
    courses: string[] = [];

    constructor(fullName: string, email: string, password: string, phone: string) {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}

export const users: User[] = [  
    new User("Meital", "meital@gmail.com", "12345678", "0505555555"),
    new User("Noa", "Noa@mail.com", "12345678", "0521234567"),
    new User("Galit", "galit@mail.com", "12345678", "0521234567"),
];

export function getUserDetails(): User | null {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
        return JSON.parse(storedUser);
    }
    return null;
}

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
    return phone.length === 10; 
}
