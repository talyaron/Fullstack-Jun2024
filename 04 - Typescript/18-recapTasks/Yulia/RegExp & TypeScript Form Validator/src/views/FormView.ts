// views/FormView.ts
export class FormView {
  private emailInput: HTMLInputElement;
  private phoneInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private emailError: HTMLSpanElement;
  private phoneError: HTMLSpanElement;
  private passwordError: HTMLSpanElement;

  constructor() {
    this.emailInput = document.querySelector("#email") as HTMLInputElement;
    this.phoneInput = document.querySelector("#phone") as HTMLInputElement;
    this.passwordInput = document.querySelector(
      "#password"
    ) as HTMLInputElement;
    this.emailError = document.querySelector("#emailError") as HTMLSpanElement;
    this.phoneError = document.querySelector("#phoneError") as HTMLSpanElement;
    this.passwordError = document.querySelector(
      "#passwordError"
    ) as HTMLSpanElement;
  }

  public getEmail(): string {
    return this.emailInput.value;
  }

  public getPhone(): string {
    return this.phoneInput.value;
  }

  public getPassword(): string {
    return this.passwordInput.value;
  }

  public displayEmailError(message: string | null): void {
    this.emailError.textContent = message || "";
  }

  public displayPhoneError(message: string | null): void {
    this.phoneError.textContent = message || "";
  }

  public displayPasswordError(message: string | null): void {
    this.passwordError.textContent = message || "";
  }
}
