export interface UserRegistration {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    repeatPassword: string;
}

export class UserModel {
    private data: UserRegistration;

    constructor(data: UserRegistration) {
        this.data = data;
    }

    public getData(): UserRegistration {
        return this.data;
    }

}
