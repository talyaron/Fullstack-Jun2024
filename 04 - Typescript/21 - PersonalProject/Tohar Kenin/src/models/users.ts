export class User {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;
    courses: string[] = [];

    constructor (userName: string, email: string, password: string, phoneNumber: string) {
        this.id = crypto.randomUUID();
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}

export const users: User[] = [  
    new User("Aviad", "aviad@mail.com", "1234", "052-1234567"),
    new User("Yonatan", "yonatan@mail.com", "1234", "052-1234567"),
    new User("Rana", "rana@mail.com", "1234", "052-1234567"),
];




