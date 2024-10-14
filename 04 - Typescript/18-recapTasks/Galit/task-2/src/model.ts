export interface UserProfile {
    name: string;
    email: string;
    bio: string;
    image: string;
}

export class UserModel {
    private data: UserProfile;

    constructor(data: UserProfile) {
        this.data = data;
    }

    public getData(): UserProfile {
        return this.data;
    }

}
