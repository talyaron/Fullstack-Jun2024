export class User {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;
    courses: string[];

    constructor (userName: string, email: string, password: string, 
        phoneNumber: string, id?:string, courses?: string[]) {
        id ? this.id = id : this.id = crypto.randomUUID();
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        courses ? this.courses = courses : this.courses = [];
    };

};



