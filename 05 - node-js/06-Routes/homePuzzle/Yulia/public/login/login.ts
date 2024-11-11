document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); 
      const usernameInput = document.getElementById(
        "username"
      ) as HTMLInputElement;
      const passwordInput = document.getElementById(
        "password"
      ) as HTMLInputElement;
      const loginUsername = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      await loginUser(loginUsername, password);
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

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.success) {
      localStorage.setItem("loginUsername", username);
      localStorage.setItem("isUser", "true");
      window.location.href = "/";
    } else {
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while trying to log in.");
  }
}
