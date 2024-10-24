import { User } from "../Models/entities/userModel";
import { FormRegister } from "../Views/components/formRegister/FormRegisterView";

export class RegisterController {
  private formRegister: FormRegister;

  constructor() {
    this.formRegister = new FormRegister();
  }

  init(): void {
    const app = document.querySelector("#app");
    if (app) {
      app.innerHTML = "";
    }

    const formElement = this.formRegister.createForm();
    formElement.addEventListener(
      "submit",
      this.handleRegisterFormSubmit.bind(this)
    );
  }

  private handleRegisterFormSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.querySelector('input[name="name"]') as HTMLInputElement)
      .value;
    const phone = (
      form.querySelector('input[name="phone"]') as HTMLInputElement
    ).value;
    const email = (
      form.querySelector('input[name="email"]') as HTMLInputElement
    ).value;
    const password = (
      form.querySelector('input[name="password"]') as HTMLInputElement
    ).value;

    // check if user with this email already exists
    const existingUser = User.findUserByEmail(email);
    if (existingUser) {
      alert("User with this email already exists!");
      return;
    }

    const newUser = new User(name, email, password, phone);
    newUser.saveToLocalStorage();

    // Save the current user's email in localStorage
    localStorage.setItem("currentUserEmail", email);
    
    form.reset(); // clear the form
    window.location.hash = "#login"; // redirect to login page
  }
}
