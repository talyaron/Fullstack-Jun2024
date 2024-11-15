// register.ts

interface RegisterData {
    fullName: string;
    email: string;
    password: string;
    rememberMe: boolean;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm") as HTMLFormElement;
    registerForm.addEventListener("submit", handleRegister);
  });
  
  async function handleRegister(event: Event) {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    const rememberMe = (form.elements.namedItem("rememberMe") as HTMLInputElement).checked;
  
    const registerData: RegisterData = { fullName, email, password, rememberMe };
  
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
  
      if (!response.ok) throw new Error("Registration failed");
  
      const data = await response.json();
      console.log("Registration successful", data);
  
      if (rememberMe) {
        // מעבר לדף המשתמש במידה וסומן "Remember Me"
        window.location.href = "/userpage";
      } else {
        alert("Registration successful! Please login to continue.");
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed. Please try again.");
    }
  }
  