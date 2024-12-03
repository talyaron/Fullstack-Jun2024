import { RegisterController } from "./Controllers/registerController";
import { LoginController } from "./Controllers/loginController";
import { MainController } from "./Controllers/mainController";

// Function to clear the app container
function clearAppContainer() {
  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = ""; // Clear the app container
    console.log("App container cleared");
  } else {
    console.error("App container not found");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);

  // Initial page render based on the current hash
  handleHashChange(); // This will render the correct page based on the initial hash
});

function handleHashChange() {
  clearAppContainer(); // Ensure that the container is cleared before rendering a new form

  const hash = window.location.hash || "#login"; // Default to login if no hash is present

  if (hash === "#register") {
    const registerController = new RegisterController();
    registerController.init(); // Render the register form
  } else if (hash === "#main") {
    const mainController = new MainController();
    mainController.init(); // Render the main page
  } else if (hash === "#login") {
    const loginController = new LoginController();
    loginController.init(); // Render the login form
  } else {
    // Redirect to login if hash is unknown
    window.location.hash = "#login";
  }
}
