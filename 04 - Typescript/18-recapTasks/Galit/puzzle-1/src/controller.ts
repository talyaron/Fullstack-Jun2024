import { UserModel, UserRegistration } from './model';
import { FormValidator } from './formValidator';

export class UserController {
    private validator: FormValidator;

    constructor() {
        this.validator = new FormValidator();
    }

    public registerUser(data: UserRegistration): string {
        const { email, phone, password, repeatPassword } = data;

        if (!this.validator.validateEmail(email)) {
            return 'Invalid email format.';
        }
        if (!this.validator.validatePhone(phone)) {
            return 'Invalid phone number format. Must be 10 digits.';
        }
        if (!this.validator.validatePassword(password)) {
            return 'Password must be at least 8 characters long and contain at least one letter and one number.';
        }
        if (password !== repeatPassword) {
            return 'Passwords do not match.';
        }

        const user = new UserModel(data);
        this.saveUser(user); 
        return 'User registered successfully!';
    }

    private saveUser(user: UserModel) {
       
        console.log('User saved:', user.getData());
    }
}
