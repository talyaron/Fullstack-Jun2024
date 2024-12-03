import { User } from "../../../Models/entities/userModel";

export class FormRegister {
  createForm(): HTMLElement {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const formElement = document.createElement("form");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.name = "name";
    nameInput.required = true;
    nameInput.classList.add("form-container__input");

    const phoneInput = document.createElement("input");
    phoneInput.type = "tel";
    phoneInput.placeholder = "Phone";
    phoneInput.name = "phone";
    phoneInput.required = true;
    phoneInput.classList.add("form-container__input");

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    emailInput.name = "email";
    emailInput.required = true;
    emailInput.classList.add("form-container__input");

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Password";
    passwordInput.name = "password";
    passwordInput.required = true;
    passwordInput.classList.add("form-container__input");

    const repeatPasswordInput = document.createElement("input");
    repeatPasswordInput.type = "password";
    repeatPasswordInput.placeholder = "Repeat password";
    repeatPasswordInput.name = "repeatPassword";
    repeatPasswordInput.required = true;
    repeatPasswordInput.classList.add("form-container__input");

    const agreeCheckbox = document.createElement("input");
    agreeCheckbox.type = "checkbox";
    agreeCheckbox.classList.add("form-container__checkbox");

    const agreeLabel = document.createElement("label");
    agreeLabel.textContent = "I Agree to terms and conditions";
    agreeLabel.classList.add("form-container__checkbox-label");
    agreeLabel.insertBefore(agreeCheckbox, agreeLabel.firstChild);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Register";
    submitButton.classList.add("form-container__button");

    formElement.appendChild(nameInput);
    formElement.appendChild(phoneInput);
    formElement.appendChild(emailInput);
    formElement.appendChild(passwordInput);
    formElement.appendChild(repeatPasswordInput);
    formElement.appendChild(agreeLabel);
    formElement.appendChild(submitButton);

    // Create "Go to Login" button
    const goToLoginButton = document.createElement("button");
    goToLoginButton.textContent = "Go to Login";
    goToLoginButton.classList.add("form-container__button");
    goToLoginButton.onclick = () => (window.location.hash = "#login");

    formElement.appendChild(goToLoginButton);

    formContainer.appendChild(formElement);

    // Append to #app container
    const app = document.querySelector("#app");
    if (app) {
      app.appendChild(formContainer);
    }

    return formContainer;
  }

  handleSubmit(event: Event) {
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
    const repeatPassword = (
      form.querySelector('input[name="repeatPassword"]') as HTMLInputElement
    ).value;
    const agreeToTerms = (
      form.querySelector('input[type="checkbox"]') as HTMLInputElement
    ).checked;

    // Validate passwords
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if user agreed to the terms and conditions
    if (!agreeToTerms) {
      alert("You must agree to the terms and conditions to register!");
      return;
    }

    // Save the registered data into LocalStorage
    const newUser = new User(name, email, password, phone);
    newUser.saveToLocalStorage();

    window.location.hash = "#login";
  }
}
