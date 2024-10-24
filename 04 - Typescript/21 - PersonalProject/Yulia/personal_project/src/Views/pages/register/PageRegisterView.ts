import { FormRegister } from "../../components/formRegister/FormRegisterView";

// Function to render the register page view
export function renderRegisterPage(): void {
  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = ""; // Ensure container is cleared
  }

  const formRegister = new FormRegister();
  const formElement = formRegister.createForm();
  if (app) {
    app.appendChild(formElement); // Append the form to the app container
  }
}

// Entry point
document.addEventListener("DOMContentLoaded", () => {
  renderRegisterPage();
});
