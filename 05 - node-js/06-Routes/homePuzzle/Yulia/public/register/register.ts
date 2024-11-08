async function handleRegister(event: Event) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const username = (form.elements.namedItem("username") as HTMLInputElement)
    .value;
  const password = (form.elements.namedItem("password") as HTMLInputElement)
    .value;

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Create user object
  const newUser = { username, password, isUserLogin: false };
  console.log("User object to be sent:", newUser);
  try {
    // Send a POST request to the server
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed.");
    }

    // Save the user in local storage if the registration is successful
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful! You can now log in.");
    window.location.href = "/login/login.html";
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Event listener for form submission
document
  .getElementById("registerForm")
  ?.addEventListener("submit", handleRegister);
