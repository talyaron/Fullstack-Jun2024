function greetUser() {
    var userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
        var greetingMessage = document.createElement("h1");
        greetingMessage.textContent = "Welcome, " + userEmail;
        document.body.appendChild(greetingMessage);
    }
}
function displayLogsInConsole() {
    var logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.forEach(function (log) {
        console.log(log);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    greetUser();
    displayLogsInConsole();
});
