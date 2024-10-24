export class User {
    fullName: string;
    id: string;
    email: string;
    password: string; 
    phone?: string;
    imageUrl?:string;
    lastLesson?: string; 
    grade?: string;    
    attendance?: number;

    constructor(fullName: string, email: string, password: string, phone?: string, imageUrl?: string) {
        this.fullName = fullName;
        this.id = crypto.randomUUID();
        this.email = email.toLowerCase();
        this.password = password; 
        this.phone = phone;
        this.imageUrl = imageUrl;
    }
}
