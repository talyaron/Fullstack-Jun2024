// Add event listener when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior

      // Extract data from form inputs
      const usernameInput = document.getElementById(
        "username"
      ) as HTMLInputElement;
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement;

      const username = usernameInput.value;
      const password = passwordInput.value;

      // Call function to send data to the server
      await loginUser(username, password);
    });
  }
});

async function loginUser(username: string, password: string) {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to log in");
    }

    const data = await response.json();
    console.log(data.message);

    // Logic for a successful login
    if (data.success) {
      // Store the username in local storage for display on the main page
      localStorage.setItem("username", username);

      // Redirect to the main page
      window.location.href = "/";
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
}
