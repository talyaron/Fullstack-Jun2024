



export class User{
    id:string;
    name: string;
    email: string;
    password: string;
    constructor(name: string, email: string, password: string,id:string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id=id
    }
    login(): void {
        console.log("User logged in successfully!");
    }
}

export const users:User[]=[];