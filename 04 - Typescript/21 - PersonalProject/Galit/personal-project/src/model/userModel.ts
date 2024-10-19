export class User {
    fullName: string;
    id: string;
    email: string;
    password: string; 
    phone?: string;

    constructor(fullName: string, email: string, password: string, phone?: string) {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email.toLowerCase();
        this.password = password; 
        this.phone = phone;
    }
}
