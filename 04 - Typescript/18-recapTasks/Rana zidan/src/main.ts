class FormValidator {
  private emailPattern: RegExp;
  private phonePattern: RegExp;
  private passwordPattern: RegExp;

  constructor() {
    
    this.emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    this.phonePattern = /^\+?\d{0,10}$/;
    
    this.passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  }

  public validateEmail(email: string): string | null {
    return this.emailPattern.test(email) ? null : "Invalid email address.";
  }

  public validatePhone(phone: string): string | null {
    return this.phonePattern.test(phone) ? null : "Invalid phone number.";
  }

  public validatePassword(password: string): string | null {
    return this.passwordPattern.test(password) ? null : "Password is too weak.";
  }
}


const form = document.getElementById('myForm') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone-number') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;

const validator = new FormValidator();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  
  const emailError = validator.validateEmail(emailInput.value);
  const phoneError = validator.validatePhone(phoneInput.value);
  const passwordError = validator.validatePassword(passwordInput.value);

  if (emailError) {
    alert(emailError);
    isValid = false;
  }

  if (phoneError) {
    alert(phoneError);
    isValid = false;
  }

  if (passwordError) {
    alert(passwordError);
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.submit();
  }
});

