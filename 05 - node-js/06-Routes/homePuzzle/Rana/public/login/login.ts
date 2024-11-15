// login.ts

interface LoginData {
  email: string;
  password: string;
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm") as HTMLFormElement;
  loginForm.addEventListener("submit", handleLogin);
});

async function handleLogin(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const password = (form.elements.namedItem("password") as HTMLInputElement).value;

  const loginData: LoginData = { email, password };

  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) throw new Error("Login failed");

    const data = await response.json();
    console.log("Login successful", data);
    
    // מעבר לעמוד משתמש במידה וההתחברות הצליחה
    window.location.href = "/userpage";
  } catch (error) {
    console.error("Error logging in:", error);
    alert("Login failed. Please check your credentials.");
  }
}
