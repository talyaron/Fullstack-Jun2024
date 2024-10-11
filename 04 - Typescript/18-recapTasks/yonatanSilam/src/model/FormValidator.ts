export class FormValidator{
    email: string;
    phoneNumber:string;
    password:string;
    constructor(email: string, phoneNumber: string,password: string) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
      }
}
