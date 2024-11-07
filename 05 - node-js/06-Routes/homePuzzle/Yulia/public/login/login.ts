// Add event listener when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); 
      // Extract data from form inputs
      const usernameInput = document.getElementById(
        "username"
      ) as HTMLInputElement;
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement;
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      // Call function to send data to the server
      await loginUser(username, password);
    });
  }
});

async function loginUser(username: string, password: string) {
  try {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (data.success) {
      localStorage.setItem("username", username);
      localStorage.setItem("isUserLogin", "true");
      window.location.href = "/";
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
}
