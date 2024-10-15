export class FormValidator {
    private emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    private phonePattern: RegExp = /^\d{10}$/; 
    private passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    public validateEmail(email: string): boolean {
        return this.emailPattern.test(email);
    }

    public validatePhone(phone: string): boolean {
        return this.phonePattern.test(phone);
    }

    public validatePassword(password: string): boolean {
        return this.passwordPattern.test(password);
    }
}
