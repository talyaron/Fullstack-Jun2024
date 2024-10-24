import { FormLogin } from "../Views/components/formLogin/FormLoginView";
import { User } from "../Models/entities/userModel";

export class LoginController {
  private formLogin: FormLogin;

  constructor() {
    this.formLogin = new FormLogin();
  }

  init(): void {
    const app = document.querySelector("#app");
    if (app) {
      app.innerHTML = ""; // Clear app container
    }

    const formElement = this.formLogin.createForm();
    formElement.addEventListener(
      "submit",
      this.handleLoginFormSubmit.bind(this)
    );
  }

  private handleLoginFormSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const email = (
      form.querySelector('input[name="email"]') as HTMLInputElement
    ).value;
    const password = (
      form.querySelector('input[name="password"]') as HTMLInputElement
    ).value;

    const users = User.getUsersFromLocalStorage();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login successful!");

      // Save the current user's email in localStorage
      localStorage.setItem("currentUserEmail", email);

      window.location.hash = "#main";
    } else {
      alert("Invalid email or password.");
    }
  }
}
