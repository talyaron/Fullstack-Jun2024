import { UserModel, UserRegistration } from './model';
import { FormValidator } from './formValidator';

export class UserController {
    private validator: FormValidator;

    constructor() {
        this.validator = new FormValidator();
    }

    public registerUser(data: UserRegistration): void { 
        const { email, phone, password, repeatPassword } = data;

        const errorMessageDiv = document.getElementById('errorMessage');
        const successMessageDiv = document.getElementById('successMessage');

        if (errorMessageDiv) errorMessageDiv.textContent = '';
        if (successMessageDiv) successMessageDiv.textContent = '';

        if (!this.validator.validateEmail(email)) {
            if (errorMessageDiv) errorMessageDiv.textContent = 'Invalid email format.';
            return;
        }
        if (!this.validator.validatePhone(phone)) {
            if (errorMessageDiv) errorMessageDiv.textContent = 'Invalid phone number format. Must be 10 digits.';
            return;
        }
        if (!this.validator.validatePassword(password)) {
            if (errorMessageDiv) errorMessageDiv.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
            return;
        }
        if (password !== repeatPassword) {
            if (errorMessageDiv) errorMessageDiv.textContent = 'Passwords do not match.';
            return;
        }

        const user = new UserModel(data);
        this.saveUser(user);
        
        if (successMessageDiv) successMessageDiv.textContent = 'User registered successfully!';
    }

    private saveUser(user: UserModel) {
        console.log('User saved:', user.getData());
    }
}