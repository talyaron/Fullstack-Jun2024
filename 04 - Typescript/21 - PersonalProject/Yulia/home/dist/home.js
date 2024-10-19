function greetUser() {
    var userData = JSON.parse(localStorage.getItem("registeredUser") || "{}");
    if (userData.name) {
        var greetingMessage = document.createElement("h1");
        greetingMessage.textContent = "Welcome, " + userData.name + "!";
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
