import { FormLogin } from "../../components/formLogin/FormLoginView";

export function renderLoginPage(): void {
  const formLogin = new FormLogin();
  const formElement = formLogin.createForm();
  const app = document.querySelector("#app");

  if (app) {
    app.innerHTML = ""; // clear app container before adding form
    app.appendChild(formElement); // append the form to #app
  }
}

// Entry point
document.addEventListener("DOMContentLoaded", () => {
  renderLoginPage();
});
