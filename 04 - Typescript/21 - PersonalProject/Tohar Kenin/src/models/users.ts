export class User {
    userName: string;
    id : string;
    email: string;
    password: string;
    phoneNumber?: string;
    courses: Course[];

    constructor (userName: string, email: string, password: string, phoneNumber: string) {
        this.id = crypto.randomUUID();
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    };

    addNewCourse(): courses[]{

    }

};





