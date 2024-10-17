export class FormValidator
{
    private email: string;
    private password: string;
    private phoneNumber: string;

    constructor(email: string, password: string, phoneNumber: string)
    {
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    validateEmail(): string | null
    {
        const emailRegex = /^[^\s@]+@[^\s\W]+\.[^\s\W]+$/;
        if (emailRegex.test(this.email)) return null;
        return "Invalid email format";
    }

    validatePhoneNumber(): string | null
    {
        const phoneNumberRegex = /^05\d{8}$/;
        if (phoneNumberRegex.test(this.phoneNumber)) return null;
        return "Invalid phone number.";
    }

    validatePassword(): string | null
    {
        let message : string = "";

        if (!/.*[a-z]/.test(this.password)) message+="must include a lowercase character, ";
        if (!/.*[A-Z]/.test(this.password)) message+="must include an uppercase character, ";
        if (!/.*\d/.test(this.password)) message+="must include a digit, ";
        if (!/.*[@$!%*?&]/.test(this.password)) message+="must include a special character, ";
        if (!/[A-Za-z\d@$!%*?&]{8,32}/.test(this.password)) message+="must be between 8 and 32 VALID characters, "

        if (!message) return null;
        return (message.slice(0, -2) + ".");
    }
}