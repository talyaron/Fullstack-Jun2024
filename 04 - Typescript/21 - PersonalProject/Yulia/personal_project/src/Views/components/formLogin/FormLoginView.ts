export class FormLogin {
  createForm(): HTMLElement {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const formElement = document.createElement("form");

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

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Login";
    submitButton.classList.add("form-container__button");

    formElement.appendChild(emailInput);
    formElement.appendChild(passwordInput);
    formElement.appendChild(submitButton);

    // Create "Go to Register" button
    const goToRegisterButton = document.createElement("button");
    goToRegisterButton.textContent = "Go to Register";
    goToRegisterButton.classList.add("form-container__button");
    goToRegisterButton.onclick = () => (window.location.hash = "#register");

    formElement.appendChild(goToRegisterButton);

    formContainer.appendChild(formElement); // Add the form inside the container
    const app = document.querySelector("#app");
    if (app) {
      app.appendChild(formContainer); // Append the formContainer
    }

    return formContainer; // Return formContainer instead of formElement
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const email = (
      form.querySelector('input[name="email"]') as HTMLInputElement
    ).value;
    const password = (
      form.querySelector('input[name="password"]') as HTMLInputElement
    ).value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const storedUser = users.find(
      (user: { email: string }) => user.email === email
    );

    if (storedUser && storedUser.password === password) {
      alert("Login successful!");
      window.location.hash = "#main";
    } else {
      alert("Invalid email or password.");
    }
  }
}
