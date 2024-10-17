function greetUser() {
  const userEmail = localStorage.getItem("userEmail");
  if (userEmail) {
    const greetingMessage = document.createElement("h1");
    greetingMessage.textContent = `Welcome, ${userEmail}`;
    document.body.appendChild(greetingMessage);
  }
}
function displayLogsInConsole() {
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.forEach((log: string) => {
    console.log(log);
  });
}
document.addEventListener("DOMContentLoaded", () => {
    greetUser();
    displayLogsInConsole();
});

