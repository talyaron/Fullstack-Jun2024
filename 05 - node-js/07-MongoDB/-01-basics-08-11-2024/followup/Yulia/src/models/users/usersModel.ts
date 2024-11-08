export default class User {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor( name: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export const users: User[] = [];