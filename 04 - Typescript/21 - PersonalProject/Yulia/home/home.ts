function greetUser() {
  const userData = JSON.parse(localStorage.getItem("registeredUser") || "{}");
  if (userData.name) {
    const greetingMessage = document.createElement("h1");
    greetingMessage.textContent = `Welcome, ${userData.name}!`;
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

