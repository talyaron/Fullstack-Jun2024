import { FormValidator } from "../models/FormValidator";
import { FormView } from "../views/FormView";

export class FormController {
  private formValidator: FormValidator;
  private formView: FormView;

  constructor(formValidator: FormValidator, formView: FormView) {
    this.formValidator = formValidator;
    this.formView = formView;
  }

  public init(): void {
    const form = document.querySelector("#validationForm") as HTMLFormElement;
    form.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      this.validateForm();
    });
  }

  private validateForm(): void {
    const email = this.formView.getEmail();
    const phone = this.formView.getPhone();
    const password = this.formView.getPassword();

    const emailError = this.formValidator.validateEmail(email);
    const phoneError = this.formValidator.validatePhone(phone);
    const passwordError = this.formValidator.validatePassword(password);

    this.formView.displayEmailError(emailError);
    this.formView.displayPhoneError(phoneError);
    this.formView.displayPasswordError(passwordError);

    if (!emailError && !phoneError && !passwordError) {
      alert("Form submitted successfully!");
    }
  }
}
