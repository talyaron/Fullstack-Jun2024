
export class User {
    fullName: string;
    id: string;
    email: string;
    password: string; 
    phone?: string;
    courses: string[] = [];

    constructor(fullName: string, email: string, password: string, phone?: string) {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email.toLowerCase();
        this.password = password; 
        this.phone = phone;
    }
}

export const users: User[] = [
    new User("Meital", "meital@gmail.com", "12345678", "0505555555"),
    new User("Noa", "noa@mail.com", "12345678", "0521234567"),
    new User("Galit", "galit@mail.com", "12345678", "0521234567"),
];