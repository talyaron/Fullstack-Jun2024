async function registerUser(username: string, password: string, email: string) {
  try {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    });
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error:", error);
  }
}


